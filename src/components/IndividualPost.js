import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, useRouteMatch, } from 'react-router-dom'
import {fetchMyData, BASE_URL, fetchAllPosts, sendMessage} from '../api'


const IndividualPost = ({userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, 
    setMyPostsList, myUsername, selectedPost, setSelectedPost}) => {

  const [message, setMessage] = useState('');
  const [myPostMessages, setMyPostMessages] = useState([])
    
  async function send(postId){
    try{
      const response = await sendMessage(BASE_URL, postId, userToken, message);
      if(response.success){
        emptyMessageForm()
      }
      }catch(error) {
        console.error(error)
      }
    }

    useEffect(async () => {
      try {
          const results = await fetchMyData(BASE_URL, userToken)
          const receivedMessageData = results.data.messages
          setMyPostMessages(receivedMessageData)
      } catch(error) {
          console.error(error)
      }
      }, []);

  function emptyMessageForm(){
      setMessage('')
    }
   
    if(userToken){
      return (
        <>
        <div id="allposts">
          {allPosts.map(post => {
            const {_id, title, description, price, author: {username}, location} = post

            if(_id === selectedPost){
            return (<div key={_id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Seller: {username}</p>
            <p>Location: {location}</p>
            {username === myUsername ?
            <>
            <div>
            <button>Edit</button>
            <button 
              onClick={() => {
                  deleteItem(_id)}}>
              Delete
            </button>
            </div>
            {myPostMessages && myPostMessages.map(message => { 
              if(message.fromUser.username !== myUsername && message.post._id === selectedPost ) {
                return ( 
                    <div key={message._id}>
                      <h3>Message from: {message.fromUser.username}</h3>
                      <p>{message.content}</p>
                   </div> 
                     )
               }
               })}
            </>
            :
             <div>
              
             <input type="text" placeholder="Your Message Here" value={message} 
             required
             onChange={(event) => {setMessage(event.target.value)}} />
             <button onClick={() => {send(_id)}}>Send Your Message</button>
         </div>
            }
           </div>
          )}
        })
        }
        </div>
        </>
        )}
            
}   




export default IndividualPost; 