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

const App = () => {
    const [posts, setPosts]= useState([])
    const [myPosts, setMyPosts] = useState([])
    const [user, setUser] = useState('') 
    return (<Router>
        <div className="app">
        <Title 
        user= {user} />
        {
        user?<>
        <Switch>
        <Route path="/profile"><Profile /></Route>
        <Route  path="/posts"><Allposts /></Route>
        </Switch>
        </>:
        <>
        <Switch>
        <Route path="/register"><Register /></Route>
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