import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPost } from '../api';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(id).then(res => setPost(res.data)).catch(console.error);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="mt-4">{post.content}</p>
    </div>
  );
};

export default PostDetails;
