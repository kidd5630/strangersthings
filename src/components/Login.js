
import React from 'react';

import { useHistory } from "react-router-dom";

import {
    BASE_URL,
    fetchLoginUser
} from '../api';

const Login = ({setMyPassword, myPassword, setMyUsername, myUsername, setUserToken}) => {

let history = useHistory()
    async function loginUser(event) {
        
        event.preventDefault();

        try {
            const results = await fetchLoginUser(BASE_URL, myUsername, myPassword);
            if(results.success) {
                const token = await results.data.token
                setUserToken(token)
                setMyUsername(myUsername)
                localStorage.setItem('userToken', JSON.stringify(token));
                localStorage.setItem('myUsername', JSON.stringify(myUsername));
                history.push("/profile")
            } else {
                alert(results.error.message)
            }
            
        }catch(error) {
            console.error(error)
        }
        
        
    }

    return (
        <section className="loginContainer">
            <h1 className="loginTitle">Login</h1>
                <form className="loginForm" onSubmit={loginUser}>
                    <div>
                        <input type="text" placeholder="Username" className="loginInput" onChange={(event) => {setMyUsername(event.target.value)}} required/>
                    </div>
                    <br></br>
                    <div>
                        <input type="text" placeholder="Password" className="loginInput" onChange={(event) => {setMyPassword(event.target.value)}} required/>
                    </div>
                    <button className="loginBtn"type="submit">LOGIN</button>
                </form>
        </section>
        )
    
}
export default Login; 