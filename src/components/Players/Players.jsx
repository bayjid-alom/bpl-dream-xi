import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {
    const players = use(playersPromise)
    // console.log(players);  // array of objects [{...}, {...}]

    const [selectedType, setSelectedType] = useState("available")


    return (

        <section className='players-container w-[95%] md:w-[85%]  mx-auto md:my-20 my-12 '>

            <div className='flex justify-between items-center my-6 mx-4'>
                {/* <h2 className=' text-xl font-bold'>Available Player</h2> */}

                {selectedType === "available" ? <h2 className=' text-xl font-bold'>Available Players</h2> : <h2 className=' text-xl font-bold'>Selected Players</h2>}

                <div>
                    <button onClick={() => setSelectedType("available")} className={`btn border-none text-black rounded-r-none
                     ${selectedType === "available" ? "bg-[#E7FE29]" : ""}`}>Available</button>

                    <button onClick={() => setSelectedType("selected")} className={`btn border-none
                     ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none`}>Selected (0)</button>
                </div>
            </div>

            {/* <AvailablePlayers players={players}></AvailablePlayers> */}
            {selectedType === "available" ?
                <AvailablePlayers players={players}></AvailablePlayers> :
                <SelectedPlayers></SelectedPlayers>
            }

        </section>
    );
};

export default Players;