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
                <div className="w3-sidebar w3-bar-block w3-collapse w3-card" id="mySidebar">
                    <button className="w3-bar-item w3-button w3-hide-large"
                    onClick={this.w3_close}>Close &times;</button>
                    <p className="w3-bar-item w3-button">Link 1</p>
                    <p className="w3-bar-item w3-button">Link 1</p>
                    <p className="w3-bar-item w3-button">Link 1</p>
                </div>

                <div className="w3-main" >

                    <div className="w3-teal">
                        <button className="w3-button w3-teal w3-xlarge" onClick={this.w3_open}>&#9776;</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Sidebar;