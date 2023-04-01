import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: true, signUpForm: false, signedInUser: ""};
  }

  signUp = () => {

  };

  loginForm = () => {
    
  };

  render() {

    var auth_flow, student_id;

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
      student_id = (<p className='right-button'>Hi, {this.state.signedInUser}!</p>)
    }

    return (
      <div>
        <div>
          <header className="App-header">
            <p>
              STUDY DENS
            </p>
            {student_id}
          </header>
          <button name="logout" className='right-button' onClick={this.handleLogout}>Log Out</button>

        </div>
      <div className="App">
        {auth_flow}
      </div>
      </div>
      
    );
  };

}

export default App;
