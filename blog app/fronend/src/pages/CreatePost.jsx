import { useState } from 'react';
import { createPost } from '../api';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await createPost(form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.title}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        rows="5"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.content}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
