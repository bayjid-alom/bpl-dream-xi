
import React from 'react';

const Subscribe = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
    };

    return (
        <section className="relative z-20 -mb-24 w-[96%] md:w-[85%] mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white px-5 py-10 md:py-11 text-center shadow-sm">

                {/* Background Gradient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.35),transparent_40%),radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.35),transparent_40%)]"></div>

                {/* Subscribe Content */}
                <div className="relative z-10">
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
                        Subscribe to our Newsletter
                    </h2>

                    <p className="mt-2 text-xs md:text-sm text-slate-600">
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
                            className="w-full sm:w-64 h-10 rounded-lg border border-slate-200 bg-white px-4 text-xs outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
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
        </section>
    );
};

export default Subscribe;
