import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {

    w3_close = () => {
        console.log("Closing Sidebar");
        document.getElementById("mySidebar").style.display = "none";
    }

    w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
    }

    render (){
        return(
            <div>
                <div className="bar-len w3-sidebar w3-bar-block w3-collapse w3-card" id="mySidebar">
                    <button className="menu-item" onClick={this.w3_close}>MENU</button>
                    <button className="bar-item" onClick={this.w3_close}>Home</button>
                    <button className="bar-item" onClick={this.w3_close}>Friends</button>
                    <button className="bar-item" onClick={this.w3_close}>Saved</button>
                    <button className="bar-item" onClick={this.w3_close}>Leaderboard</button>
                    <button className="bar-item" onClick={this.w3_close}>See All</button>
                    <button className="bar-item" onClick={this.w3_close}>Sign Out</button>
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