import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({ player }) => {

    return (
        <div className="card group w-full md:w-11/12 mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl">

            <figure className="relative overflow-hidden">
                <img
                    className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={player.playerImg}
                    alt={player.playerName}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <span className="absolute top-3 right-3 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                    {player.playerType}
                </span>

                <h2 className="absolute bottom-3 left-4 flex items-center gap-2 text-lg font-bold text-white">
                    <FaUser className="text-amber-400" />
                    {player.playerName}
                </h2>
            </figure>

            <div className="card-body gap-4 p-5">

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <FaFlag className="text-amber-600" />
                        <p>{player.playerCountry}</p>
                    </div>

                    <span className="rounded-lg bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">
                        ★ {player.rating}
                    </span>
                </div>

                <div className="divider my-0 before:bg-slate-200 after:bg-slate-200"></div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <p className="mb-1 text-xs text-slate-500">Batting Style</p>
                        <p className="text-sm font-semibold text-slate-800">{player.battingStyle}</p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <p className="mb-1 text-xs text-slate-500">Bowling Style</p>
                        <p className="text-sm font-semibold text-slate-800">{player.bowlingStyle}</p>
                    </div>
                </div>

                <div className="card-actions mt-1 items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-500">Player Price</p>
                        <p className="text-xl font-extrabold text-slate-800">
                            ${player.price}
                        </p>
                    </div>

                    <button className="btn border-amber-500 bg-amber-400 text-slate-900 shadow-sm transition-colors duration-300 hover:border-amber-600 hover:bg-amber-500">
                        Choose Player
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;