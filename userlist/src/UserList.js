import React, { Component } from 'react'
import ReactTable from 'react-table'
import Table from "@material-ui/core/Table";
import User from './User'
class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userList: this.props.arr
        }
    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date Of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.userList.map((user =>
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.Email}</td>
                            <td>{user.DateOfBirth}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        );
    }
}

export default UserList
