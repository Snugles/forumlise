import {combineReducers} from 'redux';
import Topic from './topicReducer';

export const JoinedReducers = combineReducers({
  topic: Topic,
});

export type RootState = ReturnType<typeof JoinedReducers>
