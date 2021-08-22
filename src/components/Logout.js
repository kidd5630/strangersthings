import React, { useEffect } from 'react';
import {
    getCurrentUserToken
} from '../auth';

const Logout = ({userToken, setUserToken}) =>{
    // console.log("user token is ", userToken)
    localStorage.removeItem('userToken')
    localStorage.removeItem('userUsername')
    console.log("should be empty", userToken)
    
    return <h1>you logged out</h1>
}

export default Logout; 