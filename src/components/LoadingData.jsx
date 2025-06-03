import React from 'react';

const LoadMoreButton = ({ onClick }) => (
  <button onClick={onClick} style={{ padding: '10px 20px', margin: '20px auto', display: 'block' }}>
    Load More
  </button>
);

export default LoadMoreButton;
