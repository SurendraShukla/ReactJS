import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';

import GamePage from "./game/GamePage";
import HomePage from "./quiz-multiple-choice-question/components/HomePage";
import AssessmentPage from "./quiz-multiple-choice-question/components/AssessmentPage";
import TodoRedux from "./to-do-redux";


const HELP = () => <p>Help Page</p>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Surendra</h1>
        </header>

        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/to-do-redux" component={TodoRedux} />
          <Route path="/assessment" component={AssessmentPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/help" component={HELP} />
        </main>

      <footer>
          <hr />
          <Link to="/">Home</Link>&nbsp;
          <Link to="/to-do-redux">To-do Redux</Link>&nbsp;
          <Link to="/assessment">Assessment</Link>&nbsp;
          <Link to="/game">Game</Link>&nbsp;
          <Link to="/help">Help</Link>&nbsp;
      </footer>
      </div>
    );
  }
}

export default App;
