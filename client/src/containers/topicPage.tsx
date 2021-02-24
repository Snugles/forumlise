import React, {useEffect, useState} from 'react';
import Post from '../components/post';
import service from '../service';
import './styles/topicPage.css';
import {RootState} from '../redux/reducers';
import {useSelector, useDispatch} from 'react-redux';
import {newTopic} from '../redux/actions/topicActions';
import Navbar from '../components/navbar'

function TopicPage({match}:any) {
  const [replyMessage, setReplyMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loginData:any = useSelector((state:RootState) => state.login);
  const topicData:Array<any> = useSelector((state:RootState) => state.topic);
  const dispatch = useDispatch();
  useEffect(() => {
    service.getTopic(match.params.id)
      .then((res:Array<any>) => {
        dispatch(newTopic(res));
      })
      .catch((e:string) => console.error(e));
  },[dispatch, match.params.id]);

  const handleChange = (e:any) => {
    setReplyMessage(e.target.value);
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!replyMessage.length){
      return setErrorMessage('Reply cannot be empty');
    }
    service.createPost({content:replyMessage, TopicId:match.params.id, AccountId:loginData.id}, loginData.token)
      .then((res:any) => {
        if (res) {
          dispatch(newTopic([topicData[0],[...topicData[1],res]]));
          setReplyMessage('');
        } else {
          setErrorMessage('Could not submit reply, are you sure your logged in?');
        }
      })
      .catch((e:string) => console.error(e));
  }

  return (
    <div className='topicContainer'>
      <Navbar/>
      <div className='topicStarter'>
        {topicData.length?<div style={{
          display:'flex',
          flexDirection:'column'
          }}>
        <h1 className='topicPageHeaderUser'>User: {topicData[0].AccountName}</h1>
        <h1>{topicData[0].title}</h1>
        <p>{topicData[0].content}</p></div>:
        <p>loading</p>}
      </div>
      {topicData[1]&&topicData[1].length?
        topicData[1].map((postData:any) => <Post username={postData.AccountName} content={postData.content} timestamp={postData.createdAt} key={postData.id}/>):
        <p>No replies</p>}
        <p className='topicError'>{errorMessage}</p>
      <form onSubmit = {handleSubmit} className='topicPageForm'>
        <label>Reply:</label>
        <textarea rows={8} value={replyMessage} onChange={handleChange} className='topicPageInput'></textarea>
        <input type="submit" value="Send Reply"/>
      </form>
    </div>
  );
}

export default TopicPage;