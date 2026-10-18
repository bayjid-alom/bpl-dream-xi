import React from 'react';
import SelectedCard from '../UI/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayers);  // Array >> added after selected


    return (
        <div>

            <div className='flex flex-col space-y-5'>

                {
                    selectedPlayers.map(selectedPlayer => {
                        return <SelectedCard
                            key={selectedPlayer.playerName}
                            selectedPlayer={selectedPlayer}
                            selectedPlayers={selectedPlayers}
                            setSelectedPlayers={setSelectedPlayers}
                            coin={coin}
                            setCoin={setCoin}
                        >
                        </SelectedCard>
                    })
                }
            </div>


        </div>
    );
};

export default SelectedPlayers;