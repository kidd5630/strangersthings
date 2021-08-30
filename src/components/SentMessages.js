import React, {useEffect, useState} from 'react';

import {fetchMyData, BASE_URL} from '../api'
import {BrowserRouter as Router, Link, } from 'react-router-dom';

const SentMessages = ({userToken, myUsername, allPosts, setAllPosts, myPostsList, setMyPostsList, selectedPost,
    setSelectedPost, postID}) => {

    const [mySentMessageList, setMySentMessageList] = useState([]);

    useEffect(async () => {
        try {
        const results = await fetchMyData(BASE_URL, userToken)
        const sentMessageData = results.data.messages
        setMySentMessageList(sentMessageData)
        } catch(error) {
        console.error(error)
        }
    }, []);



   return (<div>
   <h1 className="profileBodyHeader"> Sent Messages</h1>
   <div >
         {mySentMessageList.map(message => { 
            if(message.fromUser.username === myUsername) {
                return <div className="messages" key={message._id}>
           <div>
           <ul>
               <li onClick={() => {
                    setSelectedPost(message.post._id)
                    postID(message.post._id)
                }} className="postLi">
                   <Link to={`/post/${message.post._id}`} className="postsLink">Message Again: {message.post.title}</Link>
               </li>
           </ul>
           </div>
           <p>{message.content}</p>
           </div> 
           } else {
               return
           } 
        
         })
        }
        </div>
    </div>)
        
}

export default SentMessages; 