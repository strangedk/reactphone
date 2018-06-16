import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = { dogs: [] }
  }
  
  delay = 3000;
  max = 10;
  
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
    
    this.setState({ dogs });
  }
  
  render() {
    const { dogs } = this.state;
    
    let list = dogs.map((dog) => {
      let name = dog.substring(dog.lastIndexOf("/", dog.lastIndexOf("/") - 1) + 1, dog.lastIndexOf("/"));
      
      return (
        <div key={dog} className="Dog">
          <div>{name}</div>
          <img src={dog} alt="" />
        </div>
      );
    });

    return (
      <div>
       {list}
      </div>
    );
  }
}

export default App;
