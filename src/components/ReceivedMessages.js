import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {
    fetchMyData, 
    BASE_URL
} from '../api';

const ReceivedMessages = ({userToken, myUsername, setSelectedPost, postID}) => {

    const [myReceivedMessageList, setMyReceivedMessageList] = useState([]);

    useEffect(async () => {
        try {
            const results = await fetchMyData(BASE_URL, userToken);
            const receivedMessageData = results.data.messages;
            setMyReceivedMessageList(receivedMessageData);
        } catch(error) {
            console.error(error)
        }
    }, []);

   return (
        <div>
            <h1 className="profileBodyHeader"> Received Messages</h1>
            <div >
                {myReceivedMessageList.map(message => { 
                    if(message.fromUser.username !== myUsername) {
                        return ( 
                            <div className="messages" key={message._id}>
                                <h3>MESSAGE FROM: {message.fromUser.username}</h3>
                                <p>{message.content}</p>
                                <div>
                                    <ul>
                                        <li className="postLi" 
                                            onClick={() => {
                                                setSelectedPost(message.post._id)
                                                postID(message.post._id)
                                        }}>
                                            <Link to={`/post/${message.post._id}`} className="postsLink">
                                                View My Post: {message.post.title}
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )       
}


export default ReceivedMessages; 