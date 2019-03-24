import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      affirmations: [

      ],
      affirmers: [{
        name: "Jane"
      }, {
        name: "Marsha"
      }, {
        name: "Tom"
      }, {
        name: "Ben"
      }]
    };
  }
  render() {
    return (
      <div>
        <h1>Welcome Joe!</h1>
        <h2>Your affirmations:</h2>
        <h2>Your affirmers with additional affirmations:</h2>
        <ul>
          { this.state.affirmers.map(
              (objAffirmer, index) => <li key={ index }>
                {objAffirmer.name}
              </li>)
          }
        </ul>
        <h2>Your journal:</h2>
        <h2>New entry:</h2>
        <div>
          <textarea rows={ 5 } cols={ 40 } />
        </div>
        <button>Add</button>
      </div>
    );
  }
}

export default App;
