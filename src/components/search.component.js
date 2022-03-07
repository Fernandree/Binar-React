import axios from "axios";
import React, { Component, } from "react";

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: [],
          display: false,
        }
    }
    
    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };
    
      searchPlayer = e => {
        e.preventDefault();
        const { username, email, lvl, exp } = this.state;
    
        //console.log(this.state)
        const book = {
          username,
          email,
          lvl,
          exp,
        };
    
        axios
          .get('http://localhost:5000/api/players?username='+book.username+'&email='+book.email+'&experience='+book.exp+'&lvl='+book.lvl, book, {
            header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json' },
        mode: "cors"})
          .then((res) => {
              console.log('Player Found')
              this.setState({
                data: res.data.message,
                display: true
              });

          }) 
          .catch(err => {
            console.error(err);
          });
      };
    
    render() {
        return (
            <div>
                <form onSubmit={this.searchPlayer}>
                    <h3>Search Player</h3>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" placeholder="Enter username" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Experience</label>
                        <input type="number" name="exp" className="form-control" placeholder="Enter experience" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Level</label>
                        <input type="number" name="lvl" className="form-control" placeholder="Enter level" onChange={this.handleInputChange}/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>

                <div className="result" style={{display: this.state.display ? 'block' : 'none' }}>
                    <table>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Exp</td>
                                <td>Level</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.data.map((d,index) => (
                                <tr style={{border: "1px solid rgb(0, 0, 0)"}}>
                                    <td style={{border: "1px solid rgb(0, 0, 0)"}} key={d.id}>{index+1}</td>
                                    <td style={{border: "1px solid rgb(0, 0, 0)"}}>{d.username}</td>
                                    <td style={{border: "1px solid rgb(0, 0, 0)"}}>{d.email}</td>
                                    <td style={{border: "1px solid rgb(0, 0, 0)"}}>{d.experience}</td>
                                    <td style={{border: "1px solid rgb(0, 0, 0)"}}>{d.lvl}</td>
                                </tr>
                            ))
                        } 
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}