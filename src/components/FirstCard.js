import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';




class FirstCard extends Component {
  state = {
    image: [],
    post: [],
  };



  render() {
    const { link, image, post } = this.state;

    return (
      <Card  className=" card-container">
        <Card.Img variant='top'  src={require("../assets/img.jpg").default} style={{ height: '150px', color: "green"}} />

        <Card.Body>
          <Card.Title>First Name</Card.Title>
          <Card.Text>
           <p>Last name</p>
          <p>Office location</p>
          </Card.Text>
          {/* <Button variant="primary" handleSubmit={this.handleSubmit}>Rotate  */}
          {/* <NavLink to="/SecondCard">
            SecondCard
          </NavLink> */}
          {/* </Button> */}
          <Link to="/SecondCard">SecondCard</Link>
          
        </Card.Body>
      </Card>   
    );
  }
}

export default FirstCard;