import React, {Component}  from 'react';
import {Redirect} from 'react-router-dom'
import Auth from './auth';

class Logout extends Component {

    componentDidMount() {
        console.log('Logging Out ...');
        Auth.logOut();
    }

    render = () => {
        if (Auth.loggedIn()) {
            return (
                <Redirect to="/login"/>
            );
        }

        return (<p>Logging out...</p>);
    }
}

export default Logout;