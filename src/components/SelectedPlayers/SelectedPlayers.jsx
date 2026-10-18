import React from 'react';
import SelectedCard from '../UI/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayers);  // Array >> added after selected


    return (
        <div>

            <div className='flex flex-col space-y-5'>

                {/* Empty Message (Inside container)*/}

                {selectedPlayers.length === 0 && (
                    <div className="text-center py-10 md:py-17 px-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-orange-50/50 shadow-sm transition-all duration-300">
                        <h3 className="text-lg font-bold text-slate-800">No Players Selected Yet</h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">Go to the <span className="font-semibold text-orange-500">Available</span> tab to select your favorite players and build your dream team.</p>
                    </div>
                )}




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