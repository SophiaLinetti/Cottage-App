import PostForm from '../components/PostForm';
import testimonials from '../data';
import { useState } from 'react';

export default function CottageTalk() {

  const [posts, setPosts] = useState(testimonials.cottageTalk);

  function handleNewPost(newPost) {
    const newId = posts.length + 1;
    const postWithId = { ...newPost, id: newId };
    setPosts([postWithId, ...posts]); 
  }

  return (
    <>
      <h1>Cottage Talk</h1>
      <PostForm onSubmit={handleNewPost} />
      {posts.map(post => (
        <article key={post.id}>
          <header>
            <h4>{post.author}</h4>
            <time>{post.date}</time>
          </header>
          <p>{post.comment}</p>
        </article>
      ))}
    </>
  );
}
