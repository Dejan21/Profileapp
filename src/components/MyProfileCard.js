import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";


function MyProfileCard(props) {
    return (
        <Card className="flex-center">
            <Link to="/edit-my-profile"> <i className="bi bi-arrow-clockwise spinner-button"/> </Link>
            <Card.Img variant='top' src={require("../assets/img.jpg").default} 
                      />
            <Card.Body>
                <Card.Text>First Name</Card.Text>
                <Card.Text>
                    Last name
                </Card.Text>
                <Card.Text>
                    <i className="bi bi-pin-map"/> Office Location
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MyProfileCard;