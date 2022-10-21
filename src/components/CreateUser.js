import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
    }
  }

  
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    }
    console.log(user);

      const response=axios.post('http://localhost:3000/api/users/add/', user)
    if(response){
      console.log("User is Added !")
    }
    else{
      console.log("User not added !")
    }

    this.setState({
      username: ''
    })

  }
  render() {
    return (
      <div>
        <h1>Create new user</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username </label>
            <input ref={this.userInput} required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
            </input>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary my-3" />
          </div>
        </form>
      </div>
    )
  }
}
