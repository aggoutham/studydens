import React from 'react';
import './ListView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faStar, faUser, faLocationDot, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

//import './window-close-solid.svg';

/*
TODO:

 - Collapsable Building names
*/

class CenterCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= this.props.room.rating) {
                stars.push(<FontAwesomeIcon key={i} icon={faStar} className='stars-color' />);
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={faStar} className='stars-nocolor' />);
            }
        }

        let reviews = [];

        for (let i = 0; i < this.props.room.reviews.length; i++) {
            const review = this.props.room.reviews[i];

            reviews.push(<div className='review-box'>
                <FontAwesomeIcon icon={faUser} style={{
                    marginTop: '0.2em'
                }} />
                <div>{review}</div>
            </div>);

        }

        return (<React.Fragment>
            <div className="center-card">
                <img src="https://thumbs.dreamstime.com/b/library-computer-desk-20785064.jpg" alt="" className="center-img" />
                <div className='center-title'>
                    {this.props.room.name} - {this.props.room.location} <div>{stars}</div>
                </div>

                <div className='center-desc'>

                    {this.props.room.description}
                </div>

                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Reviews</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='center-fields'>
                                <div>
                                    <span style={{
                                        fontWeight: 'bold'
                                    }}>Capacity</span>: {this.props.room.capacity}
                                </div>
                                <div>
                                    <span style={{
                                        fontWeight: 'bold'
                                    }}>Times</span>: {this.props.room.times.open_time}-{this.props.room.times.close_time}
                                </div>
                                <div>
                                    <span style={{
                                        fontWeight: 'bold'
                                    }}>Room Type</span>: {this.props.room.type.toUpperCase()}
                                </div>
                                <div>
                                    <span style={{
                                        fontWeight: 'bold'
                                    }}>Available Tech</span>: {this.props.room.available_tech.join(" ")}
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                {reviews}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            <div className='center-card-bg' />
            <FontAwesomeIcon icon={faTimes} className='close-icon' onClick={this.props.onClose} />
            <FontAwesomeIcon icon={faChevronLeft} className='left-icon' onClick={this.props.onLeft} />
            <FontAwesomeIcon icon={faChevronRight} className='right-icon' onClick={this.props.onRight} />
        </React.Fragment>);
    }
}

