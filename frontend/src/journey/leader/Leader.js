import React, { Component } from 'react';
import './Leader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

class Leader extends React.Component {
    base_url = "https://cse543-web-security.aplayerscreed.com/backend/";

    constructor(props) {
        super(props);
        this.state = {arrUsers: []};
    };

    refreshArr = () => {
        var arrUsers = [];
        var inputObj = {"id":0};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },
            body: JSON.stringify(inputObj),
            mode: 'cors'
          };
        
          fetch(this.base_url + "user/leaderboard", requestOptions)
            .then(response => response.json())
            .then((actualData) => {
              console.log("User data :- "  + JSON.stringify(actualData));
              for(var i=0; i< actualData.length; i++)
                {
                    arrUsers.push({"rank": i+1, "username":actualData[i].name, "stars":actualData[i].stars, "league":actualData[i].badge});
                }
            this.setState({arrUsers: arrUsers});
            })
            .catch((err) => {
              console.log(err.message);
              });

        console.log(arrUsers);
    }

    TableFunc = () => {

        // var arrUsers = [{
        //                     "rank" : 1,
        //                     "username" : "Goutham AG",
        //                     "stars" : 1500,
        //                     "league" : "Gold"
        //                 },{
        //                     "rank" : 1,
        //                     "username" : "Goutham AG",
        //                     "stars" : 1500,
        //                     "league" : "Gold"
        //                 },{
        //                     "rank" : 1,
        //                     "username" : "Goutham AG",
        //                     "stars" : 1500,
        //                     "league" : "Gold"
        //                 },{
        //                     "rank" : 1,
        //                     "username" : "Goutham AG",
        //                     "stars" : 1500,
        //                     "league" : "Gold"
        //                 },{
        //                     "rank" : 1,
        //                     "username" : "Goutham AG",
        //                     "stars" : 1500,
        //                     "league" : "Gold"
        //                 }
        //             ];
        if(this.state.arrUsers.length === 0){
            this.refreshArr();
        }
        return(<table>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Stars</th>
              <th>League</th>
            </tr>
            {this.state.arrUsers.map((item) => {
              return (
                <tr key={item} className='rows'>
                  <td className='cols'>{item.rank}</td>
                  <td className='cols'>{item.username}</td>
                  <td className='cols'>{item.stars}</td>
                  <td className='cols'>{item.league}</td>
                </tr>
              )
            })}
          </table>)

    }
   
    render (){
        var boardTable = this.TableFunc();

        return( <div><div className='important-text'>
                    Leaderboard
                </div>
                <div className='board-section'>
                    {boardTable}
                </div></div>
                );
    };
};

export default Leader;