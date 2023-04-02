import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import TrackerMap from './map/TrackerMap';
import SearchBar from './searchbar/SearchBar';
import Journey from './journey/Journey';
import ListView from './list-view/ListView';
import Friends from './friends/Friends';
import Saved from './saved/Saved';
import AllPlaces from './allplaces/AllPlaces';

class App extends React.Component {

  base_url = "https://cse543-web-security.aplayerscreed.com/backend/";
  coordinates = {
        "l_latitude": 37.11,
        "l_longitude": -79.41,
        "h_latitude": 44.14,
        "h_longitude": -75.22};

  constructor(props) {
    super(props);
    this.state = { loggedIn: true, signUpForm: false, signedInUser: "", sideReturnStatus: "home", data: [], inputs: {} };
  }

  surpriseMe = () => {
    var inputObj = {"id": 0};
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
      body: JSON.stringify(inputObj),
      mode: 'cors'
    };
  
    fetch(this.base_url + "location/new", requestOptions)
      .then(response => response.json())
      .then((actualData) => {
        console.log(actualData);
        this.setState({data: actualData});
      })
      .catch((err) => {
        console.log(err.message);
        });
  };

  getData = (inputObj) => {
  //   var data = {
  //     "l_latitude": 37.11,
  //     "l_longitude": -79.41,
  //     "h_latitude": 44.14,
  //     "h_longitude": -75.22
  //     // "search": string,
  //     // "type": string (indoor/outdoor),
  //     // "capacity": int,
  //     // "space": string (self/collaborative),
  //     // "food_available": bool,
  //     // "rating": float
  // };
    console.log("Fetching Data");
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
    body: JSON.stringify(inputObj),
    mode: 'cors'
  };

  fetch(this.base_url + "locations/searchfilter", requestOptions)
    .then(response => response.json())
    .then((actualData) => {
      console.log(actualData);
      this.setState({data: actualData});
    })
    .catch((err) => {
      console.log(err.message);
      });

  };

  signUp = () => {

  };

  loginForm = () => {

  };

  defaultClosedSidebar = () => {
    return (<p>SideBar</p>);
  };

  modifyPage = (data) => {
    this.setState({ sideReturnStatus: data });
    return;
  };

  updateMapRequest = (dataObj) => {
    this.coordinates = dataObj;
    return;
  }

  updateSearchRequest = (dataObj) => {
    // this.setState({inputs: Object.assign({}, this.coordinates, dataObj)});
    this.getData(Object.assign({}, this.coordinates, dataObj));
    return;
  }

  handleMainContents = () => {

    var defaulthome = (
      <div>
        <div>
          <SearchBar searchCallBack={this.updateSearchRequest}></SearchBar>
        </div>
        <div className='map-section'>
          {<TrackerMap mapCallBack={this.updateMapRequest}></TrackerMap>}
        </div>
        <ListView></ListView>
      </div>
    );

    var status = this.state.sideReturnStatus;

    if (status === "home") {
      return defaulthome;
    }
    else if (status === "friends") {
      return (<Friends />);
    }
    else if (status === "saved") {
      return (<div><Saved></Saved></div>);
    }
    else if (status === "leaderboard") {
      return (<div><Journey></Journey></div>);
    }
    else if (status === "see_all") {
      return (<div><AllPlaces></AllPlaces></div>);
    }
    else if (status === "sign_out") {
      return (<div>Sign Out</div>);
    }
    else {
      return defaulthome;
    }
  };

  render() {
    console.log("Rendering App....");
    console.log(JSON.stringify(this.coordinates));
    console.log(this.state.data);
    if(this.state.data.length == 0){
      console.log("Hello")
      this.getData(this.coordinates);
    }

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
              <div className='title-block'>STUDY DENS</div>
              
              <button className='app-button lucky-button' onClick={this.surpriseMe}> Suprise Me! </button>
            </header>
          </div>
        </div>
        {/* <div className='divider'></div> */}
        {pagebody}
      </div>

    );
  };

}
export default App;
