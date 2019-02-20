import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar'
import Form from './components/Form/Form'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      subject:''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    e.preventDefault();
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit(){
    this.state.subject ? console.log("yeah this is your msg "+ this.state.subject) : console.log("fill the form correctly homie")
  }
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Form 
        changeHandler={this.handleChange}
        handleSubmit= {this.handleSubmit}

        />
      </React.Fragment>
    );
  }
}

export default App;
