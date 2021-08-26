import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {
    Login,
    // Myposts,
    Profile,
    Register,
    Title,
    Allposts,
  } from './components';

import {
    getCurrentUserToken,
    getCurrentUsername,

} from './auth';

import {
    deletePost,
    BASE_URL
} from './api';

const App = () => {
    const [allPosts, setAllPosts]= useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState(getCurrentUsername());
    const [myPassword, setMyPassword] = useState('');
    const [postDeleted, setPostDeleted] = useState(0);
    const [myPostsList, setMyPostsList] = useState([]);
    
    async function deleteItem(id){
      const result = await deletePost(BASE_URL, id, userToken)
      if(result.success){
        setPostDeleted(postDeleted +1)
      }
    }

    return (<Router>
        <div className="app">
        <Title 
        userToken={userToken}
        setUserToken={setUserToken} 
        setMyUsername={setMyUsername}/>
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
        />
        </Route>
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