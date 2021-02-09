import React, {useEffect, useState} from 'react';
import service from '../service';
import HomePageTopic from '../components/homePageTopic'
import './styles/Home.css';
import logo from './images/forumliseLogo.png';
import {Link} from 'react-router-dom';

function TopicPage() {
  const [topics, setTopics] = useState([{}]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    service.getTopicTitles()
      .then((res:Array<Object>) => setTopics((res)))
      .catch((e:string) => console.error(e));
  },[]);

  const handleChange = (e:any) => {
    if (e.target.name==='title'){
      setNewTitle(e.target.value);
    } else {
      setNewContent(e.target.value);
    }
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    service.createTopic({content:newContent, title:newTitle})
      .catch((e:string) => console.error(e));
  }

  return (
    <div className='homeContainer'>
      <div>
        <img src={logo} alt="Forumlise Logo"/>
      </div>
      {Object.keys(topics[0]).length?
        topics.map((topicData:any) => 
        <Link to={`/topic/${topicData.id}`} style={{textDecoration: 'none', color:'black'}} key={topicData.id}>
          <HomePageTopic content={topicData.content} title={topicData.title} timestamp={topicData.createdAt} key={topicData.id}/>
        </Link>):
        <p>No Topics</p>}
      <div className='homeFormContainer'>
        <h1>Create new topic</h1>
        <form onSubmit = {handleSubmit} className='homeForm'>
          <label>Title:</label>
          <textarea value={newTitle} onChange={handleChange} name='title' className='homeInput'></textarea>
          <label>Content:</label>
          <textarea rows={8} value={newContent} onChange={handleChange} className='homeInput'></textarea>
          <input type="submit" value="Create Topic"/>
        </form>
      </div>
    </div>
  );
}

export default TopicPage;