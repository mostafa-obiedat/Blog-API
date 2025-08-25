import { useState } from 'react'
import axios from 'axios'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const res = axios.get('http://127.0.0.1:8000/api/v1')
        .then(res => { setPosts(res.data) }
        )
        .catch(err => {
            console.log(err);
        })
    return (

        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h1>Title: {post.title}</h1>
                    <p>Body: {post.body}</p>
                    <p>Author: {post.author}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;