import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = { dogs: [] }
  }
  
  max = 15;
  
  componentDidMount() {
    this.getNextImage();
  }
  
  getNextImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => { return response.json() })
      .then(({ message, status }) => {
        this.addDog(message);
        setTimeout(this.getNextImage, 2000);
    })
  }
  
  addDog = (dog) => {
    const { dogs } = this.state;
    
    if (dogs.length > 5)
      dogs.shift();
    dogs.push(dog);
    
    this.setState({ dogs });
  }
  
  render() {
    const { dogs } = this.state;
    
    // let list = dogs.map(dog => <img className="Dog" key={dog} src={dog} />);
    let list = dogs.map(dog => <div>{dog.substring(dog.indexOf(".ceo"))}</div>);

    return (
      <div>
       {list}
      </div>
    );
  }
}

export default App;
