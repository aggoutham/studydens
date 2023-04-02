import React from "react";
import './Saved.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'
import ListView from "../list-view/ListView";

class Saved extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <ListView rooms={this.props.rooms}></ListView>
            </div>
        )
    }
}

export default Saved;