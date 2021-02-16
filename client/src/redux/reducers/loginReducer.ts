const LoginReducer = (state = false, action:any) => {
  switch(action.type) {
    case'LOGIN':
      return action.payload;
    case'LOGOUT':
      return false;
    default:
      return state;
  };
}

export default LoginReducer;