import React from 'react';
import './styles/homePageTopic.css';
import homepageTopicProps from '../interfaces/homepageTopicProps';

const HomepageTopic : React.FC<homepageTopicProps> = ({content, title, timestamp}) => {
  const splitTimestamp:Array<string>=timestamp.split('-');
  return (
    <div className='homepageTopicContainer'>
      <p className='homepageTopicTimestamp'>{`${splitTimestamp[2].slice(3,8)} ${splitTimestamp[2].slice(0,2)}/${splitTimestamp[1]}/${splitTimestamp[0]}`}</p>
      <p className='homepageTopicTitle'>{title}</p>
      <p className='homepageTopicContent'>{content}</p>
    </div>
  );
}

export default HomepageTopic;