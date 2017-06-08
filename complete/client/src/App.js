import React, {Component} from 'react';
import Garage from './garage';
import Auth from './security/Auth';
import Login from './security/Login';
import {Grid} from 'react-bootstrap';
import {SERVER_URL} from './config';
import {defaultErrorHandler} from './handlers/errorHandlers';
import {checkResponseStatus, loginResponseHandler} from './handlers/responseHandlers';

class App extends Component {

    constructor() {
        super();

        this.state = {
            user: {
                username: '',
                password: ''
            },
            route: 'login',
            error: null
        }
    }

    /** LifeCycle methods ------------------------------------------------------------------------------------------- */
    componentDidMount() {
        if (Auth.loggedIn()) {
            this.setState({route: 'garage'})
        }
    }
    /** ------------------------------------------------------------------------------------------------------------- */

    reset = () => {
        this.setState({
            user: {
                username: '',
                password: ''
            },
            route: 'login',
            error: null
        });
    };

    login = (e) => {
        console.log('App:login');
        // This line is needed or the error doesn't display and it will not authenticate
        e.preventDefault(); //<1>

        fetch(`${SERVER_URL}/api/login`, { //<2>
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.user)
        }).then(checkResponseStatus) //<3>
          .then(response => loginResponseHandler(response, this.customLoginHandler)) //<4>
          .catch(error => defaultErrorHandler(error, this.customErrorHandler)); //<5>
        console.log('END App:login');
    };

    inputChangeHandler = (event) => {
        let {user} = this.state;
        const target = event.target;

        user[target.name] = target.value;

        this.setState({user});
    };

    customLoginHandler = () => { //<1>
        console.log('customLoginHandler');
        this.setState({route: 'garage'});
    };

    customErrorHandler = (error) => { //<2>
        this.reset();
        this.setState({error: error.message});
    };

    logoutHandler= () => {
        Auth.logOut();
        this.reset();
    };

    contentForRoute() {
        const {error, user, route} = this.state
        console.log('contentForRoute: ' + route);
        switch (route) {
            case 'login':
                return <Login error={error}
                              user={user}
                              changeHandler={this.inputChangeHandler}
                              onSubmit={this.login} />;
            case 'garage':
                return <Garage logoutHandler={this.logoutHandler}/>;
            default:
                return <Login error={error}
                              user={user}
                              changeHandler={this.inputChangeHandler}
                              onSubmit={this.login}/>;
        }
    };

    render() {
        const content = this.contentForRoute();

        return (
            <Grid>
                {content}
            </Grid>
        );
    };
}

export default App;