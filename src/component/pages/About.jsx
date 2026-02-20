import React from "react";
import Who_we_are from "../Who_we_are";
import timage from "../../assets/timage.jpg";

export default function About() {
    return(
        // Add first only div if add multiple sections
        <div>   
            <section className="min-h-[50vh] pt-40 pb-40"
            style={{
                backgroundImage:`linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), 
                url(${timage})`,
                backgroundSize:"Cover",
                backgroundPosition:'Center'
            }}
            >
                <div className=" text-center mb-4 drop-shadow-lg text-white">
                    
                    <h2 className="text-5xl text-center font-bold text-white mt-10 mb-10">
                        About <span className="text-orange-400">Us </span>
                    </h2>
                    <p className="text-white mx-auto md:text-[3vh] text-center px-8 max-w-4xl mb-10 ">The Tech Chronicles is a technology-focused platform dedicated to sharing clear, practical, and insightful content about programming, software development, and emerging digital trends.</p>
                </div>

            </section>

            {/* Second section */}

            <section className="grid md:grid-cols-2 gap-14 px-10 max-w-6xl mx-auto">
                <img src={timage} alt="About" className="w-full object-cover" />
                <div>
                    <h2 className="text-3xl font-bold text-black mt-20">About 
                        <span className="block text-orange-400">Tech Chronicles</span>
                    </h2>
                    <div className="space-y-3 md:text-[3vh] mb-30">
                        <p className="text-black mb-6">With a decade of experience across the digital and IT landscape, The Tech Chronicles has evolved into a trusted space for thoughtful, high-quality technology insights.</p>
                        <p className="text-black">✓ High-quality technology insights</p>
                        <p className="text-black">✓ Expert programming tutorials</p>
                        <p className="text-black ">✓ Modern development practices</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
