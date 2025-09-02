import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostUpdate = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/v1/${id}/`, {
                headers: {
                    'Authorization': `Token ${localStorage.getItem('authToken')}`
                }
            })
            .then((res) => {
                setPost(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!post) return <p>Post not found</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        axios.put(`http://127.0.0.1:8000/api/v1/${id}/`, post, {
            headers: token ? { Authorization: `Token ${token}` } : {}
        })
            .then((res) => {
                console.log(res);
            })
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={post.title} onChange={handleChange} />
                <label>Body</label>
                <input type="text" name="body" value={post.body} onChange={handleChange} />
                <button type="submit">Update</button>
            </form>
        </>
    );
}

export default PostUpdate;