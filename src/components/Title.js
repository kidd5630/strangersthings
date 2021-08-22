import React from 'react';
import { Link } from 'react-router-dom';


const Title = ({userToken}) => (

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
                <Link to="/">
                <li className="navBtn">LOGOUT</li>
                </Link>
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