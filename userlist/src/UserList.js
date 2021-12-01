import React, { Component } from 'react'
import User from './User'
class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: this.props.arr
        }
    }

    render() {
        console.log(this.state.userList)
        return (

            <table>
                <tr>
                    <th>FirstName  </th>
                    <th>  LastName  </th>
                    <th> Email  </th>
                    <th >DateOfBirth  </th>
                </tr>
                {this.state.userList.map(( user =>
                    <tr key={user.firstName}>{user.firstName}{ }{user.lastName}{  }{user.Email}{user.DateOfBirth}</tr>
                    ))}
            </table>
        )
    }
}

export default UserList
