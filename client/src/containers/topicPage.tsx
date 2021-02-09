import React, {useEffect, useState} from 'react';
import Post from '../components/post';
import service from '../service';
import './styles/topicPage.css';
import {RootState} from '../redux/reducers';
import {useSelector, useDispatch} from 'react-redux';
import {newTopic} from '../redux/actions/topicActions';

function TopicPage({match}:any) {
  const [replyMessage, setReplyMessage] = useState('');

  const topicData = useSelector((state:RootState) => state.topic);
  const dispatch = useDispatch();
  useEffect(() => {
    service.getTopic(match.params.id)
      .then((res:Array<Object>) => dispatch(newTopic(res)))
      .catch((e:string) => console.error(e));
  },[dispatch]);

  const handleChange = (e:any) => {
    setReplyMessage(e.target.value);
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    service.createPost({content:replyMessage, TopicId:match.params.id})
      .then((dunno:any)=>console.log(dunno))
      .catch((e:string) => console.error(e));
  }

  return (
    <div>
      <div className='topicStarter'>
        <h1>Title</h1>
        <p>Starter content Starter content Starter content Starter content Starter content</p>
      </div>
      {topicData.length?
        topicData.map((postData:any) => <Post content={postData.content} timestamp={postData.createdAt} key={postData.id}/>):
        <p>No replies</p>}
      <form onSubmit = {handleSubmit} className='topicPageForm'>
        <label>Reply:</label>
        <textarea rows={8} value={replyMessage} onChange={handleChange} className='topicPageInput'></textarea>
        <input type="submit" value="Send Reply"/>
      </form>
    </div>
  );
}

export default TopicPage;