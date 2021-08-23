import React, { useEffect, useState }from 'react';
import Aside from "./Aside";
import MakePosts from "./MakePosts";

import {
    BASE_URL,
    fetchResgisterUser
} from '../api';

const Allposts = ({userToken}) => {

    const [allPosts, setAllPosts] = useState([])
    
    useEffect(() => {
        fetch(`${BASE_URL}/posts`)
        .then(res => res.json())
        .then(results => {setAllPosts(results.data.posts)})
    }, [])

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
           </div>
         })
        }
        </div>
        <MakePosts />
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