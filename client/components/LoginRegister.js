import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addData } from '../redux/reducer';

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

  render() {
    return (
      <div>
        {(this.props.loginSwitch !== 'Hidden') && <div className="login-register">
          <input type="text" placeholder="username" maxlength="15"/>
          <br/><input type="password" placeholder="password" maxlength="20"/>
          <br/><button>{this.props.loginSwitch}</button>
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
    }
  };
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
