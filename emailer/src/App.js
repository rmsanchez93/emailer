import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar'
import Form from './components/Form/Form'
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
