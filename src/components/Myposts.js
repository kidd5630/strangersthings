import React, {useEffect, useState} from 'react';

import {fetchMyData, BASE_URL, fetchAllPosts} from '../api'

import MakePosts from './MakePosts'

import { Link } from 'react-router-dom';

const Myposts = ({userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, myPostsList, 
    setMyPostsList, setSelectedPost, selectedPost, postID, myUsername}) => {

useEffect(async () => {
    try {
        const result = await fetchMyData(BASE_URL, userToken)
        const postsData = result.data.posts
        setMyPostsList(postsData)
    } catch(error) {
        console.error(error)
    }
    }, [postDeleted]);
   

    console.log("in myposts",  allPosts)
   return (<div >
   <h1 className="profileBodyHeader" > My Posts</h1>
   <div className="myPostsContainer">
         {allPosts.map(post => {
             const {_id, title, description, price, author: {username}, location, active} = post
             if(active && myUsername === username) {
                return <div className="allposts myPosts" key={_id}>
           <h3 onClick={() => {
                postID(_id)
                setSelectedPost(_id)
            }}>
              <Link to={`/post/${_id}`} className="postsLink myPosts">  {title} </Link>
            </h3>
           <p className="description">{description}</p>
           <p><b>Price:</b> {price}</p>
           <p><b>Location:</b> {location}</p>
           <div>
           <ul>
               <li
               onClick={() => {
                postID(_id)
                setSelectedPost(_id)
               }} className="postLi"> 
               <Link to={`/post/${_id}`} className="postsLink myPosts">Take Me To My Post</Link> 
               </li>
               </ul>
           </div>
           </div> 
             } else {
                 return
             }
    
         })
        }
        <div className="allPostsAside">
        <MakePosts allPosts={allPosts}
        setAllPosts={setAllPosts}
        userToken={userToken}
        myPostsList={myPostsList} 
        setMyPostsList={setMyPostsList}/>
        </div>
        </div>
    </div>)
        
}


export default Myposts; 