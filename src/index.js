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
    getCurrentUserToken
} from './auth';

const App = () => {
    const [allPosts, setAllPosts]= useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [userToken, setUserToken] = useState(getCurrentUserToken());
    const [myUsername, setMyUsername] = useState('');
    const [myPassword, setMyPassword] = useState('');

    console.log("userToken is", userToken)
    
    return (<Router>
        <div className="app">
        <Title 
        userToken={userToken}
        setUserToken={setUserToken} />
        {
        userToken?(<div>
        <Switch>
        <Route path="/profile"><Profile myUsername={myUsername}/></Route>
        <Route  path="/posts">
        <Allposts allPosts={allPosts}
            setAllPosts={setAllPosts} 
            userToken={userToken}
            myUsername={myUsername}
        />
        </Route>
        {/* <Route>
        <Logout userToken={userToken}
        setUserToken={setUserToken}/>
        </Route> */}
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
        <Route exact path="/"><Allposts /></Route>
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