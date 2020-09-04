import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ul className="post_list">
    {posts.map(post => (
      <li className="post" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
