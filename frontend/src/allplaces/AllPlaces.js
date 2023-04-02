import React from "react";
import './AllPlaces.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'
import ListView from "../list-view/ListView";

class AllPlaces extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <ListView></ListView>
            </div>
        )
    }
}

export default AllPlaces;