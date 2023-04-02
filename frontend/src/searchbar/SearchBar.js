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

    handle_form = (event) => {

        console.log("Searching using string and params.....")
        var data = {};
        data["search"] = document.getElementById("searchStringBox").value;
        if(this.state.indoor){
            data["type"] = "indoor";
        } else{
            data["type"] = "outdoor"
        }
        data["capacity"] = this.state.cap;
        if(this.state.ss){
            data["space"] = "self";
        } else{
            data["space"] = "collaborative";
        }
        data["food_available"] = this.state.food;
        data["rating"] = this.state.rating;

        this.props.searchCallBack(data);
        return;
    };

    handle_search = () => {

        // console.log("Searching using string only.....")
        var data = {};
        data["search"] = document.getElementById("searchStringBox").value;
       
        this.props.searchCallBack(data);
        return;
    };

    handleOnChangeIndoor = () => {
        if (this.isIndoorChecked)
            this.isIndoorChecked = false;
        else
            this.isIndoorChecked = true;
    }


    getFilterForm = () => {
        return (
            <div className="form-wrapper">
                <form>
                    <div id="ind" className='filter-lines'>
                        <label>
                            Indoor : 
                            <input type="checkbox" className="filter-check" name="indoor" onChange={(e) => { this.setState({ indoor: e.target.checked }) }} />
                        </label>
                    </div>
                    <div id="ss" className='filter-lines'>
                        <label>
                            Self Study : 
                            <input type="checkbox" name="selfStudy" className="filter-check" onChange={(e) => { this.setState({ ss: e.target.checked }) }} />
                        </label>
                    </div>
                    <div id="food" className='filter-lines'>
                        <label>
                            Food Available : 
                            <input type="checkbox" name="foodAvailable" className="filter-check" onChange={(e) => { this.setState({ food: e.target.checked }) }} />
                        </label>
                    </div>
                    <div id="cap" className='filter-lines'>
                        <label>
                            {"Capacity >= "} 
                            <input type="text" name="capacity" className="filter-box" onChange={(e) => { this.setState({ cap: e.target.value }) }} />
                        </label>
                    </div>
                    <div id="rating" className='filter-lines'>
                        <label>
                            {"Rating >= "}
                            {/* <select onChange={(e) => { this.setState({ rating: e.target.value }) }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> */}
                            <input type="text" name="capacity" className="filter-box" onChange={(e) => { this.setState({ cap: e.target.value }) }} />
                        </label>
                    </div>
                    <div id="statusButtons">
                        <button type="submit" className='filter-area-button' onClick={() => { this.setState({ formFilterShow: false }) }}>Cancel</button>
                        <input type="submit" className='filter-area-button' value="Apply" onClick={() => {
                            console.log("Hurrayyyyyyyyyyy");
                            this.handle_form()}} />
                    </div>
                </form>
            </div>
        );
    }

    handleFilterButtonClick = (e) => {
        if(this.state.formFilterShow === true){
            this.setState({formFilterShow: false});
        } else{
            this.setState({formFilterShow: true});
        }

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
                    <input type="text" className="searchTerm" id="searchStringBox" placeholder="Try Exams, Pattee, AirPlay etc."></input>
                    <button type="submit" className="searchButton" onClick={this.handle_search}><FontAwesomeIcon icon={faSearch} color="white" size="lg" /></button>
                </div>
                <div className='filter-holder'>
                    <button className='filter-button' onClick={this.handleFilterButtonClick}>
                        <FontAwesomeIcon icon={faFilter} color="black" size="xl" />
                    </button>
                </div>
            </div>
            {final}
        </div>);
    };
};

export default SearchBar;