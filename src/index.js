import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {
    Login,
    // Myposts,
    Profile,
    Register,
    Title,
    Allposts,
    IndividualPost
  } from './components';

import {
    getCurrentUserToken,
    getCurrentUsername,

} from './auth';

import {
    deletePost,
    BASE_URL,
    fetchAllPosts
} from './api';


const App = () => {
    const [allPosts, setAllPosts]= useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState(getCurrentUsername());
    const [myPassword, setMyPassword] = useState('');
    const [postDeleted, setPostDeleted] = useState(0);
    const [myPostsList, setMyPostsList] = useState([]);
    const [selectedPost, setSelectedPost] = useState(getPostId())
    const [myEditedPost, setMyEditedPost] = useState(0);
    
    useEffect(() => {
        fetchAllPosts()
          .then((allPosts) => {
            setAllPosts(allPosts)
          })
          .catch(error => console.error(error))
    }, [postDeleted]);
      
    async function deleteItem(id){
        const result = await deletePost(BASE_URL, id, userToken)
        if(result.success){
            setPostDeleted(postDeleted +1)
        }
    }

    function postID(post_ID) {
        localStorage.removeItem('postId');
        localStorage.setItem('postId', JSON.stringify(post_ID) )
        
      }

    function getPostId() {
        const selectedpostID = JSON.parse(localStorage.getItem('postId'))
        return selectedpostID
    }

    return (<Router>
        <div className="app">
        <Title 
        userToken={userToken}
        setUserToken={setUserToken} 
        setMyUsername={setMyUsername}
        setSelectedPost={setSelectedPost}/>
        {
        userToken?(<div>
        <Switch>
        <Route path="/profile">
            <Profile myUsername={myUsername}
                userToken={userToken}
                postDeleted={postDeleted}
                setPostDeleted={setPostDeleted}
                deleteItem={deleteItem}
                allPosts={allPosts}
                setAllPosts={setAllPosts}
                myPostsList={myPostsList} 
                setMyPostsList={setMyPostsList}
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                postID={postID}
            />
        </Route>
        <Route path="/posts">
        <Allposts  
            userToken={userToken}
            myUsername={myUsername}
            postDeleted={postDeleted}
            setPostDeleted={setPostDeleted}
            deleteItem={deleteItem}
            allPosts={allPosts}
            setAllPosts={setAllPosts}
            myPostsList={myPostsList} 
            setMyPostsList={setMyPostsList}
            selectedPost={selectedPost}
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
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                myPostList={myPostsList}
                setMyPostsList={setMyPostsList}
                setMyEditedPost={setMyEditedPost}
                myEditedPost={myEditedPost}
                /> 
        </Route>
        <Route exact path="/"><Profile myUsername={myUsername}
                userToken={userToken}
                postDeleted={postDeleted}
                setPostDeleted={setPostDeleted}
                deleteItem={deleteItem}
                allPosts={allPosts}
                setAllPosts={setAllPosts}
                myPostsList={myPostsList} 
                setMyPostsList={setMyPostsList}
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                postID={postID}
            /></Route>
        </Switch>
        </div>
        ):
        (<div>
        <Switch>
        <Route path="/register">
            <Register 
                setUserToken={setUserToken}
                myUsername={myUsername}
                setMyUsername={setMyUsername}
                myPassword={myPassword}
                setMyPassword={setMyPassword}
                />
            </Route>
        <Route path="/login"><Login 
            myUsername={myUsername}
            setMyUsername={setMyUsername}
            myPassword={myPassword}
            setMyPassword={setMyPassword}
            setUserToken={setUserToken}
            />
        </Route>
        <Route exact path="/"><Allposts allPosts={allPosts}
            setAllPosts={setAllPosts}/></Route>
        </Switch>
        </div>)
        }
        

        </div>
    </Router>)
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
   );