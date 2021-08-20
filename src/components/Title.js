import React from 'react';
import { Link } from 'react-router-dom';


const Title = () => (
    <div id="title">
        <h1>
            Stranger's Things
        </h1>
        <nav>
            <ul>
                <Link to="/login">
                <button>Log In</button>
                </Link>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </ul>
        </nav>
    </div>
    )

export default Title; 