import React, { Component } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

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
        var filter_area = null;
        if(this.state.filter === true){
            filter_area = ((<div className='filter-area'>Helloooooooo</div>));
        } 
        return filter_area;
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
                    <button type="submit" className='filterButton' onClick={this.openfilters}><FontAwesomeIcon icon={faFilter} size="lg" /></button>
                    {filter_area}
                </div>);
    };
};

export default SearchBar;