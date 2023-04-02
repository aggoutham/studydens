import React from "react";
import './Friends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.friends = [{
            "id": 0,
            "name": "John Doe",
            "stars": 4,
            "badge": "silver",
            "levels_completed": 120,
            "favorites": [
                1,
                3,
                5,
                7,
                9,
                11,
                13,
                15
            ],
            "history": [
                {
                    "1": 2
                },
                {
                    "2": 4
                },
                {
                    "3": 6
                },
                {
                    "4": 8
                },
                {
                    "5": 10
                }
            ],
            "friends": [
                1,
                2,
                3
            ]
        },
        {
            "id": 1,
            "name": "Jane Doe",
            "stars": 5,
            "badge": "gold",
            "levels_completed": 150,
            "favorites": [
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ],
            "history": [
                {
                    "10": 10
                },
                {
                    "11": 9
                },
                {
                    "12": 8
                },
                {
                    "13": 7
                },
                {
                    "14": 6
                },
                {
                    "20": 15
                },
                {
                    "21": 16
                },
                {
                    "22": 17
                },
                {
                    "23": 18
                },
                {
                    "24": 19
                }
            ],
            "friends": [
                0,
                2,
                3,
                4
            ]
        },
        {
            "id": 2,
            "name": "Jack Damien",
            "stars": 1.5,
            "badge": "bronze",
            "levels_completed": 50,
            "favorites": [
                0,
                5,
                10,
                15,
                20
            ],
            "history": [
                {
                    "0": 5
                },
                {
                    "1": 4
                },
                {
                    "2": 6
                },
                {
                    "3": 3
                },
                {
                    "4": 7
                }
            ],
            "friends": [
                0,
                1
            ]
        }]
    }

    render() {
        return (
            <div className="friend-container">
                <div className="add-friends" >
                    <FontAwesomeIcon icon={faUserPlus} style={{
                        display: 'inline'
                    }} /> Add Friends
                </div>

                <div className="friend-title">
                    Your Friends
                </div>

                <div className="friend-list-container">
                    {
                        this.friends.map(friend => (<div>
                            <FontAwesomeIcon icon={Math.random() < 0.5 ? faPerson : faPersonDress} style={{ display: 'inline' }} /> {friend.name}
                        </div>))
                    }
                </div>
            </div>
        )
    }
}

export default Friends;