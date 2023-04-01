import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import TrackerMap from './map/TrackerMap';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {loggedIn: true, signUpForm: false, signedInUser: ""};
  }

  signUp = () => {

  };

  loginForm = () => {
    
  };

  defaultClosedSidebar = () => {
    return(<p>SideBar</p>);
  };

  render() {

    var auth_flow, student_id, sidebar;

    if(this.state.loggedIn === true){
      auth_flow = (<div>
      </div>)
    } else{
      if(this.state.signUpForm === true){
        auth_flow = this.signUp();
      }
      else{
        auth_flow = this.loginForm();
      }
    }

    if(this.state.loggedIn === true){
      student_id = (<p className='right-button'>Hi, {this.state.signedInUser}!</p>);
    }


    return (
      <div>
        <div className="sidebar-section">
          <Sidebar signedInUser={this.state.signedInUser}></Sidebar>
        </div>
        <div className="App">
          {auth_flow}
        </div>
        <div>
          {/* <button name="logout" className='right-button' onClick={this.handleLogout}>Log Out</button> */}
          <header className="App-header">
            <p>
              STUDY DENS
            </p>
            {student_id}
          </header>
        </div>
        <div className='map-section'>
          <TrackerMap></TrackerMap>
        </div>
      </div>
      
    );
  };

}
export default App;
