import React, { Component } from 'react'
import UserLists from './UserList'
import "./AppStyle.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: [],
            userObj: {}


        }
    }

    clickHandler = (event) => {
        this.state.userList.push(this.state.userObj);
        this.setState({
            userObj: {}
        })

    }
    // clickHandler = (event) => {
    //   let tempArr=[]
    //   tempArr.push(this.state.userObj)
    //     this.setState ({
    //         userList :this.state.userList.push(tempArr[0]),
    //         userObj :{}
            
            
    //     })
    // }
    

    handleChange = (event, name) => {
        this.state.userObj[name] = event
    }

    render() {
        return (
            <div >
                <div>
                    <label>FirstName  </label>
                    <input type="text" name="firstName"
                        id="inputField"
                        value={this.state.userObj.firstName}
                        onChange={(event) => { this.handleChange(event.target.value, "firstName") }}></input>
                    <label>LastName  </label>
                    <input type="text" name="lastName"
                        id="inputField"
                        value={this.state.userObj.lastName}
                        onChange={(event) => { this.handleChange(event.target.value, "lastName") }}></input>
                </div><br />
                <div>

                    <label>EmailId</label>
                    <input type="email" name="Email"
                        id="inputField"
                        value={this.state.userObj.Email}
                        onChange={(event) => { this.handleChange(event.target.value, "Email") }}></input>
                    <label>DateOfBirth  </label>
                    <input type="date"
                    id="inputField"
                    value={this.state.userObj.DateOfBirth}
                     onChange={(event)=> { this.handleChange (event.target.value ,"DateOfBirth")}}></input>
                    <br />
                    <br />
                    <button onClick={this.clickHandler}>Save</button>
                </div>
                <br />
                <br />
                <br />
                {this.state.userList.length != 0 && <div><UserLists arr={this.state.userList} /> </div>}
            </div>


        )
    }
}

export default User
