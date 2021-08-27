import React, { useEffect, useState }from 'react';
import Aside from "./Aside";
import MakePosts from "./MakePosts";
import IndividualPost from './IndividualPost';
 
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams} from 'react-router-dom';

import {
    BASE_URL,
    deletePost,
    fetchAllPosts,
    sendMessage
} from '../api';







const Allposts = ({userToken, myUsername, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, myPostsList, 
  setMyPostsList}) => {

    // const [message, setMessage] = useState('');
    
    // async function  send(postId){
      
    //   try{
    //     const response = await sendMessage(BASE_URL, postId, userToken, message);
    //     if(response.success){
    //       emptyMessageForm()
    //     }
    //   }catch(error) {
    //     console.error(error)
    //   }
    // }

    // function emptyMessageForm(){
    //   setMessage('')
    // }
    let match = useRouteMatch();
    function Child() {
      let { id } = useParams();
    
      return (
        <div>
          <h3>ID: {id}</h3>
        </div>)
    }

    useEffect(() => {
      fetchAllPosts()
        .then((allPosts) => {
          setAllPosts(allPosts)
        })
        .catch(error => console.error(error))
    }, [postDeleted]);
    
    if(userToken){return (
        <>
        <div id="allposts">
          {allPosts.map(post => {
            const {_id, title, description, price, author: {username}, location} = post
            return <div key={_id}>
            <a><h3>{title}</h3></a>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Seller: {username}</p>
            <p>Location: {location}</p>
            {username === myUsername?
            <div>
            <button>Edit</button>
            <button 
              onClick={() => {
                  deleteItem(_id)}}>
              Delete
            </button>
            </div>:
            <div>
              <ul>
               <li> 
               <Link to={`/post/${_id}`}>Message About Post</Link> 
               </li>
               </ul>
            </div>
            }
           </div>

           
        })
        }
        </div>
        <MakePosts allPosts={allPosts} setAllPosts={setAllPosts} userToken={userToken} myPostsList={myPostsList} 
        setMyPostsList={setMyPostsList}/>
        </>
        )}else{return (
         
        <>
        <div id="allposts">
         {allPosts.map(post => {
           return <div key={post._id}>
           <h3>{post.title}</h3>
           <p>{post.description}</p>
           <p>Price: {post.price}</p>
           <p>Seller: {post.author.username}</p>
           <p>Location: {post.location}</p>
           </div>
         })
        }
        </div>
       <Aside />
        </>
        )
    }

}


export default Allposts