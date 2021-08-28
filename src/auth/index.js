export function getCurrentUserToken() {
  const user = JSON.parse(localStorage.getItem('userToken'));
  return user;
}

export function removeCurrentUserToken() {
  localStorage.removeItem('userToken')
  
}


export function getCurrentUsername() {
  const storageUsername = JSON.parse(localStorage.getItem('myUsername'));
  return storageUsername;
}

export function removeCurrentUsername() {
  localStorage.removeItem('myUsername')
  
}

// export function postID(postID) {
//   localStorage.removeItem('postId');
//   setSelectedPost(postID);
//   console.log("postID function", selectedPost)
//   //localStorage.setItem('postId', JSON.stringify(selectedPost) )
// }