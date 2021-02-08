const apiRequests = { 
  getTopic: () => {
    return fetch('http://localhost:3001/posts')
      .then((results) =>results.json())
      .catch((e:string)=>console.error(e));
  },
  createPost: (post:any) => {
    return fetch('http://localhost:3001/posts',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)})
      .then((results)=>results.json())
      .catch((e:string)=>console.error(e));
  },
  getTopicTitles: () => {
    return fetch('http://localhost:3001/topics')
    .then((results) =>results.json())
    .catch((e:string)=>console.error(e));
  },
  createTopic: (topic:any) => {
    console.log('called')
    return fetch('http://localhost:3001/topics',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(topic)})
      .then((results)=>results.json())
      .catch((e:string)=>console.error(e));
  }
};

export default apiRequests;