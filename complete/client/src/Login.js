import React from 'react';
import {Jumbotron, Row, Col, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const Login = (props) => {

return(
  <Row>
    <Jumbotron>
      <h1>Welcome to the Garage</h1>
    </Jumbotron>
  <Row>
    <Col sm={4} smOffset={4}>
      <Form>
        <FormGroup>
          <ControlLabel>Login</ControlLabel >
          <FormControl type='text' name='user' placeholder='Username' />
          <FormControl type='password' name='password' placeholder='Password' />
        </FormGroup>
      </Form>
    </Col>
  </Row>
  </Row>
);

}

export default Login;
