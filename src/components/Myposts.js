import React, {useEffect, useState} from 'react';

import {fetchMyData, BASE_URL, fetchAllPosts} from '../api'

import MakePosts from './MakePosts'

const Myposts = ({userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, myPostsList, 
    setMyPostsList}) => {

useEffect(async () => {
    try {
        const result = await fetchMyData(BASE_URL, userToken)
        const postsData = result.data.posts
        setMyPostsList(postsData)
    } catch(error) {
        console.error(error)
    }
    }, [postDeleted]);
   


   return (<div>
   <h1> My Posts</h1>
   <div id="allPosts">
         {myPostsList.map(post => {
             const {_id, title, description, price, author: {username}, location, active} = post
             if(active) {
                return <div key={_id}>
           <h3>{title}</h3>
           <p>{description}</p>
           <p>Price: {price}</p>
           <p>Location: {location}</p>
           <div>
           <button>Edit</button>
           <button onClick={() => {deleteItem(_id)}}>Delete</button>
           </div>
           </div> 
             } else {
                 return
             }
    
         })
        }
        <MakePosts allPosts={allPosts}
        setAllPosts={setAllPosts}
        userToken={userToken}
        myPostsList={myPostsList} 
        setMyPostsList={setMyPostsList}/>
        </div>
    </div>)
        
}


export default Myposts; 