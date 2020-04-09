import React, { Component } from 'react';

class Course extends Component {
  state = {
    courseId: null,
  };
  componentDidMount() {
    console.log('[Course] mounted !!');
    console.log(this.props);

    this.setState({ courseId: this.props.match.params.id });
  }
  render() {
    return (
      <div>
        <h1>_COURSE_TITLE_</h1>
        <p>You selected the Course with ID: {this.state.courseId}</p>
      </div>
    );
  }
}

export default Course;
