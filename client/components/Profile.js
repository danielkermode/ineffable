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

  render() {
    return (
      <div>
        <div className="profile">
          <div className="user-info">
            <h1>{this.props.data.name}</h1>
            <h3>{this.props.data.description}</h3>
          </div>
          <div id="profileImage">
            <img src={this.props.data.imageUrl}/>
          </div>

          <div className="status-update">
            <input type="text" placeholder="status" maxLength="17"
            onkeyup="this.value = this.value.replace(/[^a-z]/,'')"/>
            <button >Share</button>
          </div>
        </div>

      </div>
    );
  }
}
