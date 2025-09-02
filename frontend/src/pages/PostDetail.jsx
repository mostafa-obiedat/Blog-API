import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/${id}/`)
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

  return (
    <>
    <div>
      <h1>Title: {post.title}</h1>
      <p>Body: {post.body}</p>
      <p>Author: {post.author}</p>
    </div>
   <div>
    <Link to={`/post-edit/${id}`}>Edit</Link>
    <Link to={`/post-delete/${id}`}>Delete</Link>
   </div>
   </>
  );
};

export default PostDetail;
