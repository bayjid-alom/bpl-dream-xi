import React from 'react';
import bannerLogo from '../../assets/banner-main.png';
import bgShadow from '../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <section className="w-[96%] md:w-[85%]  mx-auto mt-5 mb-10 mb:20">
            <div
                className="relative overflow-hidden rounded-2xl border border-white/10
                bg-[#111111] px-5 py-10 md:py-24 text-center"
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

                {/* Banner Content */}
                <div className="relative z-10 flex flex-col items-center">
                    <img
                        src={bannerLogo}
                        alt="Cricket"
                        className="w-36 md:w-40 object-contain mb-6"
                    />

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h2>

                    <p className="mt-3 text-sm md:text-base text-gray-300">
                        Beyond Boundaries Beyond Limits
                    </p>

                    <button className="mt-5 btn rounded-md border-2 border-black outline outline-1 outline-[#E7FE29] outline-offset-2 bg-[#E7FE29] px-5 text-sm font-bold text-black hover:bg-[#d6ef18]">
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
