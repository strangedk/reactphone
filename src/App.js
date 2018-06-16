import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = { dogs: [] }
  }
  
  delay = 1000;
  max = 15;
  
  componentDidMount() {
    this.getNextImage();
  }
  
  getNextImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => { return response.json() })
      .then(({ message, status }) => {
        this.addDog(message);
        setTimeout(this.getNextImage, this.delay);
    })
  }
  
  addDog = (dog) => {
    const { dogs } = this.state;
    
    if (dogs.length > this.max)
      dogs.length--;
    dogs.unshift(dog);
    
    this.setState({ dogs: dogs.reverse() });
  }
  
  render() {
    const { dogs } = this.state;
    
    // let list = dogs.map(dog => <img className="Dog" key={dog} src={dog} />);
    let list = dogs.map(dog => <div>{dog.substring(dog.lastIndexOf("/", dog.lastIndexOf("/")-1), dog.lastIndexOf("/"))}</div>);

    return (
      <div>
       {list}
      </div>
    );
  }
}

export default App;
