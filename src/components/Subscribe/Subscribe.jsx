
import React from 'react';

const Subscribe = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
    };

    return (
        <section className="relative z-20 -mb-24 w-[96%] md:w-[85%] mx-auto">

            {/* Outer Glass Border */}
            <div className="rounded-t-2xl md:rounded-t-2xl rounded-b-xl border border-white/80 bg-white/10 p-[10px] md:p-[15px]">

                {/* Newsletter Card */}
                <div className="relative overflow-hidden rounded-xl bg-white px-5 py-10 md:py-16 text-center">

                    {/* Figma-style Gradient Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.38),transparent_38%),radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.38),transparent_38%)]"></div>

                    {/* Soft White Overlay */}
                    <div className="absolute inset-0 bg-white/25"></div>

                    {/* Content */}
                    <div className="relative z-10">

                        <h2 className="text-xl md:text-2xl font-extrabold text-[#171717]">
                            Subscribe to our Newsletter
                        </h2>

                        <p className="mt-2 text-xs md:text-sm text-gray-600">
                            Get the latest updates and news right in your inbox!
                        </p>

                        <form
                            onSubmit={handleSubscribe}
                            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full sm:w-52 md:w-64 h-10 rounded-lg border border-gray-200 bg-white/90 px-4 text-xs text-gray-700 outline-none placeholder:text-gray-400 focus:border-orange-300 transition-colors"
                            />

                            <button
                                type="submit"
                                className="h-10 rounded-lg bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 px-5 text-xs font-bold text-black transition-all duration-300 hover:brightness-105"
                            >
                                Subscribe
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
