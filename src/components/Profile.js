import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch} from 'react-router-dom';

import Myposts from './Myposts';
import SentMessages from './SentMessages';
import ReceivedMessages from './ReceivedMessages';

import IndividualPost from './IndividualPost';

const Profile = ({myUsername, userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, myPostsList, setMyPostsList, selectedPost, setSelectedPost, postID}) => {

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
                setSelectedPost={setSelectedPost}
                selectedPost={selectedPost}
                postID={postID}
                />
            </Route>
            <Route path={`${match.path}/sent-messages`}>
                <SentMessages userToken={userToken} 
                myUsername={myUsername}
                allPosts={allPosts} 
                setAllPosts={setAllPosts} 
                myPostsList={myPostsList} 
                setMyPostsList={setMyPostsList} 
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                setSelectedPost={setSelectedPost}
                selectedPost={selectedPost}
                postID={postID}/>
            </Route>
            <Route path={`${match.path}/received-messages`}>
                <ReceivedMessages userToken={userToken} myUsername={myUsername} setSelectedPost={setSelectedPost}
                selectedPost={selectedPost} 
                postID={postID}/>
            </Route>
            <Route path="/post/:id">
            <IndividualPost 
                myUsername={myUsername}
                allPosts={allPosts}
                setAllPosts={setAllPosts}
                userToken={userToken}
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                myPostList={myPostsList}
                setMyPostsList={setMyPostsList}
                postID={postID}
                /> 
        </Route>
        <Route exact path="/profile">
                <ReceivedMessages userToken={userToken} myUsername={myUsername} setSelectedPost={setSelectedPost}
                selectedPost={selectedPost} />
            </Route>
        </Switch>
    </div>
        
    </Router>

    )
}


export default Profile; 