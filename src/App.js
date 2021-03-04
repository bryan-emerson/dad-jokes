import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dadJokes: ""
    }
  }

  componentDidMount(){
    const url = "https://icanhazdadjoke.com/"

    fetch(url, {
      headers: {"Accept": "application/json"}
    })
      .then(response=>response.json())
      .then(data=>{
        console.log(data.joke)
        this.setState({dadJokes: data.joke})
      })
  }

  freshJoke = () => {
    const url = "https://icanhazdadjoke.com/"

    fetch(url, {
      headers: {"Accept": "application/json"}
    })
      .then(response=>response.json())
      .then(data=>{
        console.log(this)
        this.setState({dadJokes: data.joke})
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.dadJokes}</h1>
        <button onClick={this.freshJoke}>Fresh Dad Joke Button</button>
      </div>
    );
  }
}

export default App;
