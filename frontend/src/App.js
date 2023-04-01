import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import TrackerMap from './map/TrackerMap';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {loggedIn: true, signUpForm: false, signedInUser: "", sideReturnStatus: "home"};
  }

  signUp = () => {

  };

  loginForm = () => {
    
  };

  defaultClosedSidebar = () => {
    return(<p>SideBar</p>);
  };

  modifyPage = (data) => {
    this.setState({sideReturnStatus: data});
    return;
  };

  handleMainContents = () => {

    var defaulthome = (<div className='map-section'>
                        {/* <TrackerMap></TrackerMap> */}
                      </div>);
    var status = this.state.sideReturnStatus;

    if (status === "home") {
      return defaulthome;
    }
    else if(status === "friends"){
      return (<div>Friends</div>);
    }
    else if(status === "saved"){
      return (<div>Saved</div>);
    }
    else if(status === "leaderboard"){
      return (<div>Leaderboard</div>);
    }
    else if(status === "see_all"){
      return (<div>See All</div>);
    }
    else if(status === "sign_out"){
      return (<div>Sign Out</div>);
    }
    else{
      return defaulthome;
    }
  };


  render() {
    console.log("Rendering App....");

    var pagebody;
    pagebody = this.handleMainContents();

    return (
      <div className='App'>
        <div>
          <div className="sidebar-section">
            <Sidebar sideCallBack={this.modifyPage}></Sidebar>
          </div>
          <div>
            <header className="App-header">
                STUDY DENS
            </header>
          </div>
        </div>
        <div className='divider'></div>
        {pagebody}
      </div>
      
    );
  };

}
export default App;
