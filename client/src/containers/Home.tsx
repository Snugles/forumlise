import React, {useEffect, useState} from 'react';
import service from '../service';
import HomePageTopic from '../components/homePageTopic'
import Navbar from '../components/navbar'
import './styles/Home.css';
import logo from './images/forumliseLogo.png';
import {RootState} from '../redux/reducers';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginDataTypes from '../interfaces/LoginDataTypes';
import singleTopicData from '../interfaces/singleTopicData';

function TopicPage() {
  const [topics, setTopics]:[Array<singleTopicData>, Function] = useState([{
    AccountName:'',
    content:'',
    title:'',
    createdAt:'',
    id:0
  }]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loginData:LoginDataTypes = useSelector((state:RootState) => state.login);

  useEffect(() => {
    service.getTopicTitles()
      .then((res:Array<LoginDataTypes>) => setTopics((res)))
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
    if (!newTitle.length||!newContent.length){
      return setErrorMessage(`Neither 'Title' nor 'Content' can be empty`);
    }
    service.createTopic({content:newContent, title:newTitle, AccountId: loginData.id,}, loginData.token)
      .then((res:singleTopicData) => {
        if (res){
          setTopics([...topics, res]);
        } else {
          setErrorMessage('Could not submit topic, are you sure your logged in?');
        }
      })
      .catch((e:string) => console.error(e));
  }

  return (
    <div className='homeContainer'>
      <Navbar/>
      <img src={logo} alt="Forumlise Logo" className="homeBanner"/>
      {topics&&topics[0]&&topics[0].AccountName.length&&Object.keys(topics[0]).length?
        topics.map((topicData:singleTopicData) => 
        <Link to={`/topic/${topicData.id}`} style={{textDecoration: 'none', color:'black'}} key={topicData.id}>
          <HomePageTopic username={topicData.AccountName} content={topicData.content} title={topicData.title} timestamp={topicData.createdAt} key={topicData.id}/>
        </Link>):
        <p>No Topics</p>}
      <div className='homeFormContainer'>
        <h1>Create new topic</h1>
        <p className='homeError'>{errorMessage}</p>
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