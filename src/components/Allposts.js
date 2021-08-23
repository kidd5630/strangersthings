import React, { useEffect, useState }from 'react';
import Aside from "./Aside";
import MakePosts from "./MakePosts";

import {
    BASE_URL,
    fetchResgisterUser
} from '../api';

const Allposts = ({userToken, myUsername}) => {

    const [allPosts, setAllPosts] = useState([])
    
    useEffect(() => {
        fetch(`${BASE_URL}/posts`)
        .then(res => res.json())
        .then(results => {setAllPosts(results.data.posts)})
    }, [])

    console.log(allPosts)
    console.log("please show up", localStorage.getItem('myUsername'))

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
           <button>Delete</button>
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