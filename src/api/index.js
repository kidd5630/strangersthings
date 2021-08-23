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
    
    try {
        const response = await fetch(`${url}/posts`, {
            method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userToken
        },
        body: JSON.stringify({
            post: {
                "title": title,
                "description": description,
                "price": price,
                "location": location,
                "deliver": deliver
            } 

        })
    })
    const data = await response.json();
    return data
    } catch (error) {
        console.error(error);
      } 
    }