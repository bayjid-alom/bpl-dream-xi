import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedCard = ({ selectedPlayer, selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayer);  // Object from  selectedPlayers.jsx
    // console.log(selectedPlayers); // [{...}] for only filtered


    const handleDeleteSelectedPlayer = () => {
        const filteredPlayers = selectedPlayers.filter(player => player.playerName !== selectedPlayer.playerName)
        setCoin(coin + selectedPlayer.price)
        setSelectedPlayers(filteredPlayers)
        toast.success(`${selectedPlayer.playerName} removed from the selected players!`);
    }



    return (

        <div className="selected-card w-full flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:border-orange-400 hover:shadow-md">

            {/* Left Side */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">

                <div className="shrink-0">
                    <img
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-xl border border-slate-200"
                        src={selectedPlayer.playerImg}
                        alt={selectedPlayer.playerName}
                    />
                </div>

                <div className="min-w-0 space-y-1.5 sm:space-y-2">
                    <h3 className="flex items-center gap-2 text-slate-800 font-semibold text-sm sm:text-base md:text-lg">
                        <FaUser className="text-slate-500 shrink-0 text-xs sm:text-sm" />
                        <span className="truncate">
                            {selectedPlayer.playerName}
                        </span>
                    </h3>

                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {selectedPlayer.battingStyle}
                    </p>


                </div>
            </div>

            {/* Right Side */}
            <div className="shrink-0">
                <button onClick={() => handleDeleteSelectedPlayer()}
                    className="btn btn-square btn-ghost btn-sm sm:btn-md text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors duration-300"
                    title="Remove player"
                >
                    <MdDelete className="text-lg sm:text-2xl" />
                </button>
            </div>

        </div>
    );
};

export default SelectedCard;

// 10m part - 7

