import React, { Component } from 'react';
import './Leader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

class Leader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    TableFunc = () => {

        var arrUsers = [{
                            "rank" : 1,
                            "username" : "Goutham AG",
                            "stars" : 1500,
                            "league" : "Gold"
                        },{
                            "rank" : 1,
                            "username" : "Goutham AG",
                            "stars" : 1500,
                            "league" : "Gold"
                        },{
                            "rank" : 1,
                            "username" : "Goutham AG",
                            "stars" : 1500,
                            "league" : "Gold"
                        },{
                            "rank" : 1,
                            "username" : "Goutham AG",
                            "stars" : 1500,
                            "league" : "Gold"
                        },{
                            "rank" : 1,
                            "username" : "Goutham AG",
                            "stars" : 1500,
                            "league" : "Gold"
                        }
                    ];
        
        return(<table>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Stars</th>
              <th>League</th>
            </tr>
            {arrUsers.map((item) => {
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