import React from "react";
import { assets } from "../assets/images/assets";

const TicketGenerated = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    github: "@johndoe",
    avatar: assets.imageAvatar,
  };

  return (
    <div
      className="relative min-h-screen w-full bg-blue-900 bg-cover bg-no-repeat text-white flex flex-col items-center justify-center px-2 py-4"
      style={{ backgroundImage: `url(${assets.bgDesktop})` }}
    >
      {/* Decorative Background Elements */}
      <img
        src={assets.patternLines}
        alt="Pattern"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
      />
      <img
        src={assets.patternSquigglyLineTop}
        alt="Pattern"
        className="absolute top-10 right-0 transform -translate-x-1/2 opacity-90 z-0"
      />
      <img
        src={assets.patternSquigglyLineBottom}
        alt="Pattern"
        className="absolute w-200 bottom-0 left-0 opacity-70 z-0"
      />
      <img
        src={assets.patternCircle}
        alt="Circle"
        className="absolute -top-16 left-16 w-48 opacity-80 z-0"
      />
      <img
        src={assets.patternCircle}
        alt="Circle"
        className="absolute top-4/6 right-16 transform -translate-y-1/2 w-48 opacity-80 z-0 mr-40"
      />

      {/* Ticket Content */}
      <div className="z-10 w-full max-w-4xl p-4 text-white">
        <header className="flex flex-col items-center mb-[4.5rem]">
          <img src={assets.logo} alt="logo" className="w-40 mb-6" />
          <h1 className="text-center font-bold text-[1.8rem]">
            Congrats,
            <span className="bg-gradient-to-r from-orange-400 to-neutral-300 bg-clip-text text-transparent ml-1">
              {user.name}
            </span>
            !<br />
            Your ticket is ready.
            <br />
            <span className="inline-block text-sm font-medium text-neutral-300 mt-4">
              We've emailed your ticket to
              <span className="text-orange-500 font-semibold ml-1">
                {user.email}
              </span>
              and will send updates in the run-up to the event.
            </span>
          </h1>
        </header>
      <div>
        
      </div>
       <div
  className="relative z-40 bg-no-repeat bg-center aspect-[28/9] max-w-[700px] mx-auto p-8 rounded-xl text-white"

>
  {/* Foreground overlay image */}
  <img
    src={assets.pattTicket}
    alt="Ticket Decoration Overlay"
    className="absolute inset-0 w-full h-full object-cover opacity-80 z-10 pointer-events-none rounded-xl"
  />

  {/* Ticket Content */}
  <div className="relative z-20">
    {/* Logo and Event Name */}
    <div className="mb-2 text-3xl font-bold flex items-center gap-4">
      <img src={assets.logoMark} alt="Coding" className="w-10" />
      <span className="text-xl">Coding Conf</span>
    </div>

    {/* Event Info */}
    <p className="text-neutral-300 pl-14 mb-12">Jan 31, 2025 / Austin, TX</p>

    {/* User Info */}
    <div className="flex items-center gap-6 mt-4">
      <img className="w-24 h-24 rounded" src={user.avatar} alt="User avatar" />
      <div className="text-3xl font-semibold">
        <span>{user.name}</span>
        <div className="flex items-center gap-2 mt-2">
          <img src={assets.iconGithub} alt="GitHub" className="w-5" />
          <span className="text-sm font-light text-neutral-300">
            {user.github}
          </span>
        </div>
      </div>
    </div>

    {/* Ticket Number */}
    <p className="absolute text-neutral-300 text-2xl right-4 top-1/2 transform -translate-y-1/2 rotate-90">
      #01609
    </p>
  </div>
</div>


      </div>
    </div>
  );
};

export default TicketGenerated;
