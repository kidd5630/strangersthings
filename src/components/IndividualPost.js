import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, useRouteMatch, } from 'react-router-dom'
import {fetchMyData, BASE_URL, fetchAllPosts, sendMessage} from '../api'


const IndividualPost = ({userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, 
    setMyPostsList, myUsername, selectedPost, setSelectedPost}) => {

  const [message, setMessage] = useState('');
    
  async function  send(postId){
    try{
      const response = await sendMessage(BASE_URL, postId, userToken, message);
      if(response.success){
        emptyMessageForm()
      }
      }catch(error) {
        console.error(error)
      }
    }

  function emptyMessageForm(){
      setMessage('')
    }

    useEffect(async () => {
    try {
        const result = await fetchAllPosts()
    } catch(error) {
        console.error(error)
    }
    }, [postDeleted]);
   
    if(userToken){return (
        <>
        <div id="allposts">
          {allPosts.map(post => {
            const {_id, title, description, price, author: {username}, location} = post

            if(_id === selectedPost){
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
              
             <input type="text" placeholder="Your Message Here" required
             onChange={(event) => {setMessage(event.target.value)}} />
             <button onClick={() => {sendMessage(BASE_URL, _id, userToken, message); console.log(allPosts)}}>Send Your Message</button>
         </div>
            }
           </div>
           }
        })
        }
        </div>
        </>
        )}
            
}   




export default IndividualPost; 