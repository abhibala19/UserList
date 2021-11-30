import React, { Component } from 'react'

class UserList extends Component {
    render() {
        return (
            
                <table>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>DateOfBirth</th>
                    </tr>
                    <tr>
                        <td>{this.props.userObj.firstName}</td>
                        <td>{this.props.userObj.lastName}</td>
                        <td>{this.props.userObj.Email}</td>
                        <td>{this.props.userObj.DateOfBirth}</td>
                    </tr>
                </table>
        )
    }
}

export default UserList
