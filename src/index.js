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

// import {
//     fetchAllPosts
// } from './api';

const App = () => {
    const [allPosts, setAllPosts]= useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [user, setUser] = useState(false); 
    const [userToken, setUserToken] = useState('');

console.log("user", user) 

    return (<Router>
        <div className="app">
        <Title 
        user= {user} />
        {
        user?<>
        <Switch>
        <Route path="/profile"><Profile /></Route>
        <Route  path="/posts">
        <Allposts allPosts={allPosts}
            setAllPosts={setAllPosts}
        />
        </Route>
        </Switch>
        </>:
        <>
        <Switch>
        <Route path="/register">
            <Register 
                setUser={setUser}
                setUserToken={setUserToken}
                />
            </Route>
        <Route path="/login"><Login /></Route>
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