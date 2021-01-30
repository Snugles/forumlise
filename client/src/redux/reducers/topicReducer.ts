const TopicReducer = (state = {}, action:any) => {
  switch(action.type) {
    case'NEW':
      return action.payload;
    default:
      return state;
  };
}

export default TopicReducer;