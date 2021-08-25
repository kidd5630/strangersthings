import React, {useEffect, useState} from 'react';

import {fetchMyData, BASE_URL, deletePost} from '../api'

const Myposts = ({userToken}) => {

const [myPostsList, setMyPostsList] = useState([]);

const myPostsURL = 'profile/my-posts'

console.log("my myPostsList", myPostsList)

useEffect(async () => {
    try {
        const result = await fetchMyData(BASE_URL, userToken)
        const postsData = result.data.posts
        setMyPostsList(postsData)

    } catch(error) {
        console.error(error)
    }
    }, []);
   



   return (<div>
   <h1> My Posts</h1>
   <div id="allposts">
         {myPostsList.map(post => {
             if(post.active) {
                return <div key={post._id}>
           <h3>{post.title}</h3>
           <p>{post.description}</p>
           <p>Price: {post.price}</p>
           <p>Location: {post.location}</p>
           <div>
           <button>Edit</button>
           <button onClick={() => {deletePost(BASE_URL, post._id, userToken)}}>Delete</button>
           </div>
           </div> 
             } else {
                 return
             }
        
         })
        }
        </div>
    </div>)
        
}


export default Myposts; 