import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addData, changeLoginSwitch } from '../redux/reducer';
import LoginRegister from './LoginRegister'

export class Welcome extends Component {
  static propTypes = {
    //propTypes go here
  };

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    };
  }

  addData = () => {
    this.props.addData('dummy');
  };

  handleChange = (switchString) => {
    return (e) => {
      this.props.changeLoginSwitch(switchString)
    }
  };

  render() {
    return (
      <div>
        <div className="welcome">
          <div className="welcomeCircle"><h1>Ineffable</h1></div>
          <div className="switchButtons">
            <button onClick={this.handleChange('Login')}>Sign In</button>
            <button onClick={this.handleChange('Register')}>Register</button>
          </div>
        </div>
        <br/>
        <LoginRegister loginSwitch={this.props.loginSwitch} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginSwitch: state.reducer.loginSwitch
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addData: (data) => {
      dispatch(addData(data));
    },
    changeLoginSwitch: (switchString) => {
      dispatch(changeLoginSwitch(switchString));
    }
  };
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
