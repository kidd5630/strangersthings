import React, { useEffect, useState }from 'react';
import Aside from "./Aside";
import MakePosts from "./MakePosts";

import {
    BASE_URL,
    fetchResgisterUser,
    deletePost,
    fetchAllPosts
} from '../api';

const Allposts = ({userToken, myUsername}) => {
    const [allPosts, setAllPosts] = useState([])
    
    useEffect(() => {
        Promise.all([
         fetchAllPosts(),
        ])
         .then(([allPosts]) => {
           setAllPosts(allPosts)
         }).catch(error => console.error(error))}, []);
    

    console.log(allPosts)

    if(userToken){return (
        <>
        <div id="allposts">
         {allPosts.map(post => {
           return <div key={post._id}>
           <h3>{post.title}</h3>
           <p>{post.description}</p>
           <p>Price: {post.price}</p>
           <p>Seller: {post.author.username}</p>
           <p>Location: {post.location}</p>
           {post.author.username === myUsername?
           <div>
           <button>Edit</button>
           <button onClick={() => {deletePost(BASE_URL, post._id, userToken)}}>Delete</button>
           </div>:
           <div>
               <button>Message About Post</button>
           </div>
        }
           </div>
         })
        }
        </div>
        <MakePosts userToken={userToken}/>
        </>
    )}else{
        return (
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