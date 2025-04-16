import React from 'react';
import { Assets } from '../assets/Assets';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={Assets.home_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-12">
    {/* Optional left div */}
    <div className="lg:block w-1/4"></div>

    {/* Centered text block */}
    <div className="w-full lg:w-1/2 text-black text-center p-6 hover:text-white">
      <p className="text-5xl md:text-8xl font-medium font-merriweather italic mb-6">
        FinWin – Smart Money, Safer Future.
      </p>
      <p className="text-4xl mb-4 font-medium">
        Track. Invest. Save. Stay Shielded.
      </p>
      <p className="text-2xl font-medium">
        Take control of your finances with FinWin – from budgeting and investing to emergency shields and fun challenges, your money’s new best friend is here!
      </p>
    </div>

    {/* Optional right div */}
    <div className=" lg:block w-1/4"></div>
  </div>
    </div>
  );
};

export default Home;
