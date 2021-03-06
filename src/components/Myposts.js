import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import MakePosts from './MakePosts';

const Myposts = ({userToken, postDeleted, allPosts, setAllPosts, setSelectedPost, postID, myUsername}) => {

    useEffect(async () => {
        try {
            setAllPosts([...allPosts]);
        } catch(error) {
            console.error(error);
        }
    }, [postDeleted]);
   
    return (
        <div>
            <h1 className="profileBodyHeader"> My Posts</h1>
            <div className="myPostsContainer">
                {allPosts.map(post => {
                    const {_id, title, description, price, author: {username}, location, active} = post
                    if(active && myUsername === username) {
                        return (
                            <div className="allposts myPosts" key={_id}>
                                <h3 onClick={() => {
                                        postID(_id)
                                        setSelectedPost(_id)
                                }}>
                                    <Link to={`/post/${_id}`} className="postsLink myPosts">
                                        {title} 
                                    </Link>
                                </h3>
                                <p className="description">{description}</p>
                                <p><b>Price:</b> {price}</p>
                                <p><b>Location:</b> {location}</p>
                                <div>
                                    <ul>
                                        <li className="postLi myPosts"
                                            onClick={() => {
                                                postID(_id)
                                                setSelectedPost(_id)
                                        }}> 
                                            <Link to={`/post/${_id}`} className="postsLink myPosts">
                                                Take Me To My Post
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                        )
                    } else {
                        return
                    }
                })}
                <div className="allPostsAside">
                    <MakePosts 
                        allPosts={allPosts}
                        setAllPosts={setAllPosts}
                        userToken={userToken}/>
                </div>
            </div>
        </div>
    )
        
}


export default Myposts; 