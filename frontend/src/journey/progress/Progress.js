import React, { Component } from 'react';
import './Progress.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import bronze from '../icons/silver.png';
import star from '../icons/star.png';
import friends from '../icons/friends.png';

class Progress extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };


    getProgressThumbnails = () => {
        
        return(<div className='image-row'>
            <div className='thumbnail'>
                <img src={bronze} className='logo-image'></img>
                <div className='logo-content'>Silver League</div>
            </div>
            <div className='thumbnail'>
                <img src={star} className='logo-image'></img>
                <div className='logo-content'>1200 Stars</div>
            </div>
            <div className='thumbnail'>
                <img src={friends} className='logo-image'></img>
                <div className='logo-content'>12 Friends</div>
            </div>
        </div>);

    }

    getStories = () => {

        var arrStories = [
            {
                "description": "Add 5 Friends to your Study Dens profile.",
                "reward": 5
            },
            {
                "description": "Study in any indoor seating space for 3 hours.",
                "reward": 15
            },
            {
                "description": "Submit reviews and rating for atleast 30 Study Dens.",
                "reward": 50
            },
            {
                "description": "Add 5 Friends to your Study Dens profile.",
                "reward": 25
            },
            {
                "description": "Add 5 Friends to your Study Dens profile.",
                "reward": 35
            }
        ];

        var stories;

        stories = arrStories.map(item => {

            return(<div className='mission-box'>
                <div> <div  className='important-text2'>Goal :</div> {item.description}</div>
                <div> <div  className='important-text2'>Reward :</div> {item.reward} stars</div>
            </div>)

        });

        return(<div className='mission-section'>
            <div  className='important-text'>Upcoming Missions</div>
            {stories}
            <div  className='important-text'>Completed Missions - 32</div>
        </div>);
    }
   
    render (){
        var thumbnails, stories;
        thumbnails = this.getProgressThumbnails();
        stories = this.getStories();

        return( <div>
                    <div className='important-text'>Hello user, here's your journey so far...</div>
                    {thumbnails}
                    {stories}
                </div>
                );
    };
};

export default Progress;