import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
      <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
    </div>
  );
};

export default PostCard;
