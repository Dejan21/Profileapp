
import React from 'react'
import { Component } from 'react';
import {Button, Card, Col, Form, Row} from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import {Link} from 'react-router-dom'


class EditMyProfileCard extends Component {
 state = {
  firstName: "",
  lastName: "",
  officeLocation:""
 }
 handleSubmit = (e) => {
     e.preventDefault();
     console.log("form submitted")
 };

 changefirstName = (e) => {
     this.setState({
         firstName: e.target.value
        
     });
 };

 changelastName =(e) => {
     this.setState({
         lastName: e.target.value
     });
 };


 changeofficeLocaion = (e) => {
     this.setState({
         officeLocation: e.target.value
     })
 }
render () {
    const{firstName, lastName, officeLocation} = this.state;
    return (
        <Card className={"flex-center"}>
            <Link to="/my-profile"> <i className="bi bi-arrow-clockwise spinner-button"/> </Link>
            <Card.Img variant="top" src={require(`../assets/img.jpg`).default} 
                     />
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" required placeholder="Enter your first name" value={firstName} onChange={this.changefirstName} />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Control type="text" required placeholder="Enter your last name" value={lastName} onChange={this.changelastName} />
                    </Form.Group>
                    <br/>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}> <i className="bi bi-pin-map"/> </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" required placeholder="Enter your office" value={officeLocation} onChange={this.changeofficeLocaion} />
                        </Col>
                    </Form.Group>
                    <br/>
                </Form>
                <div>
                    <Button variant={"danger"} className={"m-2"}>Cancel</Button>
                    <Button variant="success">Save</Button>
                </div>
            </Card.Body>
        </Card>


    )
 }
}

export default EditMyProfileCard;