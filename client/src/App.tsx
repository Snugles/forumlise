import React from 'react';
import TopicPage from './containers/topicPage';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/topic/:id" component={TopicPage}/>
      </Router>
    </div>
  );
}

export default App;
