
import React from 'react'
import {Button, Card, Col, Form, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function EditMyProfileCard(props) {
    return (
        <Card className={"flex-center"}>
            <Link to="/my-profile"> <i className="bi bi-arrow-clockwise spinner-button"/> </Link>
            <Card.Img variant="top" src={require(`../assets/img.jpg`).default}
                      style={{height: '150px', width: '150px'}}/>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" required placeholder="Enter your first name"/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Control type="text" required placeholder="Enter your last name"/>
                    </Form.Group>
                    <br/>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}> <i className="bi bi-pin-map"/> </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" required placeholder="Enter your office"/>
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

export default EditMyProfileCard