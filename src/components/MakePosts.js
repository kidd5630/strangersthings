import React from 'react';

const MakePosts = () => {
    return (
    <section id="postsBox">
        <h1>Make Posts Here</h1>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" placeholder="Title" />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" placeholder="Description" />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" placeholder="Price" />
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Will Deliver</label>
                </div>
                <button type="submit">LOGIN</button>
            </form>
    </section>
    )
}


export default MakePosts;