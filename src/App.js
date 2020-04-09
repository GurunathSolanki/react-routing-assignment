import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <header>
            <nav>
              <ul>
                <li>
                  <a href='/users'>Users</a>
                </li>
                <li>
                  <a href='/courses'>Courses</a>
                </li>
              </ul>
            </nav>
          </header>
          <Route path='/users' component={Users} />
          <Route path='/courses' component={Courses} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
