import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
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
                  <NavLink to='/home'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/users'>Users</NavLink>
                </li>
                <li>
                  <NavLink to='/courses'>Courses</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path='/users' exact component={Users} />
            <Route path='/courses' component={Courses} />
            <Route path='/home' exact pathname='/' />
            {/* <Route path='/:id' component={Course} /> */}
            <Route path='/' render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
