import React from 'react';
import logoFooter from '../../assets/logo-footer.png'

const Footer = () => {

    return (
        <footer className="relative z-10 w-full mx-auto border-x-2 border-b-2 border-white/80 bg-[#050817] pt-32 pb-5">

            <div className="w-[90%] md:w-[85%] mx-auto">

                {/* Footer Logo */}
                <div className="flex justify-center mb-8">
                    <img
                        src={logoFooter}
                        alt="Cricket Logo"
                        className="w-20 md:w-24 object-contain"
                    />
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-2">

                    {/* About Us */}
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-bold text-white mb-3">
                            About Us
                        </h3>

                        <p className="max-w-52 mx-auto md:mx-0 text-xs leading-relaxed text-gray-400">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-bold text-white mb-3">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-xs text-gray-400">
                            <li>
                                <a href="/" className="hover:text-yellow-400 transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-yellow-400 transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-yellow-400 transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>



                    {/* Subscribe */}
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-bold text-white mb-2">
                            Subscribe
                        </h3>

                        <p className="max-w-56 mx-auto md:mx-0 text-xs leading-relaxed text-gray-400 mb-3">
                            Subscribe to our newsletter for the latest updates.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center w-full max-w-64 mx-auto md:mx-0 overflow-hidden rounded-lg bg-white"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full min-w-0 h-10 px-4 text-xs text-gray-700 outline-none"
                            />

                            <button
                                type="submit"
                                className="h-10 shrink-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 px-4 text-xs font-bold text-black transition-all hover:brightness-105"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-white/10 pt-5 text-center">
                <p className="text-[11px] text-gray-400">
                    ©2024 Your Company All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
