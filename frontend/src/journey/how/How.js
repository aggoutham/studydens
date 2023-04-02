import React, { Component } from 'react';
import './How.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import logo from '../../nsd_logo.png'

class How extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

   
    render (){

        return( <div>
                    How to Play ?!
                    <div className='big-thumbnail'>
                        <img src={logo} className='logo-image'></img>
                        <div className='logo-content'>Instructions :- </div>
                    </div>
                </div>
                );
    };
};

export default How;