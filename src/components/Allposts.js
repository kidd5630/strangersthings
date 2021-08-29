import React, { useEffect, useState }from 'react';
import Aside from "./Aside";
import MakePosts from "./MakePosts";

 
import {BrowserRouter as Router, Link} from 'react-router-dom';

import {
    BASE_URL,
    deletePost,
    fetchAllPosts,
    sendMessage
} from '../api';



const Allposts = ({userToken, myUsername, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, myPostsList, setMyPostsList, selectedPost,
  setSelectedPost, postID}) => {
    
    if(userToken){return (
        <>
        <div className="allPostsContainer">
          { allPosts && allPosts.map(post => {
            const {_id, title, description, price, author: {username}, location} = post
            return <div className="allposts" key={_id}>
            <h3 onClick={() => {
                 postID(_id)
                 setSelectedPost(_id)
               }}><Link to={`/post/${_id}`} className="postsLink">{title}</Link></h3>
            <p className="description">{description}</p>
            <p><b>Price:</b> {price}</p>
            <p><b>Seller:</b> {username}</p>
            <p><b>Location:</b> {location}</p>
            {username === myUsername?
            <div>
             <ul>
               <li
               onClick={() => {
                 postID(_id)
                 setSelectedPost(_id)
               }} className="postLi"> 
               <Link to={`/post/${_id}`} className="postsLink">Take Me To My Post</Link> 
               </li>
               </ul>
            </div>:
            <div>
              <ul>
               <li
               onClick={() => {
                postID(_id)
                setSelectedPost(_id)
               }} className="postLi"> 
               <Link to={`/post/${_id}`} className="postsLink">Message About Post</Link> 
               </li>
               </ul>
            </div>
            }
           </div>

           
        })
        }
        </div>
        <MakePosts allPosts={allPosts} 
        setAllPosts={setAllPosts} 
        userToken={userToken} 
        myPostsList={myPostsList} 
        setMyPostsList={setMyPostsList}/>
        </>
        )}else{return (
        <>
       
        <div className="allPostsContainer">
           <Aside />
         {allPosts.map(post => {
           return <div className="allposts" key={post._id}>
           <h3>{post.title}</h3>
           <p className="description">{post.description}</p>
           <p><b>Price:</b> {post.price}</p>
           <p><b>Seller:</b> {post.author.username}</p>
           <p><b>Location:</b> {post.location}</p>
           </div>
         })
        }
        </div>
        </>
        )
    }

}


export default Allposts