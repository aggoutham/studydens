import React, { Component } from 'react';
import './SearchBar.css';

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

        return (<div>Helloooooooo</div>)
    }

    render (){
        var filter_area = this.getFilters();

        return( <div>
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="Try Exams, Pattee, AirPlay etc."></input>
                            <button type="submit" className="searchButton" onClick={this.handle_search}>GO!</button>
                        </div>
                    </div>
                    <button type="submit" className='filterButton' onClick={this.openfilters}>=</button>
                    {filter_area}
                    <div className='filter-area'>
                    </div>
                </div>);
    };
};

export default SearchBar;