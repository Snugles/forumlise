import React from 'react';
import Post from '../components/post';
import './styles/topicPage.css';

function TopicPage() {
  return (
    <div>
      <div className='topicStarter'>
        <h1>Title</h1>
        <p>Starter content Starter content Starter content Starter content Starter content</p>
      </div>
      <Post/>
    </div>
  );
}

export default TopicPage;