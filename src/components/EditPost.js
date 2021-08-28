import React, {useState, useEffect} from 'react';
import {editPost, BASE_URL} from '../api'


const EditPost = ({userToken, setMyEditedPost, myEditedPost, allPosts, setAllPosts, myPostsList, setMyPostsList, selectedPost, updateItem}) => {


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
    
    // useEffect(() => {
        
    //     }, [myEditedPost]);

    async function edit(e) {
        e.preventDefault();
            try {
                const results = await editPost(BASE_URL, selectedPost, userToken, title, description, price, location, deliver);
                if(results.success){
                    const updatedPost = results.data.post
                    setAllPosts([...allPosts])
                   // setMyPostsList([...myPostsList, updatedPost])
                    resetForm();
                }
            }catch(error) {
            console.error(error)
        }
    }
    
    return (
    <section id="postsBox">
        <h1>Edit Posts Here</h1>
            <form onSubmit={edit}>
                <div>
                    <label>Title</label>
                    <input type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" 
                        placeholder="Description" 
                        value={description}
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" 
                    placeholder="Price" 
                    value={price} 
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
                <button type="submit">Update Post!</button>
            </form>
    </section>
    )
}


export default EditPost;