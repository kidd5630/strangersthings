import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams} from 'react-router-dom'

import {fetchMyData, BASE_URL} from '../api'

const ReceivedMessages = ({userToken, myUsername, setSelectedPost, selectedPost, postID}) => {

const [myReceivedMessageList, setMyReceivedMessageList] = useState([]);

useEffect(async () => {
    try {
        const results = await fetchMyData(BASE_URL, userToken)
        const receivedMessageData = results.data.messages
        setMyReceivedMessageList(receivedMessageData)
    } catch(error) {
        console.error(error)
    }
    }, []);


   return (<div>
        <h1 className="profileBodyHeader"> Received Messages</h1>
        <div >
            {myReceivedMessageList.map(message => { 
                if(message.fromUser.username !== myUsername) {
                    return ( <div className="messages" key={message._id}>
                        <h3>MESSAGE FROM: {message.fromUser.username}</h3>
                        <p>{message.content}</p>
                            <div>
                                <ul>
                                    <li onClick={() => {
                                          setSelectedPost(message.post._id)
                                          postID(message.post._id)
                                        }} className="postLi">
                                        <Link to={`/post/${message.post._id}`} className="postsLink">View My Post: {message.post.title}</Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    </div>)
        
}


export default ReceivedMessages; 