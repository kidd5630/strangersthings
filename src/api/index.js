export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/';

export async function fetchAllPosts(BASE_URL) {
 try {
     const response = await fetch(`${BASE_URL}/posts`);
     const data = await response.json();
     return data
 } catch (error) { 
     console.log(error) 
 }
}


