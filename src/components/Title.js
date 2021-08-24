import React from 'react';
import { Link } from 'react-router-dom';
import {removeCurrentUserToken, removeCurrentUsername}
from '../auth'
const Title = ({userToken, setUserToken,setMyUsername}) => (

    <div id="title">
       <Link to="/"><h1>
            Stranger's Things
        </h1> </Link> 
        {userToken? <nav>
            <ul>
            <Link to="/profile">
                <li className="navBtn">PROFILE</li>
                </Link>
                <Link to="/posts">
                <li className="navBtn">POSTS</li>
                </Link>
                <button className="navBtn"
                onClick={() => {setUserToken(removeCurrentUserToken())
                setMyUsername(removeCurrentUsername())}}
                >LOGOUT
                </button>
            </ul>
        </nav>:
        <nav>
            <ul>
                <Link to="/login">
                <li className="navBtn">LOGIN</li>
                </Link>
                <Link to="/register">
                <li className="navBtn">REGISTER</li>
                </Link>
            </ul>
        </nav>}
    </div>
    )

export default Title; 