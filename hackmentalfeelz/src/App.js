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
        name: "Tom",
        affirmations: [
          "Hey bro, I really enjoy spending time with you. I love that you are a great listener and that you always support for all the decisions I have made over the years. You are my ride or die and I will always be there for you."
        ]
      }, {
        name: "Anonymous",
        affirmations: [
          "To whoever is reading, I have had a hard time fitting in and finding my group of friends during my freshman year. I am a shy person and making new friends was really challenging for me. I felt so isolated and did not feel like I belong there. I even thought about dropping out of college at one point because the feeling of loneliness was too much. Fast forward three years, I now can proudly say that I no longer feel isolated. I met some amazing people in the baking decal class and we became best friends! Just remember, everything will be okay in the end. If it’s not okay, it’s not the end."
        ]
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
                          : objAffirmer).filter(objAffirmer => objAffirmer.affirmations.length > 0)
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
