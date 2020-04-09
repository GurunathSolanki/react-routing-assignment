import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null,
    courseId: null,
  };
  componentDidMount() {
    console.log('[Course] mounted !!');
    console.log(this.props);

    this.setState({
      courseId: this.props.match.params.id,
      title: this.props.match.params.title,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.state.courseId}</p>
      </div>
    );
  }
}

export default Course;
