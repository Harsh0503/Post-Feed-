import React from 'react';

const PostCard = ({ post }) => (

  <div className="post-card" style={{ border: '1px solid #ccc', padding: 16, marginBottom: 16 }}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <p><strong>User:</strong> {post.user?.name} ({post.user?.email})</p>
    <h4>Comments:</h4>
    <ul>
      {post.comments?.map(comment => (
        <li key={comment.id}>
          <strong>{comment.name}</strong>: {comment.body}
        </li>
      ))}
    </ul>
  </div>
);

export default PostCard;
