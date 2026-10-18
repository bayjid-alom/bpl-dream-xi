import React from 'react';
import dollerImage from '../../assets/doller.png'
import logo from '../../assets/logo.png'
import Link from './Link';


const navLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Fixtures', path: '/fixtures' },
    { id: 3, name: 'Teams', path: '/teams' },
    { id: 4, name: 'Schedule', path: '/schedule' },
    { id: 5, name: 'Standings', path: '/standings' },
];

const Navbar = ({ coin }) => {

    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)
    return (

        <header className="w-full bg-base-100 border-b border-base-300 sticky top-0 z-50">
            <div className="navbar w-[96%] md:w-[85%] mx-auto  py-2 md:py-4 px-0">

                {/* Logo - Left */}
                <div className="flex-1">
                    <img
                        className="w-14 h-14 object-contain"
                        src={logo}
                        alt="Logo"
                    />
                </div>


                {/* Navigation - Right */}
                <ul className="hidden md:flex items-center gap-2 mr-6">
                    {links}
                </ul>

                {/* Coins - Right */}
                <div className="flex-none">
                    <button className="btn btn-outline border-base-300 rounded-full px-4 gap-2">
                        <span className="font-bold">{coin}</span>
                        <span>Coins</span>
                        <img className="w-6 h-6 object-contain" src={dollerImage} alt="Coin" />
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;