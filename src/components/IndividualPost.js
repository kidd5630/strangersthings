import React, {useState, useEffect} from 'react';
import {fetchMyData, BASE_URL, fetchAllPosts, sendMessage, editPost} from '../api';

import EditPost from './EditPost';

const IndividualPost = ({userToken, postDeleted, setPostDeleted, deleteItem, allPosts, setAllPosts, myPostList, setMyPostsList, myUsername, selectedPost, setSelectedPost, updateItem, setMyEditedPost, myEditedPost}) => {

  const [message, setMessage] = useState('');
  const [myPostMessages, setMyPostMessages] = useState([])

  console.log("selectedPosts", selectedPost)

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
        <div >
          {allPosts.map(post => {
            const {_id, title, description, price, author: {username}, location} = post
            
            if(_id === selectedPost){
            return (<div className="allposts" key={_id}>
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <p><b>Price:</b> {price}</p>
            <p><b>Seller:</b> {username}</p>
            <p><b>Location:</b> {location}</p>
            {username === myUsername ?
            <>
            <div>
            <button onClick={() => {
            }}>Edit</button>
            <button 
              onClick={() => {
                  deleteItem(_id)}}>
              Delete
            </button>
            {/* Edit Post here but innactive. On click we change to active? mypostsmessage set to active deactive on click  */}
            </div>
            <EditPost selectedPost={selectedPost} userToken={userToken} allPosts={allPosts} setAllPosts={setAllPosts} myPostsList={myPostList} setMyPostsList={setMyPostsList} updateItem={updateItem} setMyEditedPost={setMyEditedPost} myEditedPost={myEditedPost}/>
            {/* {myPostMessages && myPostMessages.map(message => { 
              if(message.fromUser.username !== myUsername && message.post._id === selectedPost ) {
                return ( 
                    <div key={message._id}>
                      <h3>Message from: {message.fromUser.username}</h3>
                      <p>{message.content}</p>
                   </div> 
                     )
               }
               })} */}
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