import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch} from 'react-router-dom';

import Myposts from './Myposts';

const Profile = ({myUsername, userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts}) => {

    let match = useRouteMatch();

    return (<Router><div>
    <h1 className="welcomMessage">Welcome {myUsername}</h1>
    <nav>
            <ul>
            <li className="profileBtn" >
                <Link to={`${match.url}/my-posts`}>
                    My Posts 
                </Link>
            </li>
            <li className="profileBtn" >
                <Link to={`${match.url}/sent-messages`}>
                    Sent Messages 
                </Link>
            </li>
            <li className="profileBtn" >
                <Link to={`${match.url}/received-messages`}>
                    Received Messages 
                </Link>
            </li>
            </ul>
           
        </nav>
        <Switch>
            <Route path={`${match.path}/my-posts`}>
                <Myposts userToken={userToken}
                postDeleted={postDeleted}
                setPostDeleted={setPostDeleted}
                deleteItem={deleteItem}
                allPosts={allPosts}
                setAllPosts={setAllPosts}/>
            </Route>
            <Route path={`${match.path}/sent-messages`}>
                Sent Messages Coming Soon
            </Route>
            <Route path={`${match.path}/received-messages`}>
                Received Messages Coming Soon
            </Route>
            <Route path={`${match.path}/`}>
                Received Messages will go here 
            </Route>
        </Switch>
    </div>
        
    </Router>

    )
}


export default Profile; 