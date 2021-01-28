const apiRequests = { 
  getTopic: () => {
    return fetch('http://localhost:3001/posts')
      .then((results) =>results.json())
      .catch((e:string)=>console.error(e));
  },
  createPost: (post:any) => {
    console.log(post)
    return fetch('http://localhost:3001/posts',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)})
      .then((results)=>results.json())
      .catch((e:string)=>console.error(e));
  }
};

export default apiRequests;