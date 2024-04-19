import React from 'react';
import Keycloak from 'keycloak-js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    })
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return <div>Authenticated</div>;
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}

export default Login;
