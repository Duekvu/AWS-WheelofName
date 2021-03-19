import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './components/wheel';
import Button from './components/button';
import './styles.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas','Pastas1','Pasta2s','Pa3stas','Pa4stas','Pa5stas','Pa6stas','P1astas','P7astas', 'Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas','Pastas1','Pasta2s','Pa3stas','Pa4stas','Pa5stas','Pa6stas','P1astas','P7astas'];
  }

  render() {
    return (
      <div className="App">
        <h1> Wheel</h1>
        <Wheel items={this.places} />
        <Button />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
