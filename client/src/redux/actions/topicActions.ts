export const newTopic = (data:Array<Object>) => {
  return {
    type:'NEW',
    payload:data,
  }
}