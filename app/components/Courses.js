import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Courses extends React.Component{
  constructor(props){
    super(props);
    this.addCourse = this.addCourse.bind(this);
    this.state = {courses: []};
  }
  componentWillMount() {
    $.ajax({
      url: '/api/courses/',
      type: 'GET'
    }).done( courses => {
      this.setState({ courses });
    });
  }
  addCourse(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/courses',
      type: 'POST',
      data: {
        name : this.refs.name.value,
        instructor : this.refs.instructor.value,
        credits : this.refs.credits.value,
        description : this.refs.description.value
      }
    }).done( course => {
      this.refs.form.reset();
      this.setState({
        courses: [ {...course}, ...this.state.courses ]
      });
    });
  }

  render() {
    let courses = this.state.courses.map( (course) => {
      return(<Link to={`/courses/${course._id}`} key={course._id} className="collection-item">{course.name}</Link>)
    });

    return(
      <div className="container">
        <div className="row">
          <form className="center" ref="form" onSubmit={this.addCourse}>
            <input ref="name" placeholder="name of course" />
            <input ref="instructor" placeholder="name of instructor" />
            <input ref="credits" placeholder="number of credits" />
            <textarea ref="description" placeholder="course description"></textarea>
            <button className="btn" type="submit">Add Course</button>
          </form>
        </div>
        <div className="row">
          <ul>
            {courses}
          </ul>
        </div>
      </div>
    )
  }
}

export default Courses;
