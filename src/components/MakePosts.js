import React, {useState} from 'react';
import {createPost, BASE_URL} from '../api'


const MakePosts = ({userToken}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('[On request]');
    const [deliver, setDeliver] = useState(false);
    
    async function post(e) {
        e.preventDefault();
            try {
            const results = await createPost(BASE_URL, userToken, title, description, price, location, deliver);
        }catch(error) {
            console.error(error)
        }
    }
       
    

    return (
    <section id="postsBox">
        <h1>Make Posts Here</h1>
            <form onSubmit={post}>
                <div>
                    <label>Title</label>
                    <input type="text" placeholder="Title" onChange={(event) => {setTitle(event.target.value)}} required/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" placeholder="Description" onChange={(event) => {setDescription(event.target.value)}} required/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" placeholder="Price" onChange={(event) => {setPrice(event.target.value)}} required/>
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" placeholder="Location" onChange={(event) => {setLocation(event.target.value)}} />
                </div>
                <div>
                    <input type="checkbox" id="willDeliver" onChange={() => {
                        document.querySelector('#willDeliver:checked')? setDeliver(true): setDeliver(false)}}/>
                    <label>Will Deliver</label>
                </div>
                <button type="submit">Make Post!</button>
            </form>
    </section>
    )
}


export default MakePosts;