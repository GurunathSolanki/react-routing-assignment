import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' },
    ],
  };

  courseClickHandler(id, title) {
    console.log('[Courses] Course clicked :' + id + ':' + title);
    console.log(this.props);
    this.props.history.push('/courses/' + id + '?title=' + title);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Amazing Udemy Courses</h1>
          <section className='Courses'>
            {this.state.courses.map((course) => {
              return (
                <article
                  onClick={() =>
                    this.courseClickHandler(course.id, course.title)
                  }
                  className='Course'
                  key={course.id}>
                  {course.title}
                </article>
              );
            })}
          </section>
        </div>
        <div>
          <Route path='/courses/:id' component={Course} />
        </div>
      </div>
    );
  }
}

export default Courses;
