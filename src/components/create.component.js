import React, { Component } from "react";
import axios from "axios";
export default class Create extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: '',
          email: '',
          password: '',
          exp: '',
        };
      }
    
      handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      createPlayer = e => {
        e.preventDefault();
        const { username, email, password, exp } = this.state;
    
        console.log(this.state)
        const book = {
          username,
          email,
          password, 
          exp,
        };
    
        axios
          .post('http://localhost:5000/api/players', book, {
            header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json' },
        mode: "cors"})
          .then(() => console.log('Player Created'))
          .catch(err => {
            console.error(err);
          });
      };

    render() {
        return (
            <form onSubmit={this.createPlayer}>
                <h3>Add New Player</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter username" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Experience</label>
                    <input type="number" name="exp" className="form-control" placeholder="Enter experience" onChange={this.handleInputChange} />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}
