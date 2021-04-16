
import './App.css';
import React, { Component } from 'react';
import IntervalExample from './intervalexample';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
        fullName:"Salma Glaied",
        bio:"I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Java. I build websites that delight and inform. I do it well.I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand",
        profession:"Fullstack Js Developper",
        imageSrc:'./me2.jpg',
        imageAlt:'meeee',
        show:false,

    }
  }
  show=()=> {
    this.setState({ show:!this.state.show})
}


    render() {
return (
  <div>
    {this.state.show &&<h1>{this.state.fullName}</h1>}
    {this.state.show &&<h3>{this.state.profession}</h3>}
    {this.state.show &&<img src={this.state.imageSrc} alt={this.state.imageAlt} className='myimage'/>}
    {this.state.show &&<p>{this.state.bio}</p>}
    <button onClick={this.show}>show me</button>
    <IntervalExample></IntervalExample>
  </div>
)
    }
}

  


export default App;
