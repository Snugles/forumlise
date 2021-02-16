import React from 'react';
import TopicPage from './containers/topicPage';
import Home from './containers/Home';
import Login from './containers/Login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/topic/:id" exact component={TopicPage}/>
        <Route path="/login" component={Login}/>
      </Router>
    </div>
  );
}

export default App;
