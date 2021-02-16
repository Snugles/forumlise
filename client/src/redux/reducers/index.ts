import {combineReducers} from 'redux';
import Topic from './topicReducer';
import Login from './loginReducer';

export const JoinedReducers = combineReducers({
  topic: Topic,
  login: Login,
});

export type RootState = ReturnType<typeof JoinedReducers>
