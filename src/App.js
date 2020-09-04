import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../src/Navbar/Navbar';
import Form from './ContactForm/Form';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/form' component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;