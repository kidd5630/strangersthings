import React, {useState} from 'react';
import {createPost, BASE_URL} from '../api'


const MakePosts = ({userToken, allPosts, setAllPosts, myPostsList, setMyPostsList}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [deliver, setDeliver] = useState(false);
    
    function resetForm(){
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setDeliver(false)
    }
    
    async function post(e) {
        e.preventDefault();
            try {
                const results = await createPost(BASE_URL, userToken, title, description, price, location, deliver);

                if(results.success){
                    const result = results.data.post
                    setAllPosts([...allPosts, result])
                    setMyPostsList([...myPostsList, result])
                    resetForm();
                }
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
                    <input type="text" 
                        placeholder="Title" 
                        value={title} 
                        required
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" 
                        placeholder="Description" 
                        value={description}
                        required
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" 
                    placeholder="Price" 
                    value={price} 
                    required
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}/>
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" 
                    placeholder="Location" value={location}
                    onChange={(event) => { 
                        setLocation(event.target.value)
                    }}/>
                </div>
                <div>
                    <input type="checkbox" 
                    id="willDeliver" 
                    checked={deliver} 
                    onChange={() => {
                        document.querySelector('#willDeliver:checked') ? setDeliver(true): setDeliver(false)
                    }}/>
                    <label>Will Deliver</label>
                </div>
                <button type="submit">Make Post!</button>
            </form>
    </section>
    )
}


export default MakePosts;