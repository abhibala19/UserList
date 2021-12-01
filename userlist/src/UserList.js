import React, { Component } from 'react'

class UserList extends Component {
    render() {
        const {rows} =this.props
        console.log(rows)
        return (
            
                <table>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>DateOfBirth</th>
                    </tr>
                </table>
        )
    }
}

export default UserList
