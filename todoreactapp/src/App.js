import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = { todos : [] }

componentDidMount() {
  fetch('http://localhost:3000/todos')
  .then( (response) => { return response.json() } )
  .then( data => {
    this.setState( {
      todos: data
    })
  })

}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul> {
          this.state.todos.map( item => {
            return <li key={item.id}>{item.name}</li>
          })
        }

        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
