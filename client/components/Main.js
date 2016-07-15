import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addData, changeLoginSwitch } from '../redux/reducer';
import LoginRegister from './LoginRegister'

export class Main extends Component {
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('map')
  return {

  };
}

function mapDispatchToProps (dispatch) {
  return {
    addData: (data) => {
      dispatch(addData(data));
    }
  };
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
