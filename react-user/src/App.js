import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Users from './Users';
import UserForm from './UserForm';
  

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Users:[
        {
        name:"Hajia Amish",

        email:"hajiaamish533@gmail.com",
        gen:11,
        },
       {
        name: "Rashid Abubakar" ,
        email:"rashidabubakar530@gmail.com",
        gen:13,
        },
        { 
        name:"Kofi Appiah",
        email:"kofiappiah537@gmail.com",
        gen:15,

        },
      ]
    }
  }
  addNewUser=(user)=>{
    user.id = Math.random().toString()
      this.setState({
        users: [...this.state.users, user]
      })
  }
  DeleteUser=(id)=>{
      let undeletedUsers =this.state.users.filter(user=>user.id !== id)
      this.setState({
        users: undeletedUsers
      })
  }
  editUser=(id, updatedUser)=>{
    this.setState({
        users: this.state.users.map((user)=> user.id=== id ? updatedUser : user)
    })
}
  render() {
    return (
      <>
       
        <Container fluid style={{marginTop:"2rem"}} className="All">
        <h1>Users Form</h1>
          <Row>
            <Col md="4 myl">
              <UserForm  addUser= {this.addNewUser} />
            </Col>
            <Col>
              <Users userData={this.state.users}  DeleteUser={this.DeleteUser} editUser={this.editUser}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}




export default App;
