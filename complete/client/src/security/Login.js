import React from 'react';
import {Jumbotron, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const Login = ({user, error, changeHandler, onSubmit}) => {
    let Error = () => <p className="alert alert-danger">{error} </p>;

    return(
        <Row>
            <Jumbotron>
                <h1>Welcome to the Garage</h1>
            </Jumbotron>
            <Row>
                <Col sm={4} smOffset={4}>
                    { error ? <Error/> : null }
                    <Form onSubmit={onSubmit} >
                        <FormGroup>
                            <ControlLabel>Login</ControlLabel >
                            <FormControl type='text' name='username' placeholder='Username' value={user.username} onChange={changeHandler} />
                            <FormControl type='password' name='password' placeholder='Password' value={user.password} onChange={changeHandler} />
                            <Button type="submit" >Log In</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Row>
    );

};

export default Login;
