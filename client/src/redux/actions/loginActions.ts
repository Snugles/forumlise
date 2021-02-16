export const login = (data:Array<Object>) => {
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