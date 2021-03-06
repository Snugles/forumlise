import React from 'react';
import './styles/post.css';
import PostProps from '../interfaces/PostProps';

const Post : React.FC<PostProps> = ({content, timestamp, username}) => {
  const splitTimestamp:Array<string>=timestamp.split('-');
  return (
    <div className='postContainer'>
      <div className='postHeader'>
        <p>User: {username}</p>
        <p>{`${splitTimestamp[2].slice(3,8)} ${splitTimestamp[2].slice(0,2)}/${splitTimestamp[1]}/${splitTimestamp[0]}`}</p>
      </div>
      <p className='postContent'>{content}</p>
    </div>
  );
}

export default Post;