import React from 'react';

class Auth extends React.Component {

  constructor() {
    super();
    this.state = {
        authenticated: false
    }
  }

  isAuthenticated() { 
      return this.state.authenticated;
  }

  authenticate = () => {
    this.setState({authenticated: true});
  };

  logout = () =>{
    this.setState({authenticated: false});
  };
}

export default App;  