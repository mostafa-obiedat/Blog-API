import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PostDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/${id}/`, {
            headers: {
                'Authorization': `Token ${localStorage.getItem('authToken')}`
            }
        })
            .then((res) => {
                setPost(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load post.');
                setLoading(false);
            })
    }, [id]);

    const handleDelete = () => {
        const token = localStorage.getItem('authToken');
        axios.delete(`http://127.0.0.1:8000/api/v1/${id}/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
            .then((res) => {
                navigate('/');
            })
            .catch(() => setError('Delete failed.'))
    }
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!post) return <p>Post not found</p>

  return (
    <div>
        <h1>Are you sure you want to delete {post.title}?</h1>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}       

export default PostDelete;