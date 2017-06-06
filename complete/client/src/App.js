import React, {Component} from 'react';
import Garage from './garage';
import Auth from './security/Auth';
import Login from './security/Login';
import {Grid} from 'react-bootstrap';
import {restLogin} from "./conf/fetchConfig";
import {defaultErrorHandler} from './conf/errorHandlerConfig';
import {checkLoginResponseStatus, loginResponseHandler} from './conf/responseHandlerConfig';

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
        e.preventDefault(); // This line is needed or the error doesn't display and it will not authenticate

        restLogin(this.state.user)
            .then(checkLoginResponseStatus)
            .then(response => loginResponseHandler(response, this.customLoginHandler()))
            .catch(error => defaultErrorHandler(error, this.customErrorHandler(error)));
    };

    inputChangeHandler = (event) => {
        let {user} = this.state;
        const target = event.target;

        user[target.name] = target.value;

        this.setState({user});
    };

    customLoginHandler = () => {
        this.setState({route: 'garage'});
    };

    customErrorHandler = (error) => {
        this.reset();
        this.setState({error: error.message});
    };

    logoutHandler= () => {
        Auth.logOut();
        this.reset();
    };

    contentForRoute() {
        switch (this.state.route) {
            case 'login':
                return <Login error={this.state.error}
                              user={this.state.user}
                              changeHandler={this.inputChangeHandler}
                              onSubmit={this.login} />;
            case 'garage':
                return <Garage logoutHandler={this.logoutHandler}/>;
            default:
                return <Login error={this.state.error}
                              user={this.state.user}
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