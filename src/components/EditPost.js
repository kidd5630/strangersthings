import React, {useState, useEffect} from 'react';
import {editPost, BASE_URL} from '../api'


const EditPost = ({userToken, allPosts, setAllPosts, selectedPost, isActiveEdit, setActiveEdit, isActiveMessage, setActiveMessage, ToggleClass}) => {


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

    async function edit(e) {
        e.preventDefault();
            try {
                const results = await editPost(BASE_URL, selectedPost, userToken, title, description, price, location, deliver);
                console.log(results)
                if(results.success){
                    setAllPosts([...allPosts])
                    ToggleClass()
                    resetForm();
                }
            }catch(error) {
            console.error(error)
        }
    }
    
    return (
        <section className="editPostsAside">
            <h1 className="editPostTitle">Edit Posts Here</h1>
                <form className="edutPostForm" onSubmit={edit}>
                    <div className="editPostContent">
                        <label className="editPostLabel">Title</label>
                    </div>
                    <div className="editPostContent">
                        <input className="editPostInput" type="text" 
                            placeholder="Title" 
                            value={title} 
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}/>
                    </div>
                    <div className="editPostContent">
                        <label className="editPostLabel">Description</label>
                    </div>
                    <div className="editPostContent">
                        <input className="editPostInput" type="text" 
                            placeholder="Description" 
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}/>
                    </div>
                    <div className="editPostContent">
                        <label className="editPostLabel" >Price</label>
                    </div> 
                    <div className="editPostContent">
                        <input className="editPostInput" type="text" 
                        placeholder="Price" 
                        value={price} 
                        onChange={(event) => {
                            setPrice(event.target.value)
                        }}/>
                    </div>
                    <div className="editPostContent">
                        <label className="editPostLabel">Location</label>
                    </div>
                    <div className="editPostContent">
                        <input className="editPostInput" type="text" 
                        placeholder="Location" value={location}
                        onChange={(event) => { 
                            setLocation(event.target.value)
                        }}/>
                    </div>
                    <div className="editPostCheck">
                        <input className="checkbox" type="checkbox" 
                        id="willDeliver" 
                        checked={deliver} 
                        onChange={() => {
                            document.querySelector('#willDeliver:checked') ? setDeliver(true): setDeliver(false)
                        }}/>
                        <label className="editPostLabel">Will Deliver</label>
                    </div>
                    <button className="editPostSubmit" type="submit">Update Post!</button>
                </form>
        </section>
        )
    }


export default EditPost;