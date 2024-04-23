import { useState } from 'react';

export default function PostForm({ onSubmit }) {
  const [post, setPost] = useState({
    author: '',
    date: '',
    comment: ''
  });

  function handleChange(e) {
    setPost({...post, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(post);
    setPost({ author: '', date: '', comment: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        value={post.author}
        onChange={handleChange}
        placeholder="Autor"
        required
      />
      <input
        type="date"
        name="date"
        value={post.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="comment"
        value={post.comment}
        onChange={handleChange}
        placeholder="comment"
        required
      />
      <button type="submit">Posten</button>
    </form>
  );
}


