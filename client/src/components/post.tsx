import React from 'react';
import './styles/post.css';
import PostProps from '../interfaces/PostProps';

const Post : React.FC<PostProps> = ({content, timestamp}) => {
  const splitTimestamp:Array<string>=timestamp.split('-');
  return (
    <div className='postContainer'>
      <p className='postTimestamp'>{`${splitTimestamp[2].slice(3,8)} ${splitTimestamp[2].slice(0,2)}/${splitTimestamp[1]}/${splitTimestamp[0]}`}</p>
      <p className='postContent'>{content}</p>
    </div>
  );
}

export default Post;