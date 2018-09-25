import React from 'react';
import Home from '../home/Home';
import Auth from '../../security/auth';
import Login from '../login/Login';
import {Grid} from 'react-bootstrap';
import {SERVER_URL} from '../../config';
import {defaultErrorHandler} from '../../handlers/errorHandlers';
import {checkResponseStatus, loginResponseHandler} from '../../handlers/responseHandlers';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userDetails: {
        username: '',
        password: ''
      },
      route: '',
      error: null
    }
  }

  reset = () => {
    this.setState({
      userDetails: {
        username: '',
        password: ''
      },
      route: 'login',
      error: null
    });
  };
  
  componentDidMount() {
    (async () => {
      if (await Auth.loggedIn()) {
        this.setState({route: 'home'})
      } else {
        this.setState({route: 'login'});
      }
    })();
  }

  componentDidUpdate() {
    if (this.state.route !== 'login' && !Auth.loggedIn()) {
      this.setState({route: 'login'})
    }
  }
  
  inputChangeHandler = (event) => {
    let {userDetails} = this.state;
    const target = event.target;
    userDetails[target.name] = target.value;
    this.setState({userDetails});
  };

  login = (e) => {    
    e.preventDefault(); 
    let {userDetails} = this.state;  
    fetch(`${SERVER_URL}/login`, { 
      method: 'POST',
      mode: "cors",
      credentials: "include",
      cache: "no-cache",     
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+ btoa(unescape(encodeURIComponent(userDetails.username+':'+userDetails.password)))
      },
      body: JSON.stringify({ username: userDetails.username, password: userDetails.password }) 
    }).then(checkResponseStatus) 
      .then(response => loginResponseHandler(response, this.customLoginHandler)) 
      .catch(error => defaultErrorHandler(error, this.customErrorHandler)); 
  };

  customLoginHandler = () => {
    this.setState({route: 'home'});
  };

  customErrorHandler = (error) => { 
    this.reset();
    this.setState({error: error});
  };

  logoutHandler = () => {
    Auth.logOut();
    this.reset();
  };
  
  contentForRoute() { 
    const {error, userDetails, route} = this.state;

    const loginContent = <Login error={error} 
                                userDetails={userDetails}
                                inputChangeHandler={this.inputChangeHandler}
                                onSubmit={this.login}/>;

    const homeContent = <Home logoutHandler={this.logoutHandler}/>;

    switch (route) {
      case 'login':
        return loginContent;
      case 'home':
        return homeContent;
      default:
        return <p>Loading...</p>;
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