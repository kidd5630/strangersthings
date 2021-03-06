import React from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch, 
    useRouteMatch
} from 'react-router-dom';

import Myposts from './Myposts';
import SentMessages from './SentMessages';
import ReceivedMessages from './ReceivedMessages';
import IndividualPost from './IndividualPost';

const Profile = ({myUsername, userToken, postDeleted, deleteItem, allPosts, setAllPosts, selectedPost, setSelectedPost, postID}) => {

    let match = useRouteMatch();

    return (
        <Router>
            <div>
                <div className="profileMenu">
                    <h1 className="welcomMessage">Welcome {myUsername}</h1>
                    <nav className="profile">
                        <ul>
                            <li className="profileBtn" >
                                <Link to={`${match.url}/my-posts`} className="profileLink" >
                                    My Posts 
                                </Link>
                            </li>
                            <li className="profileBtn" >
                                <Link to={`${match.url}/sent-messages`} className="profileLink" >
                                    Sent Messages 
                                </Link>
                            </li>
                            <li className="profileBtn" >
                                <Link to={`${match.url}/received-messages`} className="profileLink" >
                                    Received Messages 
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            
                <Switch>
                    <Route path={`${match.path}/my-posts`}>
                        <Myposts 
                            userToken={userToken}
                            postDeleted={postDeleted}
                            allPosts={allPosts}
                            setAllPosts={setAllPosts}
                            setSelectedPost={setSelectedPost}
                            postID={postID}
                            myUsername={myUsername}
                        />
                    </Route>
                    <Route path={`${match.path}/sent-messages`}>
                            <SentMessages 
                                userToken={userToken} 
                                myUsername={myUsername}
                                setSelectedPost={setSelectedPost}
                                postID={postID}
                            />
                    </Route>
                    <Route path={`${match.path}/received-messages`}>
                            <ReceivedMessages 
                                userToken={userToken} 
                                myUsername={myUsername} 
                                setSelectedPost={setSelectedPost}
                                postID={postID}
                            />
                    </Route>
                    <Route path="/post/:id">
                        <IndividualPost 
                            myUsername={myUsername}
                            allPosts={allPosts}
                            setAllPosts={setAllPosts}
                            userToken={userToken}
                            deleteItem={deleteItem}
                            selectedPost={selectedPost}
                        /> 
                    </Route>
                    <Route exact path="/profile">
                        <ReceivedMessages 
                            userToken={userToken} 
                            myUsername={myUsername} 
                            setSelectedPost={setSelectedPost}
                            selectedPost={selectedPost} 
                            postID={postID} 
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}


export default Profile; 