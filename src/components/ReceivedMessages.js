import React, {useEffect, useState} from 'react';

import {fetchMyData, BASE_URL} from '../api'

const ReceivedMessages = ({userToken, myUsername}) => {

const [myReceivedMessageList, setMyReceivedMessageList] = useState([]);

useEffect(async () => {
    try {
        const results = await fetchMyData(BASE_URL, userToken)
        console.log(results)
        const receivedMessageData = results.data.messages
        setMyReceivedMessageList(receivedMessageData)

    } catch(error) {
        console.error(error)
    }
    }, []);


   return (
    <div>
        <h1> Received Messages</h1>
        <div id="allposts">
            {myReceivedMessageList.map(message => { 
                if(message.fromUser.username !== myUsername) {
                    return (
                        <div key={message._id}>
                            <h3>Message from: {message.fromUser.username}</h3>
                            <p>{message.content}</p>
                            <div>
                                <button>View My Post: {message.post.title}</button>
                            </div>
                        </div> )
                } else {
                    return
                }    
                })
            }
        </div>
    </div>)
        
}


export default ReceivedMessages; 