import React from 'react';
import {Jumbotron, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const Login = (props) => {
    const changeHandler = props.changeHandler;
    let Error = () => <p className="alert alert-danger">{props.error} </p>;
    let user = props.user;

    return(
        <Row>
            <Jumbotron>
                <h1>Welcome to the Garage</h1>
            </Jumbotron>
            <Row>
                <Col sm={4} smOffset={4}>
                    { props.error ? <Error/> : null }
                    <Form onSubmit={props.onSubmit} >
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