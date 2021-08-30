export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/';

export async function fetchResgisterUser(url, username, password) {
    try {
        const response = await fetch(`${url}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    "username": username,
                    "password": password
                } 
            })
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function fetchLoginUser(url, username, password) {
    try {
        const response = await fetch(`${url}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
               "username": username,
               "password": password
           } 
        })
    })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
      }   
}

export async function createPost( url, userToken, title, description, price, location, deliver) {
    const postObj = {
        "title": title,
        "description": description,
        "price": price,
        "willDeliver": deliver
    } 
    if(location) {
        postObj["location"] = location;
    }
    try {
        const response = await fetch(`${url}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body: JSON.stringify({
                post: postObj
            })
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    } 
}

export async function deletePost(url, postId, userToken) {
    try {
        const response = await fetch(`${url}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            }
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    } 
}

export async function fetchAllPosts(){
    try{
        const response = await fetch(`${BASE_URL}/posts`)
        const results = await response.json()
        const posts = await results.data.posts
        return posts
    } catch (error) {
        console.error(error);
    }
}

export async function fetchMyData(url, userToken) { 
    try {
        const response = await fetch(`${url}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            }
        })
        const results = await response.json()
        return results
    } catch (error) {
        console.error(error)
    }
}

export async function sendMessage(url, postId, userToken, message) {
    try {
        const response = await fetch(`${url}/posts/${postId}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body:  JSON.stringify({
                message: {
                  "content": message
                }
            })
        })
        const results = await response.json();
        return results;
    } catch(error) {
        console.error(error)
    }
}

export async function editPost( url, postId, userToken, title, description, price, location, deliver) {
    const postObj = { } 
    if(title) {
        postObj["title"] = title;
    }
    if(description) {
        postObj["description"] = description;
    }
    if(price) {
        postObj["price"] = price;
    }
    if(location) {
        postObj["location"] = location;
    }
    if(deliver) {
        postObj["willDeliver"] = deliver;
    }
    try {
        const response = await fetch(`${url}/posts/${postId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body: JSON.stringify({
                post: postObj
            })
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    } 
}