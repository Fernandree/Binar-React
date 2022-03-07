import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            experience: '',
            id: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    getPostById = async() => {
        const url = window.location.pathname;
        const split = url.split("/");
        const id = split[2];
        
        //get data from server
        const response = await axios.get(`http://localhost:5000/api/players/${id}`);
        //get response data
        const res = await response.data.message
        this.setState({
            username : res.username,
            password: res.password,
            email: res.email,
            experience : res.experience,
            id: res.id
        })
        console.log(this.state)
    };

    updatePlayer = async(e) => {

        const { username, email, password, experience, id } = this.state;
    
        console.log(this.state)
        const book = {
          username,
          email,
          password, 
          experience,
          id,
        };
    
        axios
          .put(`http://localhost:5000/api/players/${book.id}`, book, {
            header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json' },
        mode: "cors"})
          .then(() => console.log('Player Updated'))
          .catch(err => {
            console.error(err);
          });
    }

    componentDidMount(){
        this.getPostById();
    }
    render() {
        return (
            <form onSubmit={this.updatePlayer}>
                <h3>Edit Player</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} className="form-control" onChange={this.handleInputChange} placeher="Enter username" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" value={this.state.email} className="form-control" onChange={this.handleInputChange} placeher="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} className="form-control" onChange={this.handleInputChange} placeher="Enter password" />
                </div>
                <div className="form-group">
                    <label>Experience</label>
                    <input type="number" name="experience" value={this.state.experience} className="form-control" onChange={this.handleInputChange} placeher="Enter experience" />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}