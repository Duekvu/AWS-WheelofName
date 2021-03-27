import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './components/wheel';
import Button from './components/button';
import axios from 'axios';
import './styles.css';

export class App extends React.Component {
  // constructor() {
  //   super();
  //   this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas','Pastas1','Pasta2s','Pa3stas','Pa4stas','Pa5stas','Pa6stas','P1astas','P7astas', 'Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas','Pastas1','Pasta2s','Pa3stas','Pa4stas','Pa5stas','Pa6stas','P1astas','P7astas'];
  // }
  state = { users: [] };
  componentDidMount() {
    // const self = this;
    axios
    .get('http://0.0.0.0:8080/')
    .then((response) => {
       console.log(response);
       const user = response.data;
       this.setState({user});
       console.log(this.state.users);
       console.log(this.places);
     })
    .catch((error)=>{
       console.log(error);
    });

  }

  render() {
    return (
      <div className="App">
        <Button />
        <Wheel items={this.state.users} />
        
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
