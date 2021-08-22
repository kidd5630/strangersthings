import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {
    Login,
    // Myposts,
    Profile,
    Register,
    Title,
    Allposts
  } from './components';

import {
    getCurrentUserToken
} from './auth';

const App = () => {
    const [allPosts, setAllPosts]= useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');

    
    return (<Router>
        <div className="app">
        <Title 
        userToken={userToken} />
        {
        userToken?<>
        <Switch>
        <Route path="/profile"><Profile /></Route>
        <Route  path="/posts">
        <Allposts allPosts={allPosts}
            setAllPosts={setAllPosts} 
            userToken={userToken}
        />
        </Route>
        </Switch>
        </>:
        <>
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
        <Route exact path="/"><Allposts /></Route>

        </Switch>
        </>
        }
        

        </div>
    </Router>)
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
   );