import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {
    // Allposts,
    // Login,
    // Myposts,
    // Profile,
    // Register,
    Title
  } from './components';

const App = () => {
    const [posts, setPosts]= useState([])
    const [myPosts, setMyPosts] = useState([])
    const [user, setUser] = useState('') 
    return (<Router>
        <div className="app">
        <Title />
        {/* <Route path="/login"><Login /></Route> */}

        </div>
    </Router>)
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
   );