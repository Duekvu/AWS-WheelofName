import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './components/wheel';
import Button from './components/button';
import axios from 'axios';
import './styles.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button />
        <Wheel items />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