class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            selectedIndex: -1,
            rooms: [{
                "id": 0,
                "name": "E128A",
                "location": "Paterno",
                "capacity": 4,
                "times": {
                    "open_time": "07:45",
                    "close_time": "12:00",
                    "days": [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu"
                    ]
                },
                "popular_times": [
                    {
                        "start_time": "10:00",
                        "end_time": "16:00"
                    },
                    {
                        "start_time": "18:00",
                        "end_time": "21:00"
                    }
                ],
                "type": "indoor",
                "available_tech": [
                    "Whiteboard",
                    "Projector",
                    "HDMI Cable"
                ],
                "space": "self",
                "description": "Library room",
                "food_available": false,
                "rating": 4,
                "reviews": [
                    "A really nice isolated self-working space for people requiring quietude",
                    "A well-lit room with good facilities"
                ],
                "images": [
                    "E128A_1.png",
                    "E128A_2.png",
                    "E128A_3.png"
                ],
                "latitude": 40.79839451403231,
                "longitude": -77.86572831321128
            },
            {
                "id": 1,
                "name": "E304",
                "location": "Paterno",
                "capacity": 16,
                "times": {
                    "open_time": "07:45",
                    "close_time": "12:00",
                    "days": [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu"
                    ]
                },
                "popular_times": [
                    {
                        "start_time": "10:00",
                        "end_time": "16:00"
                    },
                    {
                        "start_time": "17:00",
                        "end_time": "22:00"
                    }
                ],
                "type": "indoor",
                "available_tech": [
                    "TV",
                    "Whiteboard",
                    "Projector",
                    "Monitor",
                    "HDMI Cable"
                ],
                "space": "self",
                "description": "Library room",
                "food_available": false,
                "rating": 4.5,
                "reviews": [
                    "A large room good for a medium sized group of people"
                ],
                "images": [
                    "E304_1.png",
                    "E304_2.png",
                    "E304_3.png"
                ],
                "latitude": 40.79839451403231,
                "longitude": -77.86572831321128
            },
            {
                "id": 2,
                "name": "E307",
                "location": "Paterno",
                "capacity": 12,
                "times": {
                    "open_time": "07:45",
                    "close_time": "12:00",
                    "days": [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu"
                    ]
                },
                "popular_times": [
                    {
                        "start_time": "10:00",
                        "end_time": "16:00"
                    },
                    {
                        "start_time": "17:00",
                        "end_time": "22:00"
                    }
                ],
                "type": "indoor",
                "available_tech": [
                    "TV",
                    "Whiteboard",
                    "Projector",
                    "Monitor",
                    "HDMI Cable"
                ],
                "space": "self",
                "description": "Library room",
                "food_available": false,
                "rating": 4.5,
                "reviews": [
                    "Amazing place!"
                ],
                "images": [
                    "E307_1.png",
                    "E307_2.png",
                    "E307_3.png"
                ],
                "latitude": 40.79839451403231,
                "longitude": -77.86572831321128
            },
            {
                "id": 3,
                "name": "W024 - Collaboration Commons",
                "location": "Pattee",
                "capacity": 4,
                "times": {
                    "open_time": "07:45",
                    "close_time": "12:00",
                    "days": [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu"
                    ]
                },
                "popular_times": [
                    {
                        "start_time": "10:00",
                        "end_time": "16:00"
                    }
                ],
                "type": "indoor",
                "available_tech": [
                    "Whiteboard"
                ],
                "space": "collaborative",
                "description": "Library room",
                "food_available": false,
                "rating": 4,
                "reviews": [],
                "images": [
                    "W024_1.png",
                    "W024_2.png",
                    "W024_3.png"
                ],
                "latitude": 40.79823597312716,
                "longitude": -77.86589340022368
            },
            {
                "id": 4,
                "name": "W026 - Collaboration Commons Mini",
                "location": "Pattee",
                "capacity": 2,
                "times": {
                    "open_time": "07:45",
                    "close_time": "12:00",
                    "days": [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu"
                    ]
                },
                "popular_times": [],
                "type": "indoor",
                "available_tech": [
                    "Whiteboard"
                ],
                "space": "collaborative",
                "description": "Library room",
                "food_available": false,
                "rating": 3.5,
                "reviews": [],
                "images": [
                    "W026_1.png",
                    "W026_2.png",
                    "W026_3.png"
                ],
                "latitude": 40.79823597312716,
                "longitude": -77.86589340022368
            },

            ],
            buildingRoomMap: {}
        }


        for (const room of this.state.rooms) {
            if (!this.state.buildingRoomMap.hasOwnProperty(room.location)) {
                this.state.buildingRoomMap[room.location] = [];
            }

            this.state.buildingRoomMap[room.location].push(room);
        }

    }


    render() {
        const bldgs = []
        for (const [bldg, rooms] of Object.entries(this.state.buildingRoomMap)) {
            const roomDiv = [];
            for (let i = 0; i < rooms.length; i++) {
                const room = rooms[i]
                roomDiv.push(<div key={i} className='room-card' onClick={() => { this.setState({ selected: room, selectedIndex: i }) }}>
                    <img className="room-img" alt="building name" src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"></img>
                    <div className="">
                        {room.name}
                    </div>
                </div>)
            }
            bldgs.push(<div key={bldg} className='bldg-card'>
                <div >
                    <FontAwesomeIcon icon={faLocationDot} style={{
                        marginRight: '0.5em'
                    }} />
                    {bldg}
                </div>
                <div className='room-container'>
                    {roomDiv}
                </div>
            </div>)
        }
        return (
            <div>
                {bldgs}
                {this.state.selected && <CenterCard room={this.state.selected} onClose={() => { this.setState({ selected: null, selectedIndex: -1 }); }}
                    onRight={() => {
                        const bldg = this.state.selected.location;
                        if ((this.state.selectedIndex + 1) < this.state.buildingRoomMap[bldg].length) {
                            this.setState({
                                selected: this.state.buildingRoomMap[bldg][this.state.selectedIndex + 1],
                                selectedIndex: this.state.selectedIndex + 1
                            });

                        }
                    }}

                    onLeft={() => {
                        const bldg = this.state.selected.location;
                        if ((this.state.selectedIndex - 1) >= 0) {
                            this.setState({
                                selected: this.state.buildingRoomMap[bldg][this.state.selectedIndex - 1],
                                selectedIndex: this.state.selectedIndex - 1
                            });
                        }
                    }} />}


            </div >

        );
    }
}

export default ListView;