import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counters: {
        journal_entries: 0
      },
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
      }],
      journal_entries: [

      ]
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
        <ul>
          {
            this.state.journal_entries.map(
              (objEntry, index) => <li key={ index }>{ objEntry.text }</li>)
          }
        </ul>
        <h2>New entry:</h2>
        <div>
          <textarea rows={ 5 } cols={ 40 } value={ this.state.pending_entry }
            onChange= { event => {
              this.setState({
                ...this.state,
                pending_entry: event.target.value
              })
            }}
          />
        </div>
        <button onClick={ () => {
          const strNewEntry = this.state.pending_entry;
          if (!strNewEntry) return;

          this.setState({
            ...this.state,
            counters: {
              ...this.state.counters,
              journal_entries: this.state.counters.journal_entries + 1
            },
            journal_entries: this.state.journal_entries.concat([{
              id: this.state.counters.journal_entries,
              text: strNewEntry
            }]),
            pending_entry: ""
          });
        }}>Add</button>
      </div>
    );
  }
}

export default App;
