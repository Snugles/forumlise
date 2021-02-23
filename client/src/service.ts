const apiRequests = { 
  getTopic: (id:number) => {
    return fetch(`http://localhost:3001/posts/${id}`)
      .then((results) =>results.json())
      .catch((e:string)=>console.error(e));
  },
  createPost: (post:any, token:string) => {
    return fetch(`http://localhost:3001/posts`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(post)})
      .then((results)=>results.json())
      .catch((e:string)=>console.error(e));
  },
  getTopicTitles: () => {
    return fetch('http://localhost:3001/topics')
    .then((results) =>results.json())
    .catch((e:string)=>console.error(e));
  },
  createTopic: (topic:any, token:string) => {
    return fetch('http://localhost:3001/topics',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(topic)})
      .then((results)=>results.json())
      .catch((e:string)=>console.error(e));
  },
  login: (payload:any) => {
    return fetch('http://localhost:3001/accounts',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)})
      .then((results) =>results.json())
      .catch((e:string)=>console.error(e));
  },
  register: (payload:any) => {
    return fetch('http://localhost:3001/accounts/register',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)})
      .then((results:any) =>results.json())
      .catch((e:string)=>console.error(e));
  },
};

export default apiRequests;