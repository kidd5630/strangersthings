import React, {useEffect, useState} from 'react';

import {BrowserRouter as Router, Link, } from 'react-router-dom';

import {
    fetchMyData, 
    BASE_URL
} from '../api';

const SentMessages = ({userToken, myUsername, setSelectedPost, postID}) => {

    const [mySentMessageList, setMySentMessageList] = useState([]);

    useEffect(async () => {
        try {
            const results = await fetchMyData(BASE_URL, userToken);
            const sentMessageData = results.data.messages;
            setMySentMessageList(sentMessageData);
        } catch(error) {
            console.error(error);
        }
    }, []);

   return (
        <div>
            <h1 className="profileBodyHeader"> Sent Messages</h1>
            <div >
                {mySentMessageList.map(message => { 
                    if(message.fromUser.username === myUsername) {
                        return (
                            <div className="messages" key={message._id}>
                                <div>
                                    <ul>
                                        <li className="postLi"
                                            onClick={() => {
                                                setSelectedPost(message.post._id)
                                                postID(message.post._id)
                                        }}>
                                            <Link to={`/post/${message.post._id}`} className="postsLink">
                                                Message Again: {message.post.title}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <p>{message.content}</p>
                            </div>
                        ) 
                    } else {
                        return
                    } 
                })}
            </div>
        </div>
    )       
}

export default SentMessages; 