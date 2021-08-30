import React, {useState} from 'react';
import {createPost, BASE_URL} from '../api'


const MakePosts = ({userToken, allPosts, setAllPosts}) => {

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
                    resetForm();
                }
            }catch(error) {
            console.error(error)
        }
    }
    
    return (
    <section className="makePostsAside">
        <h1 className="makePostTitle">Make Posts Here</h1>
            <form className="makePostForm"onSubmit={post}>
                <div className="makePostContent">
                    <label className="makePostLabel">Title</label>
                    <input className="makePostInput" 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        required
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}/>
                </div>
                <div className="makePostContent">
                    <label className="makePostLabel">Description</label>
                    <input className="makePostInput" 
                        type="text" 
                        placeholder="Description" 
                        value={description}
                        required
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}/>
                </div>
                <div className="makePostContent">
                    <label className="makePostLabel">Price</label>
                    <input className="makePostInput" 
                    type="text" 
                    placeholder="Price" 
                    value={price} 
                    required
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}/>
                </div>
                <div className="makePostContent">
                    <label className="makePostLabel">Location</label>
                    <input className="makePostInput" 
                    type="text" 
                    placeholder="Location" value={location}
                    onChange={(event) => { 
                        setLocation(event.target.value)
                    }}/>
                </div>
                <div className="makePostCheck">
                    <input className="checkbox"
                    type="checkbox" 
                    id="willDeliver" 
                    checked={deliver} 
                    onChange={() => {
                        document.querySelector('#willDeliver:checked') ? setDeliver(true): setDeliver(false)
                    }}/>
                    <label className="makePostLabel">Will Deliver</label>
                </div>
                <button className="makePostSubmit"
                type="submit">Make Post!</button>
            </form>
    </section>
    )
}


export default MakePosts;