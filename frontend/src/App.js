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

    return (
      <div className='App'>
        <div>
          <div className="sidebar-section">
            <Sidebar signedInUser={this.state.signedInUser}></Sidebar>
          </div>
          <div>
            <header className="App-header">
                STUDY DENS
            </header>
          </div>
        </div>
        <div className='map-section'>
          <TrackerMap></TrackerMap>
        </div>
      </div>
      
    );
  };

}
export default App;
