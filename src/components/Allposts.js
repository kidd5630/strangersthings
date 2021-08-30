import React, { useState }from 'react';
import { Link} from 'react-router-dom';
import Aside from "./Aside";
import MakePosts from "./MakePosts";

const Allposts = ({userToken, myUsername, allPosts, setAllPosts, setSelectedPost, postID}) => {
  
  const [searchTerm, setSearchTerm] = useState('');
    
  function postMatches(post, text) {
    const {title, description, price, author: {username}, location}= post
    
    if(title.toLowerCase().includes(text.toLowerCase()) || description.toLowerCase().includes(text.toLowerCase()) || price.toLowerCase().includes(text.toLowerCase()) || username.toLowerCase().includes(text.toLowerCase()) || location.toLowerCase().includes(text.toLowerCase()) ) {
        return true;
    }
  }
    
  const filteredPosts = allPosts.filter(post => postMatches(post, searchTerm));

  const postsToDisplay = searchTerm.length ? filteredPosts : allPosts;
    
  if(userToken) {
    return (
      <>
      <div className="allPostsContainer">
        <div className="allPostsHeader">
          <h1> Search Posts</h1>
          <input className="searchBar" type="text" placeholder="Search" 
            onChange={(event) => { setSearchTerm(event.target.value)}}/>
        </div>
        {allPosts && postsToDisplay.map(post => {
          const {_id, title, description, price, author: {username}, location} = post
          
          return (
            <div className="allposts" key={_id}>
              <h3 className="postTitle" 
                onClick={() => {
                postID(_id)
                setSelectedPost(_id)}}>
                <Link to={`/post/${_id}`} className="postsLink">
                  {title}
                </Link>
              </h3>
              <p className="description">{description}</p>
              <p><b>Price:</b> {price}</p>
              <p><b>Seller:</b> {username}</p>
              <p><b>Location:</b> {location}</p>
              {username === myUsername
              ?
              <div>
                <ul>
                  <li className="postLi" 
                    onClick={() => {
                    postID(_id)
                    setSelectedPost(_id)}} > 
                    <Link to={`/post/${_id}`} className="postsLink">
                      Take Me To My Post
                    </Link> 
                  </li>
                </ul>
              </div>
              :
              <div>
                <ul>
                  <li className="postLi"
                    onClick={() => {
                    postID(_id)
                    setSelectedPost(_id)}}> 
                    <Link to={`/post/${_id}`} className="postsLink">
                      Message About Post
                    </Link> 
                  </li>
                </ul>
              </div>
              }
            </div>)
          })
        }
        <div className="allPostsAside">  
        <MakePosts 
          allPosts={allPosts} 
          setAllPosts={setAllPosts} 
          userToken={userToken} />
        </div>
      </div>
      </>)
  } else {
    return (
      <>
      <div className="allPostsContainer">
        <div className="allPostsAside">  
          <Aside />
        </div>
         {allPosts.map(post => {
           return (
            <div className="allposts" key={post._id}>
              <h3 className="postTitle">{post.title}</h3>
              <p className="description">{post.description}</p>
              <p><b>Price:</b> {post.price}</p>
              <p><b>Seller:</b> {post.author.username}</p>
              <p><b>Location:</b> {post.location}</p>
            </div>)
          })
        } 
      </div>
      </>)
  }
}


export default Allposts