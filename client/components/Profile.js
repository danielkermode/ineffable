import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addData } from '../redux/reducer';


export class Profile extends Component {
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

  // addProfile = () => {
  //   this.props.addProfile('');
  // };

  render() {
    return (
      <div>
        <div className="profile">
          <div className="user-info">
            <h1>{this.props.data.name}</h1>
            <h3>{this.props.data.description}</h3>
          </div>
          <div id="profileImage">
          {/*image source
          {this.props.data.imageUrl}*/}
          </div>

          <div className="status-update">
            <button >Share</button>
          </div>
        </div>

      </div>
    );
  }
}
