import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import LoadMoreButton from './LoadingData';
import { fetchPosts } from '../api/postApi';
import { fetchUsers } from '../api/userApi';
import { fetchComments } from '../api/commentApi';

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [start, setStart] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 6;

  useEffect(() => {
    const loadStaticData = async () => {
      const [userData, commentData] = await Promise.all([
        fetchUsers(),
        fetchComments(),
      ]);
      setUsers(userData);
      setComments(commentData);
    };

    loadStaticData();
  }, []);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = async () => {
    const newPosts = await fetchPosts(start, limit);
    if (newPosts.length === 0) {
      setHasMore(false);
      return;
    }

    const enriched = newPosts.map(post => ({
      ...post,
      user: users.find(u => u.id === post.userId),
      comments: comments.filter(c => c.postId === post.id),
    }));

    setPosts(prev => [...prev, ...enriched]);
    setStart(prev => prev + limit);
  };

  console.log(posts)

  return (
    <div style={{ maxWidth: 800, margin: 'auto' }}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      {hasMore && <LoadMoreButton onClick={loadMore} />}
    </div>
  );
};

export default PostFeed;
