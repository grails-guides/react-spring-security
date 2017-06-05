import React, {Component} from 'react';
import Garage from './Garage';
import Login from './Login';
import { Grid } from 'react-bootstrap';

class App extends Component {


  constructor() {
    super();

    this.state = {
      user: '',
      route: 'login'
    }
  }

  componentDidMount() {
    if(true/*Auth.isLogged()*/) {
      this.setState({route: 'garage'})
    }
  }


  contentForRoute() {
    switch(this.state.route) {
      case 'login':
        return <Login />;
      case 'garage':
        return <Garage />;
      default:
        return <Login />;
    }
  }

  render() {

    const content = this.contentForRoute();

    return <Grid>
      {content}
    </Grid>
  };
}

export default App;
