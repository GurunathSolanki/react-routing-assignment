import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null,
    courseId: null,
  };
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    if (this.props.match.params.id != this.state.courseId) {
      this.loadData();
    }
  }

  loadData() {
    const query = new URLSearchParams(this.props.location.search);
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
