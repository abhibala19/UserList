import React, { Component } from 'react'
import UserLists from './UserList'
class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userList:[],
             firstName:String ="",
             lastName :String ="",
             email:String="",
             dateOfBirth:Date ,
             userObj : {}


        }
    }
    // handleFirstName = ( event) => {
    //     this.setState( {
    //         firstName : event.target.value
    //     })
    // }

    // handleLastName = ( event) => {
    //     this.setState( {
    //         lastName : event.target.value
    //     })
    // }
    // handleEmail = ( event) => {
    //     this.setState( {
    //         email : event.target.value
    //     })
    // }
    // handleDateOfBirth = ( event) => {
    //     this.setState( {
    //         dateOfBirth : event.target.value
    //     })
    // }

    clickHandler = () => {
         this.state.userList.push(this.state.userObj)
         console.log(this.state.userList)

        


    }
    handleChange = (event ,name ) => {
        this.state.userObj[name] =event.target.value 
        console.log(this.state.userObj)

    }
    render() {
        console.log(this.state.userList)

        return (
            <form>
            <div>
                <label>FirstName</label>
                <input type="text" name="firstName"
                value={this.state.userObj.firstName?this.state.userObj.firstName:""}
                onChange={(event) => {this.handleChange (event, "firstName")}}></input>   
                <label>LastName</label>
                <input type="text" name="lastName" 
                value={this.state.userobj.lastName?this.state.userobj.lastName:""}
                onChange={(event) => {this.handleChange (event, "lastName")}}></input>   

                
            </div><br/>
            <div>

                <label>EmailId</label>
                <input type="text" name="Email"
                value={this.state.userObj.email?this.state.userObj.email:""}
                onChange={(event) => {this.handleChange (event, "Email")}}></input>   


                <label>DateOfBirth</label>
                <input type="text" name="DateOfBirth"
                value={this.state.userObj.dateOfBirth?this.state.userObj.dateOfBirth:""}
                onChange={(event) => {this.handleChange (event, "DateOfBirth")}}></input>   
                
            <br/>
            <br/>
            <br/>
            <button onClick= { this.clickHandler}>Save</button>


            </div>
        {/* {this.state.userList.length != 0 &&  <div><UserLists {...this.state}/> </div> } */}
            </form>


        )
    }
}

export default User
