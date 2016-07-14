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

  addData = () => {
    this.props.addData('dummy');
  };

  render() {
    return (
      <div>
        <div>Welcome</div>
        <button onClick={this.addData}>Add</button>
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
