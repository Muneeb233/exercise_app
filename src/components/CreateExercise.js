import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import axios from 'axios';


export default class CreateExercise extends Component {

  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      description: '',
      duration: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }

      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);
    const createExercise = axios.post('http://localhost:3000/api/exercises/add/', exercise)
    if (createExercise) {
      console.log("exercise is Added !")
    }
    else {
      console.log("exercise not added !")
    }
    window.location = '/';
  }
  render() {
    return (
      <div>
        <h1>Create New Fitness Log</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username </label>
            <select ref={this.userInput} required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
              {
                this.state.users.map(function (user) {
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>
                })
              }

            </select>
          </div>

          <div className="form-group">
            <label>Description : </label>
            <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
          </div>

          <div className="form-group">
            <label>Duration(in minutes) : </label>
            <input type="text" required className="form-control" value={this.state.duration} onChange={this.onChangeDuration} />
          </div>


          <div className="form-group">
            <label>Date : </label>
            <div>
              <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Fitness Log" className="btn btn-primary my-3" />
          </div>
        </form>
      </div>
    )
  }
}
