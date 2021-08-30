import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import {
    BASE_URL,
    fetchResgisterUser
} from '../api';

const Register = ({setUserToken, setMyPassword, myPassword, setMyUsername, myUsername}) => {
    
    const [confirMmyPassword, setConfirmMyPassword] = useState('');

    let history = useHistory();

    async function registerUser(event) {
        event.preventDefault();
        if (myPassword !== confirMmyPassword) {
            alert("please make sure your passwords match");
        } else {
            try {
                const results = await fetchResgisterUser(BASE_URL, myUsername, myPassword);
                if(results.success) {
                    const token = await results.data.token;
                    setUserToken(token);
                    setMyUsername(myUsername);
                    localStorage.setItem('userToken', JSON.stringify(token));
                    localStorage.setItem('myUsername', JSON.stringify(myUsername));
                    history.push("/profile");
                } else {
                    alert(results.error.message);
                }
            }catch(error) {
                console.error(error);
            }   
        }  
    }
    
    return (
        <section className="registerContainer">
            <h1 className="registerTitle">Register</h1>
            <form className="registerForm"onSubmit={registerUser}>
                <div>
                    <input type="text" placeholder="Username" className="registerInput"
                        onChange={(event) => {setMyUsername(event.target.value)}} required
                    />
                 </div>
                <div>
                    <input type="text" placeholder="Password" className="registerInput"
                        onChange={(event) => {setMyPassword(event.target.value)}} required
                    />
                </div>
                <div>
                    <input type="text" placeholder="Confirm Password" className="registerInput"
                        onChange={(event) => {setConfirmMyPassword(event.target.value)}} required
                    />
                </div>
                <button className="registerbtn" type="submit">
                    REGISTER
                </button>
            </form>
        </section>
    )
}


export default Register; 