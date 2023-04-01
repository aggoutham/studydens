import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {

    w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
    }

    w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
    }

    home_click = (e) => {
        document.getElementById("mySidebar").style.display = "none";
        this.props.sideCallBack("home");
    }

    friends_click = (e) => {
        document.getElementById("mySidebar").style.display = "none";
        this.props.sideCallBack("friends");
    }

    saved_click = (e) => {
        document.getElementById("mySidebar").style.display = "none";
        this.props.sideCallBack("saved");
    }

    leader_click = (e) => {
        document.getElementById("mySidebar").style.display = "none";
        this.props.sideCallBack("leaderboard");
    }

    see_click = (e) => {
        document.getElementById("mySidebar").style.display = "none";
        this.props.sideCallBack("see_all");
    }

    sign_click = (e) => {
        document.getElementById("mySidebar").style.display = "none";
        this.props.sideCallBack("sign_out");
    }

    render (){
        return(
            <div>
                <div className="bar-len w3-sidebar w3-bar-block w3-collapse w3-card" id="mySidebar">
                    <button className="menu-item" onClick={this.w3_close}>MENU</button>
                    <button className="bar-item" onClick={this.home_click}>Home</button>
                    <button className="bar-item" onClick={this.friends_click}>Friends</button>
                    <button className="bar-item" onClick={this.saved_click}>Saved</button>
                    <button className="bar-item" onClick={this.leader_click}>Leaderboard</button>
                    <button className="bar-item" onClick={this.see_click}>See All</button>
                    <button className="bar-item" onClick={this.sign_click}>Sign Out</button>
                </div>

                <div className="sidebar-main" >
                    <div>
                        <button className="w3-button-den w3-button large" onClick={this.w3_open}>&#9776;</button>
                    </div>
                </div>

               
            </div>
        )
    }

}

export default Sidebar;