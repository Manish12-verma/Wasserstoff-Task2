import React from "react";
import { assets } from "../assets/images/assets";

const TicketGenerated = ({ photo, fullName, email, github }) => {
  
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-no-repeat text-white flex flex-col items-center justify-center px-4 py-6">

      <div className="relative z-10 w-full max-w-4xl px-4">
        <header className="flex flex-col items-center mb-20 text-center">
          <img src={assets.logo} alt="logo" className="w-32 md:w-40 mb-6" />
          <h1 className="font-bold text-2xl md:text-3xl leading-snug">
            Congrats,
            <span className="bg-gradient-to-r from-orange-400 to-neutral-300 bg-clip-text text-transparent ml-1">
              {fullName}
            </span>
            !<br />
            Your ticket is ready.
            <br />
            <span className="inline-block text-sm font-medium text-neutral-300 mt-4">
              We've emailed your ticket to
              <span className="text-orange-500 font-semibold ml-1">
                {email}
              </span>
              and will send updates in the run-up to the event.
            </span>
          </h1>
        </header>

      
        <img
          src={assets.pattTicket}
          alt="Ticket Decoration Overlay"
          className="absolute inset-0 object-contain opacity-70 z-10 pointer-events-none rounded-xl w-full h-full scale-75 mt-30"
        />

        <div className="relative z-40 bg-no-repeat bg-center aspect-[28/9] max-w-[700px] mx-auto p-6 md:p-8 rounded-xl text-white">
      
     
          <div className="relative z-20">
            
           
            <div className="mb-2 text-xl md:text-3xl font-bold flex items-center gap-4">
              <img src={assets.logoMark} alt="Coding" className="w-8 md:w-10 sm:ml-17" />
              <span className="text-lg md:text-xl  sm:text-xl">Coding Conf</span>
            </div>

          
            <p className="text-neutral-300 pl-10 md:pl-14 mb-8 md:mb-12 text-sm md:text-base sm:text-xs ml-19">
              Jan 31, 2025  |   Austin, TX
            </p>

        
            <div className="flex flex-col pt-6 md:pt-10">
              <div className="flex items-center gap-4 md:gap-6 flex-wrap sm:">
                <img
                  className="w-20 h-20 md:w-24 md:h-24 rounded sm:ml-17 mb-1"
                  src={photo}
                  alt="User avatar"
                />
                <div className="text-xl md:text-3xl font-semibold">
                  <span>{fullName}</span>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={assets.iconGithub} alt="GitHub" className="w-4 md:w-5" />
                    <span className="text-sm font-light text-neutral-300">
                      {github}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="absolute text-neutral-300  ml-30 md:text-2xl right-4 top-1/2 transform -translate-y-1/2 rotate-90 sm:absolute text-xl pr-14 mt-8">
              #01609
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TicketGenerated;
