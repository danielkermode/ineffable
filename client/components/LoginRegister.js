import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addData, createUser } from '../redux/reducer';

export class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    };
  }

  loginOrRegister = () => {
      // create a user with details
    if (this.props.loginSwitch === 'Register') {
      // input strings
      const userObj = {
        name: document.getElementById('username').value,
        password: document.getElementById('password').value
      }
      // call a dispatch
      this.props.createUser(userObj)
    } else if (this.props.loginSwitch === 'Login') {
      // login with details
    } else {
      console.log('Not registering or logging in! ?????')
  }
  }

  render() {
    return (
      <div>
        {(this.props.loginSwitch !== 'Hidden') && <div className="login-register">
        {this.props.err}
          <input id="username" type="text" placeholder="username" maxLength="15"/>
          <br/><input id="password" type="password" placeholder="password" maxLength="20"/>
          <br/><button onClick={this.loginOrRegister}>{this.props.loginSwitch}</button>
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addData: (data) => {
      dispatch(addData(data));
    },
    createUser: (userObj) => {
      dispatch(createUser(userObj));
    }
  };
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
