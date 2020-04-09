import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null,
    courseId: null,
  };
  componentDidMount() {
    console.log('[Course] mounted !!');
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    // console.log(query.get('title'));

    this.setState({
      courseId: this.props.match.params.id,
      title: query.get('title'),
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
