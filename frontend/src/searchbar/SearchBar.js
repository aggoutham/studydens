import React, { Component } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Overlay from 'react-bootstrap/Overlay';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { filter: false, formFilterShow: false, indoor: false, cap: 0, ss: false, food: false, rating: 0 };
    };

    handle_search = () => {

        console.log("Searching.....")

        return;
    };

    handleOnChangeIndoor = () => {
        if (this.isIndoorChecked)
            this.isIndoorChecked = false;
        else
            this.isIndoorChecked = true;
    }


    getFilters = () => {

        // var dropdownContents = (<Dropdown.Menu className='filter-area' id='goutham'>
        //     <Dropdown.Item className='dropdown-items'>Indoor
        //         <div className="checkIndoor">
        //             <input
        //                 type="checkbox"
        //                 id="indoor"
        //                 name="indoor"
        //                 value="Indoor"
        //                 checked={isIndoorChecked}
        //                 onChange={handleOnChangeIndoor}
        //             />

        //         </div>
        //     </Dropdown.Item>
        //     <Dropdown.Item className='dropdown-items'>Capacity</Dropdown.Item>
        //     <Dropdown.Item className='dropdown-items'>Self Study</Dropdown.Item>
        //     <Dropdown.Item className='dropdown-items'>Food Available</Dropdown.Item>
        //     <Dropdown.Item className='dropdown-items'>Rating</Dropdown.Item>
        // </Dropdown.Menu>);

        // return (<Dropdown className='dropdown'>
        //     <Dropdown.Toggle className='filter-button' variant="success" id="dropdown-autoclose-outside" data-toggle="goutham">
        //         <FontAwesomeIcon icon={faFilter} size="lg" />
        //     </Dropdown.Toggle>
        //     {dropdownContents}
        // </Dropdown>);
    }

    getFilterForm = () => {
        return (
            <div className="form-wrapper">
                <form>
                    <div id="ind">
                        <label>
                            Indoor
                            <input type="checkbox" name="indoor" onChange={(e) => { this.setState({ indoor: e.target.checked }) }} />
                        </label>
                    </div>
                    <div id="cap">
                        <label>
                            Capacity
                            <input type="text" name="capacity" onChange={(e) => { this.setState({ cap: e.target.value }) }} />
                        </label>
                    </div>
                    <div id="ss">
                        <label>
                            Self Study
                            <input type="checkbox" name="selfStudy" onChange={(e) => { this.setState({ ss: e.target.checked }) }} />
                        </label>
                    </div>
                    <div id="food">
                        <label>
                            Food Available
                            <input type="checkbox" name="foodAvailable" onChange={(e) => { this.setState({ food: e.target.checked }) }} />
                        </label>
                    </div>
                    <div id="rating">
                        <label>
                            {"Rating >="}
                            <select onChange={(e) => { this.setState({ rating: e.target.value }) }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                    </div>
                    <div id="statusButtons">
                        <button type="submit" onClick={() => { this.setState({ formFilterShow: false }) }}>Cancel</button>
                        <input type="submit" value="Apply" onClick={(e) => { console.log({ indoor: this.state.indoor, capacity: this.state.cap, selfstudy: this.state.ss, foodAvail: this.state.food, rating: this.state.rating }) }} />
                    </div>
                </form>
            </div>
        );
    }


    render() {
        var final = null;
        var filter_area = this.getFilterForm();
        if (this.state.formFilterShow === true) {
            final = filter_area;
        }
        console.log("fshow:", this.state.formFilterShow);

        return (<div>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Try Exams, Pattee, AirPlay etc."></input>
                    <button type="submit" className="searchButton" onClick={this.handle_search}><FontAwesomeIcon icon={faSearch} color="white" size="lg" /></button>
                </div>
                <div>
                    {/* <InputLabel id="demo-simple-select-label">Filter</InputLabel> */}
                    <button onClick={(e) => { this.setState({ formFilterShow: true }) }}>
                        Filter
                    </button>
                </div>
            </div>
            {/* <button type="submit" className='filterButton' onClick={this.openfilters}><FontAwesomeIcon icon={faFilter} size="lg" /></button> */}
            {/* <div className='bottom-divider'></div> */}

            {final}
        </div>);
    };
};

export default SearchBar;