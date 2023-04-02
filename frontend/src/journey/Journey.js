import React, { Component } from 'react';
import './Journey.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import Progress from './progress/Progress';
import Leader from './leader/Leader';
import How from './how/How';

class Journey extends React.Component {

    constructor(props) {
        super(props);
        this.state = {page: "leader"};
    };

    bringProgressPage = () => {
        this.setState({page: "progress"});
        return;
    }

    bringLeaderboardPage = () => {
        this.setState({page: "leader"});
        return;
    }

    bringHowPage = () => {
        this.setState({page: "how"});
        return;
    }

    inferPageContent = () => {
        var content;
        if(this.state.page === "progress"){
            content = <Progress></Progress>;
        }
        else if(this.state.page === "leader"){
            content = <Leader></Leader>;
        }
        else{
            content = <How></How>;
        }

        return(<div className='page-sections'>{content}</div>)

    }

   
    render (){
        var pageSections;
        pageSections = this.inferPageContent();

        return( <div>
                    <div>
                        {pageSections}
                    </div>
                    <div className='dummy'>
                        <div className='button-row'>
                            <button className='app-button' onClick={this.bringProgressPage}>Progress</button>
                            <button className='app-button' onClick={this.bringLeaderboardPage}>Leaderboard</button>
                            <button className='app-button' onClick={this.bringHowPage}>How to play ?</button>
                        </div>
                    </div>
                </div>
                );
    };
};

export default Journey;