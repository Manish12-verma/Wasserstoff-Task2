import React, { useState } from 'react';

import { assets } from '../assets/images/assets';

const Register = () => {
  const [imageSelected, setImageSelected] = useState(false);
  const handleFileChange = () => setImageSelected(true);
  const handleDelete = () => setImageSelected(false);

  // Replace this with your actual background URL

  return (
    <>
     <div className="relative min-h-screen w-full bg-bg-blue-900 bg-cover bg-no-repeat text-white overflow-hidden flex flex-col items-center px-4 py-8" style={{backgroundImage: `url(${assets.bgDesktop})`}}>


        {/* Decorative Patterns and Logo */}
{/* Decorative Background Patterns */}
<img
  src={assets.patternLines}
  alt="Pattern Lines"
  className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
/>

<img
  src={assets.patternSquigglyLineTop}
  alt="Pattern Top"
  className="absolute top-10 right-0 transform -translate-x-1/2  opacity-90 z-0"
/>

<img
  src={assets.patternSquigglyLineBottom}
  alt="Pattern Bottom"
  className="absolute bottom-0 left-0  opacity-70 z-0"
/>

<img
  src={assets.patternCircle}
  alt="Circle TL"
  className="absolute -top-16 left-16 w-48 opacity-80 z-0"
/>

<img
  src={assets.patternCircle}
  alt="Circle CR"
  className="absolute top-1/2 right-16 transform -translate-y-1/2 w-48 opacity-80 z-0 mr-40"
/>

        {/* Form Section */}
        <div className="z-7  max-w-2xl w-full bg-opacity-10 rounded-2xl p-4 text-white " >
          <div className="text-center mb-8">
            <img src={assets.logo} alt="logo" className="mx-auto w-40 mb-4 " />
            <h1 className="text-3xl font-bold">Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-sm text-gray-200 mt-2">Secure your spot at next year's biggest coding conference.</p>
          </div>

          {/* Avatar Upload */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Upload Avatar</h3>
            <div className="border border-dashed border-gray-400 p-6 rounded-lg text-center">
              <input
                type="file"
                id="fileUploader"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="fileUploader" className="cursor-pointer flex flex-col items-center gap-2">
                <img src={assets.iconUpload} alt="Upload Icon" className="w-10 h-10" />
                <span>Drag and drop or click to upload</span>
              </label>

              {imageSelected && (
                <div className="mt-4 flex gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded" type="button">
                    Change
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded" type="button" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
              <img src={assets.iconInfo} alt="info" className="w-4 h-4" />
              Upload your photo (JPG or PNG, max size: 500KB).
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
               className="text-neutral-300 rounded-[10px] p-[15px] bg-[rgba(75,72,106,0.25)] outline outline-[rgba(135,132,164,0.4)] w-full"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="emailAddress" className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                id="emailAddress"
                className="text-neutral-300 rounded-[10px] p-[15px] bg-[rgba(75,72,106,0.25)] outline outline-[rgba(135,132,164,0.4)] w-full"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="gitUserName" className="block font-medium mb-1">GitHub Username</label>
              <input
                type="text"
                id="gitUserName"
               className="text-neutral-300 rounded-[10px] p-[15px] bg-[rgba(75,72,106,0.25)] outline outline-[rgba(135,132,164,0.4)] w-full"
                placeholder="@yourusername"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-8">
            <button className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg w-full">
              Generate My Ticket
            </button>
          </div>
        </div>
      </div>

  
    </>
  );
};

export default Register;
