import React from 'react';
import $ from 'jquery';

class Course extends React.Component{
  constructor(props){
    super(props);
    this.state= { course: {} };
  }

  componentWillComponent() {
    $.ajax({
      url: `/api/courses/${this.props.params.id}`,
      type: 'GET'
    }).done( (course) => {
      this.setState({ course });
    });
  }

  render() {
    let { name, instructor, credits, description } = this.state.course;
    return(
      <div className="container">
        <h3>{name}</h3>
        <h3>{credits}</h3>
        <h3>{instructor}</h3>
        <h3>{description}</h3>
      </div>
    );
  }
}

export default Course;
