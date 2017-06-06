import React, {Component} from 'react';
import Garage from './Garage';
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
        console.log('App:login');
        e.preventDefault(); // This line is needed or the error doesn't display and it will not authenticate

        restLogin(this.state.user)
            .then(checkLoginResponseStatus)
            .then(response => loginResponseHandler(response, this.customLoginHandler))
            .catch(error => defaultErrorHandler(error, this.customErrorHandler));
        console.log('END App:login');
    };

    inputChangeHandler = (event) => {
        let {user} = this.state;
        const target = event.target;

        user[target.name] = target.value;

        this.setState({user});
    };

    customLoginHandler = () => {
        console.log('customLoginHandler');
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
