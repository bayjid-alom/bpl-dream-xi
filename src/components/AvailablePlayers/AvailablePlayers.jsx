import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from '../UI/Card';

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    // console.log(players);  // [{...}, {...}]


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    players.map(player => {
                        return <Card
                            player={player}
                            key={player.playerName}
                            coin={coin}
                            setCoin={setCoin}
                            selectedPlayers={selectedPlayers}
                            setSelectedPlayers={setSelectedPlayers}
                        >

                        </Card>
                    })
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;