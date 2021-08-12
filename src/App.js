
import './App.css';
import React  from "react";
import MyProfileCard from './components/MyProfileCard';
import {BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import EditMyProfileCard from './components/EditMyProfileCard';


function App() {
  return (
    <Container className="App text-center ">
      <Row>
     <Col clasName="col-md-8 offset-md-2">
      <Router>
        <Switch>

        
        
        <Route exact path='/my-profile' component={MyProfileCard} />
        <Route path ='/edit-my-profile' component={EditMyProfileCard}/>
        <Redirect to={"/my-profile"}/>
        
        </Switch>

      </Router>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
