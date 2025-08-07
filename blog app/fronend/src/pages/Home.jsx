import { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(res => setPosts(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <Link to="/create" className="text-blue-500 underline">Create New Post</Link>
      <div className="mt-6 space-y-4">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
