import axios from "axios";
import React, { Component, } from "react";

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
    }
    
    getData(){
        axios.get('http://localhost:5000/api/players').then(res => {
            var data = res.data
            this.setState({data : data.message})
            console.log(data.message);
        })
    }
    componentDidMount(){
        this.getData()
    }

    
    render() {
        return (
            <table style={{border: "1px solid rgb(0, 0, 0)"}}>
            <thead>
              <tr style={{border: "1px solid rgb(0, 0, 0)"}}>
                <th style={{borderRight: "1px solid rgb(0, 0, 0)"}}>#</th>
                <th style={{border: "1px solid rgb(0, 0, 0)"}}>Username</th>
                <th style={{border: "1px solid rgb(0, 0, 0)"}}>Email</th>
                <th style={{border: "1px solid rgb(0, 0, 0)"}}>Exp</th>
                <th style={{border: "1px solid rgb(0, 0, 0)"}}>Level</th>
                <th style={{border: "1px solid rgb(0, 0, 0)"}}></th>
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
                        <td style={{border: "1px solid rgb(0, 0, 0)"}}><a href={`/edit/${d.id}`}>Edit</a></td>
                    </tr>
                ))
            } 
            </tbody>
          </table>
        )
    }
}