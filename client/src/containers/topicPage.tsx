import React, {useEffect} from 'react';
import Post from '../components/post';
import service from '../service';
import './styles/topicPage.css';
import {RootState} from '../redux/reducers';
import {useSelector, useDispatch} from 'react-redux';
import {newTopic} from '../redux/actions/topicActions';

function TopicPage() {
  const topicData = useSelector((state:RootState) =>state.topic);
  const dispatch = useDispatch();
  useEffect(() => {
    service.getTopic().then((res:Array<Object>)=>{
      console.log(res);
      dispatch(newTopic(res));
    });
    // service.createPost({content:'post content is here'}).then((res:Array<Object>)=>console.log(res));
  },[]);
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