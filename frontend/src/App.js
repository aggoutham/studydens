import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {loggedIn: true, signUpForm: false, signedInUser: "", showsidebar: true};
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

    if(this.state.showsidebar === true){
      sidebar = (<Sidebar signedInUser={this.state.signedInUser}></Sidebar>)
    }else{
      sidebar = this.defaultClosedSidebar();
    }

    return (
      <div>
        <div className="sidebar-section">
          {sidebar}
        </div>
        <div className="App">
          {auth_flow}
        </div>
        <div>
          <button name="logout" className='right-button' onClick={this.handleLogout}>Log Out</button>
          <header className="App-header">
            <p>
              STUDY DENS
            </p>
            {student_id}
          </header>
        </div>
      </div>
      
    );
  };

}
export default App;
