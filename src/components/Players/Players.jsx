import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, coin, setCoin }) => {
    const players = use(playersPromise)
    // console.log(players);  // array of objects [{...}, {...}]

    const [selectedType, setSelectedType] = useState("available")
    // Render an array
    const [selectedPlayers, setSelectedPlayers] = useState([])


    return (

        <section className='players-container w-[95%] md:w-[85%]  mx-auto md:my-20 my-12 '>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 my-6 mx-3 sm:mx-4">

                {/* Heading */}
                <div>
                    {selectedType === "available" ? (
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                            Available Players
                        </h2>
                    ) : (
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                            Selected Players ({selectedPlayers.length}/{players.length})
                        </h2>
                    )}
                </div>

                {/* Toggle Buttons */}
                <div className="buttons-div flex w-full sm:w-auto shrink-0">
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn flex-1 sm:flex-none rounded-r-none border border-slate-200 text-sm sm:text-base ${selectedType === "available"
                            ? "bg-[#E7FE29] text-black"
                            : "bg-white text-slate-600"
                            }`}
                    >
                        Available ({players.length})
                    </button>

                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn flex-1 sm:flex-none rounded-l-none border border-slate-200 text-sm sm:text-base ${selectedType === "selected"
                            ? "bg-[#E7FE29] text-black"
                            : "bg-white text-slate-600"
                            }`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>

            </div>






            {/* <AvailablePlayers players={players}></AvailablePlayers> */}
            {selectedType === "available" ?
                <AvailablePlayers
                    players={players}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                >
                </AvailablePlayers> :
                <SelectedPlayers
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                ></SelectedPlayers>
            }

        </section>
    );
};

export default Players;