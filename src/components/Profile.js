import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch} from 'react-router-dom';

import Myposts from './Myposts';
import SentMessages from './SentMessages';
import ReceivedMessages from './ReceivedMessages';

const Profile = ({myUsername, userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, myPostsList, 
    setMyPostsList}) => {

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
                setAllPosts={setAllPosts}
                myPostsList={myPostsList} 
                setMyPostsList={setMyPostsList}
                />
            </Route>
            <Route path={`${match.path}/sent-messages`}>
                <SentMessages userToken={userToken} myUsername={myUsername}/>
            </Route>
            <Route path={`${match.path}/received-messages`}>
                <ReceivedMessages userToken={userToken} myUsername={myUsername} />
            </Route>
            <Route exact path={`${match.path}`}>
                <ReceivedMessages userToken={userToken} myUsername={myUsername} />
            </Route>
        </Switch>
    </div>
        
    </Router>

    )
}


export default Profile; 