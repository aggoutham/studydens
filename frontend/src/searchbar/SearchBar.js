import React, { Component } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {filter: false};
    };

    handle_search = () => {
        
        console.log("Searching.....")

        return;
    };

    openfilters = () => {
        if(this.state.filter === false){
            this.setState({filter: true});
        } else{
            this.setState({filter: false});
        }
    };

    getFilters = () => {
        
        var dropdownContents = (<Dropdown.Menu className='filter-area' id='goutham'>
                                    <Dropdown.Item className='dropdown-items'>Indoor</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-items'>Capacity</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-items'>Self Study</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-items'>Food Available</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-items'>Rating</Dropdown.Item>
                                </Dropdown.Menu>);

        return (<Dropdown className='dropdown'>
                    <Dropdown.Toggle className='filter-button' variant="success" id="dropdown-autoclose-outside" data-toggle="goutham">
                        <FontAwesomeIcon icon={faFilter} size="lg"/>
                    </Dropdown.Toggle>
                    {dropdownContents}
                </Dropdown>);
    }

    render (){
        var filter_area = this.getFilters();

        return( <div>
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="Try Exams, Pattee, AirPlay etc."></input>
                            <button type="submit" className="searchButton" onClick={this.handle_search}><FontAwesomeIcon icon={faSearch} color="white" size="lg" /></button>
                        </div>
                    </div>
                    {/* <button type="submit" className='filterButton' onClick={this.openfilters}><FontAwesomeIcon icon={faFilter} size="lg" /></button> */}
                    {/* <div className='bottom-divider'></div> */}
                    {filter_area}
                </div>);
    };
};

export default SearchBar;