import React, { Component } from 'react';

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
    this.props.history.push('/' + id + '/' + title);
  }

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className='Courses'>
          {this.state.courses.map((course) => {
            return (
              <article
                onClick={() => this.courseClickHandler(course.id, course.title)}
                className='Course'
                key={course.id}
              >
                {course.title}
              </article>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Courses;
