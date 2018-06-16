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
      .then((response) => { return response.json() })
      .then(({ message, status }) => {
        this.setState({ message, status });
        setTimeout(this.getNextImage, 2000);
    })
  }
  
  render() {
    return (
      <div className="Top">
        <div className="App-header">
          <img src={this.state.message} className="App-logo" />
        </div>
        <div className="Bottom">
          <p className="App-intro">{this.state.message}</p>
          <small>{this.state.status}</small>
        </div>
      </div>
    );
  }
}

export default App;
