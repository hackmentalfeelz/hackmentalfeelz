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
        name: "Jane",
        affirmations: [
          "You are a strong and competent individual with so much joy to share with the world! Don’t stop believing in your goals and the person you wish to become!"
        ]
      }, {
        name: "Marsha",
        affirmations: [
          "Thank you for being a part of my life. I really appreciate you sharing your mental health journey with me. I am always here for you"
        ]
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
        <ul>
          {
            this.state.affirmations.map(objAffirmation =>
              <li>
                <div>
                  <div>
                    { objAffirmation.text }
                  </div>
                  <div>
                    -- { objAffirmation.from }
                  </div>
                </div>
              </li>)
          }
        </ul>
        <h2>Your affirmers with additional affirmations:</h2>
        (click on name to see their affirmation appear in the list above)
        <ul>
          { this.state.affirmers.map(
              (objAffirmer, index) => <li key={ index }>
                <button onClick={() => {
                  const strAffirmation = objAffirmer.affirmations &&
                                         objAffirmer.affirmations[0];
                  if (!strAffirmation) {
                    return;
                  }

                  this.setState({
                    ...this.state,
                    affirmations: this.state.affirmations.concat([{
                      from: objAffirmer.name,
                      text: strAffirmation
                    }]),
                    affirmers: this.state.affirmers.map(
                      (objAffirmer, i) =>
                        i === index
                          ? {
                              ...objAffirmer,
                              affirmations: objAffirmer.affirmations.filter(
                                (element, index) => index > 0)
                            }
                          : objAffirmer)
                  });
                  return false;
                }}>
                  {objAffirmer.name}
                </button>
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
