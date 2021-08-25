import React, {useEffect, useState} from 'react';

import {fetchMyData, BASE_URL} from '../api'

const SentMessages = ({userToken, myUsername}) => {

const [mySentMessageList, setMySentMessageList] = useState([]);

useEffect(async () => {
    try {
        const results = await fetchMyData(BASE_URL, userToken)
        console.log(results)
        const sentMessageData = results.data.messages
        setMySentMessageList(sentMessageData)

    } catch(error) {
        console.error(error)
    }
    }, []);


   return (<div>
   <h1> Sent Messages</h1>
   <div id="allposts">
         {mySentMessageList.map(message => { 
            if(message.fromUser.username === myUsername) {return <div key={message._id}>
           <h3>Sent by Me</h3>
           <p>{message.content}</p>
           <div>
           <button>Message Again: {message.post.title}</button>
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


export default SentMessages; 