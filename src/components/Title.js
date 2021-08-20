import React from 'react';
import { Link } from 'react-router-dom';


const Title = ({user}) => (

    <div id="title">
        <h1>
            Stranger's Things
        </h1>
        {user? <nav>
            <ul>
            <Link to="/profile">
                <button className="navBtn">PROFILE</button>
                </Link>
                <Link to="/posts">
                <button className="navBtn">POSTS</button>
                </Link>
                <Link to="/">
                <button className="navBtn">LOGOUT</button>
                </Link>
            </ul>
        </nav>:
        <nav>
            <ul>
                <Link to="/login">
                <button className="navBtn">LOGIN</button>
                </Link>
                <Link to="/register">
                <button className="navBtn">REGISTER</button>
                </Link>
            </ul>
        </nav>}
    </div>
    )

export default Title; 