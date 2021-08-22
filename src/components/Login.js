import React from 'react';

import { Redirect } from "react-router-dom";

import {
    BASE_URL,
    fetchLoginUser
} from '../api';

const Login = ({setMyPassword, myPassword, setMyUsername, myUsername, setUserToken}) => {

    async function loginUser(event) {
        event.preventDefault();

        try {
            const results = await fetchLoginUser(BASE_URL, myUsername, myPassword);
            console.log("token", results.data.token)
            console.log("username", myUsername)
            const token = await results.data.token
            setUserToken(token)
            setMyUsername(myUsername)
            localStorage.setItem('userToken', JSON.stringify(token));
            localStorage.setItem('userUsername', JSON.stringify(myUsername));
            return <Redirect to="/posts" />
          
        }catch(error) {
            console.error(error)
        }
        
    }

    return (
        <section>
            <h1>Login</h1>
                <form onSubmit={loginUser}>
                    <div>
                        <input type="text" placeholder="Username" onChange={(event) => {setMyUsername(event.target.value)}} required/>
                     </div>
                    <div>
                        <input type="text" placeholder="Password" onChange={(event) => {setMyPassword(event.target.value)}} required/>
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
        </section>
        )
    
}
export default Login; 