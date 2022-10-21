import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';



const Exercise = (props) => {
 
  return <tr>
     
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date}</td>
    <td>
  
      <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a></td>
  </tr>
}

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/exercises/")
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteExercise(id) {
    axios.delete("http://localhost:3000/api/exercises/" + id)
      .then(response => {
        console.log(response.data)
      })

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return < Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
    })
  }
  render() {
    return (
      <div>
        <h2>Logged Exercises</h2>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>username</th>
              <th>description</th>
              <th>duration</th>
              <th>date</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}
