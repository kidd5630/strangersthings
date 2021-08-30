import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import {
  fetchMyData, 
  BASE_URL, 
  sendMessage
} from '../api';

import EditPost from './EditPost';

const IndividualPost = ({userToken, deleteItem, allPosts, setAllPosts, myUsername, selectedPost,}) => {

  const [message, setMessage] = useState('');
  const [myPostMessages, setMyPostMessages] = useState([]);
  const [isActiveEdit, setActiveEdit] = useState("false");
  const [isActiveMessage, setActiveMessage] = useState("true");

  let history = useHistory();

  useEffect(async () => {
    try {
      const results = await fetchMyData(BASE_URL, userToken);
      const receivedMessageData = results.data.messages;
      setMyPostMessages(receivedMessageData);
    } catch(error) {
        console.error(error)
    }
  }, []);

  const ToggleClass = () => {
    setActiveEdit(!isActiveEdit);
    setActiveMessage(!isActiveMessage);
  };

  async function send(postId) {
    try {
      const response = await sendMessage(BASE_URL, postId, userToken, message);
      if(response.success) {
        emptyMessageForm();
      }
    } catch(error) {
        console.error(error);
    }
  }

  function emptyMessageForm() {
      setMessage('');
    }
   
  if(userToken) {
    return (
      <>
      <div className="ipForm">
        {allPosts.map(post => {
          const {_id, title, description, price, author: {username}, location, active} = post;
          if(active && _id === selectedPost) {
            return (
              <div className="allposts" key={_id}>
                <div className="IPText">
                  <h3>{title}</h3>
                  <p className="description">{description}</p>
                  <p><b>Price:</b> {price}</p>
                  <p><b>Seller:</b> {username}</p>
                  <p><b>Location:</b> {location}</p>
                </div>
                {username === myUsername 
                ?
                <>
                <div>
                  <button className="edit button" onClick={ToggleClass}>
                    Edit
                  </button>
                  <button className="delete button"
                    onClick={() => {
                      deleteItem(_id)
                      history.push("/profile")
                  }}>
                    Delete
                  </button>
                </div>
                <div className="ipInteractiveBox">
                  <div className={`editFeild-${isActiveEdit ? "inactive" : "active"}`}>
                    <EditPost 
                      userToken={userToken} 
                      allPosts={allPosts} 
                      setAllPosts={setAllPosts} 
                      ToggleClass={ToggleClass}/>
                  </div>
                  <div className={`messageFeild-${isActiveMessage ?  "active" : "inactive"}`}>
                    <h2 className="messageFeildHeader">MESSAGES FOR THIS POST</h2>
                    {myPostMessages && myPostMessages.map(message => { 
                      if(message.fromUser.username !== myUsername && message.post._id === selectedPost ) {
                        return ( 
                          <div className="messages" key={message._id}>
                            <h3>MESSAGE FROM: {message.fromUser.username}</h3>
                            <p>{message.content}</p>
                          </div> 
                        )
                      }
                    })}
                  </div>
                </div>
                </>
                :
                <div className="sendMessageFeild">
                  <input className="sendMessageInput" type="text" 
                    placeholder="Your Message Here" value={message} required 
                    onChange={(event) => {
                      setMessage(event.target.value)
                  }} />
                  <button className="sendMessageBtn" onClick={() => {send(_id)}}>Send Your Message</button>
                </div>
                }
              </div>)
          }
        })}
      </div>
      </>
    )}         
}   


export default IndividualPost; 