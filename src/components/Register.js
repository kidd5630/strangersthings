import React, {useState} from 'react';
import { Redirect } from "react-router-dom";

import {
    BASE_URL,
    fetchResgisterUser
} from '../api';

const Register = ({setUser, setUserToken}) => {

    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');
    const [confirMmyPassword, setConfirmMyPassword] = useState('');
    const [formSumbittedSuccessfully, setFormSumbittedSuccessfully] = useState(false);

    async function registerUser(event) {
        event.preventDefault();
       
        // if (!myUsername) {
        //     alert("please enter a username")
        // } else if (!myPassword) {
        //     alert("please enter a password")
        // } else 
        if (myPassword !== confirMmyPassword) {
            alert("please make sure your passwords match")
        } else {

            try {
                const results = await fetchResgisterUser(BASE_URL, myUsername, myPassword);
                const token = results.data.token;
                setUserToken(token);
                setUser(true);
                localStorage.setItem('userToken', JSON.stringify(token));
                setFormSumbittedSuccessfully(true)
            } catch(error) {
                console.error(error)
            }
            
        }
        
    }

    if(formSumbittedSuccessfully) {
        return  <Redirect to="/posts" />
    }

    return (
    <section>
        <h1>Register</h1>
            <form onSubmit={registerUser}>
                <div>
                    <input type="text" placeholder="Username" onChange={(event) => {setMyUsername(event.target.value)}} required/>
                 </div>
                <div>
                    <input type="text" placeholder="Password" onChange={(event) => {setMyPassword(event.target.value)}} required/>
                </div>
                <div>
                    <input type="text" placeholder="Confirm Password" onChange={(event) => {setConfirmMyPassword(event.target.value)}} required/>
                </div>
                <button type="submit">REGISTER</button>
            </form>
    </section>
    )
}


export default Register; 