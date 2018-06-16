import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { message: "" }
  }
  
  componentDidMount() {
    this.getNextImage();
  }
  
  getNextImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(({ message }) => {
      this.setState({ message });
      
      setTimeout(this.getNextImage, 2000);
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.message} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to livecoding</h1>
        </header>
        <p className="App-intro">
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
