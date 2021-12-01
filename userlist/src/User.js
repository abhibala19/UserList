import React, { Component } from 'react'
import UserLists from './UserList'
class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: [],
            firstName: String = "",
            lastName: String = "",
            email: String = "",
            dateOfBirth: Date,
            userObj: {}


        }
    }

    clickHandler = async(event) => {
        console.log("inside onclick of save")
        event.preventDefault();
await        this.setState({
            userList: [
                ...this.state.userList,
                this.state.userObj
            ]

        })
        console.log(this.state.userList)

    }
    handleChange = (event, name) => {
        this.state.userObj[name] = event
        // console.log(this.state.userObj)

    }
    render() {
        // console.log(this.state.userList)

        return (
            <form >
                <div>
                    <label>FirstName</label>
                    <input type="text" name="firstName"
                        value={this.state.userObj.firstName ? "" : this.state.userObj.firstName}
                        onChange={(event) => { this.handleChange(event.target.value, "firstName") }}></input>
                    <label>LastName</label>
                    <input type="text" name="lastName"
                        value={this.state.userObj.lastName ? "" : this.state.userObj.lastName}
                        onChange={(event) => { this.handleChange(event.target.value, "lastName") }}></input>


                </div><br />
                <div>

                    <label>EmailId</label>
                    <input type="text" name="Email"
                        value={this.state.userObj.Email ? "" : this.state.userObj.Email}
                        onChange={(event) => { this.handleChange(event.target.value, "Email") }}></input>


                    <label>DateOfBirth</label>
                    <input type="text" name="DateOfBirth"
                        value={this.state.userObj.DateOfBirth ? "" : this.state.userObj.DateOfBirth}
                        onChange={(event) => { this.handleChange(event.target.value, "DateOfBirth") }}></input>

                    <br />
                    <br />
                    <br />
                    <button onClick={this.clickHandler}>Save</button>
                </div>
                {this.state.userList.length != 0 &&  <div><UserLists user={this.state.userList}/> </div> }
            </form>


        )
    }
}

export default User
