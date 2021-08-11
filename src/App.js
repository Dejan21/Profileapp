import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import FirstCard from './components/FirstCard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import CardsContainer from './components/CardsContainer';
import SecondCard from './components/SecondCard';


function App() {
  return (
    <Container className="App text-center ">
      <Row>
     <Col clasName="col-md-8 offset-md-2">
      <Router>
        <Switch>

        
        <Route exact path='/' component={FirstCard} />
        <Route exact path='/FirstCard' component={FirstCard} />
        <Route path ='/SecondCard' component={SecondCard}/>
        
        
        </Switch>

      </Router>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
