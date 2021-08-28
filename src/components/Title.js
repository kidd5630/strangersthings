import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {removeCurrentUserToken, removeCurrentUsername}
from '../auth'
const Title = ({userToken, setUserToken,setMyUsername}) => {

let history = useHistory()

    return (<div id="title">
       <Link to="/posts" style={{ textDecoration: 'none', fontSize: '26px' }}><h1 className="title">
            Stranger's Things
        </h1> </Link> 
        {userToken? <nav>
            <div className="profileBox">
            <ul>
            <Link to="/profile">
                <li className="navBtn">PROFILE</li>
                </Link>
                <Link to="/posts">
                <li className="navBtn">POSTS</li>
                </Link>
                <button className="navBtn"
                onClick={() => {setUserToken(removeCurrentUserToken())
                setMyUsername(removeCurrentUsername())
                history.push("/")}}
                >LOGOUT
                </button>
            </ul>
            </div>
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
}

export default Title; 