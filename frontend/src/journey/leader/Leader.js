import React, { Component } from 'react';
import './Leader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

class Leader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

   
    render (){

        return( <div>
                    Leaderboard
                </div>
                );
    };
};

export default Leader;