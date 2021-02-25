import LoginDataTypes from '../../interfaces/LoginDataTypes';

export const login = (data:LoginDataTypes) => {
  return {
    type:'LOGIN',
    payload:data,
  }
}

export const logout = () => {
  return {
    type:'LOGOUT',
  }
}