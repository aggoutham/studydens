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
                <img src={"https://cse543-web-security.aplayerscreed.com/backend/images/" + this.props.room.images[this.props.room.images.length > 1 ? 1 : 0]} alt="" className="center-img" />
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
        this.buildingRoomMap = {}
        this.state = {
            selected: false,
            selectedIndex: -1,
        }

        // for (const room of this.props.rooms) {
        //     if (!this.buildingRoomMap.hasOwnProperty(room.location)) {
        //         this.buildingRoomMap[room.location] = [];
        //     }

        //     this.buildingRoomMap[room.location].push(room);
        // }

    }

    render() {

        this.buildingRoomMap = {};
        for (const room of this.props.rooms) {
            if (!this.buildingRoomMap.hasOwnProperty(room.location)) {
                this.buildingRoomMap[room.location] = [];
            }

            this.buildingRoomMap[room.location].push(room);
        }

        const bldgs = []
        for (const [bldg, rooms] of Object.entries(this.buildingRoomMap)) {
            const roomDiv = [];
            for (let i = 0; i < rooms.length; i++) {
                const room = rooms[i]
                console.log(room)
                roomDiv.push(<div key={i} className='room-card' onClick={() => { this.setState({ selected: room, selectedIndex: i }) }}>
                    <img className="room-img" alt="building image" src={"https://cse543-web-security.aplayerscreed.com/backend/images/" + room["images"][0]}></img>
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
                        if ((this.state.selectedIndex + 1) < this.buildingRoomMap[bldg].length) {
                            this.setState({
                                selected: this.buildingRoomMap[bldg][this.state.selectedIndex + 1],
                                selectedIndex: this.state.selectedIndex + 1
                            });

                        }
                    }}

                    onLeft={() => {
                        const bldg = this.state.selected.location;
                        if ((this.state.selectedIndex - 1) >= 0) {
                            this.setState({
                                selected: this.buildingRoomMap[bldg][this.state.selectedIndex - 1],
                                selectedIndex: this.state.selectedIndex - 1
                            });
                        }
                    }} />}


            </div >

        );
    }
}

export default ListView;