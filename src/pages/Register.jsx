import React, { useState } from "react";
import { assets } from "../assets/images/assets";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  
  const [imageSelected, setImageSelected] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gitUserName, setGitUserName] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = () => setImageSelected(true);
  const handleDelete = () => setImageSelected(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageSelected || !fullName || !email || !gitUserName) {
      setError("Please fill out all fields and upload an avatar.");
      return;
    }

    // Clear any previous error
    setError("");

    // Proceed to next page
    navigate("/ticket");
  };

  return (
    <div
      className="relative min-h-screen w-full bg-blue-900 bg-cover bg-no-repeat text-white flex flex-col items-center justify-center px-2 py-4"
      style={{ backgroundImage: `url(${assets.bgDesktop})` }}
    >
      {/* Decorative Images */}
      <img src={assets.patternLines} alt="Pattern" className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0" />
      <img src={assets.patternSquigglyLineTop} alt="Pattern" className="absolute top-10 right-0 transform -translate-x-1/2 opacity-90 z-0" />
      <img src={assets.patternSquigglyLineBottom} alt="Pattern" className="absolute w-200 bottom-0 left-0 opacity-70 z-0" />
      <img src={assets.patternCircle} alt="Circle" className="absolute -top-16 left-16 w-48 opacity-80 z-0" />
      <img src={assets.patternCircle} alt="Circle" className="absolute top-4/6 right-16 transform -translate-y-1/2 w-48 opacity-80 z-0 mr-40" />

      {/* Form Section */}
      <div className="z-10 w-full max-w-md bg-opacity-100 rounded-xl p-4 text-white mt-0">
        <div className="text-center mb-6">
          <img src={assets.logo} alt="logo" className="mx-auto w-38 mb-3" />
          <h1 className="text-2xl font-bold">Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p className="text-xs text-gray-400 mt-3 font-bold">Secure your spot at next year's biggest coding conference.</p>
        </div>

        {/* Avatar Upload */}
        <div className="mb-5">
          <h3 className="text-base font-semibold mb-2">Upload Avatar</h3>
          <div className="border border-dashed border-gray-400 p-4 rounded-lg text-center">
            <input type="file" id="fileUploader" className="hidden" onChange={handleFileChange} />
            <label htmlFor="fileUploader" className="cursor-pointer flex flex-col items-center gap-2">
              <img src={assets.iconUpload} alt="Upload Icon" className="w-8 h-8" />
              <span className="text-sm">Click to upload</span>
            </label>

            {imageSelected && (
              <div className="mt-3 flex gap-3 justify-center">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm" type="button">Change</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-sm" type="button" onClick={handleDelete}>Delete</button>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-300 mt-2 flex items-center gap-2">
            <img src={assets.iconInfo} alt="info" className="w-4 h-4" />
            Upload a JPG or PNG (Max size: 500KB)
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block font-medium mb-1 text-sm">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-neutral-300 text-sm rounded-md p-3 bg-[rgba(75,72,106,0.25)] outline outline-[rgba(135,132,164,0.4)] w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block font-medium mb-1 text-sm">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-neutral-300 text-sm rounded-md p-3 bg-[rgba(75,72,106,0.25)] outline outline-[rgba(135,132,164,0.4)] w-full"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="gitUserName" className="block font-medium mb-1 text-sm">GitHub Username</label>
            <input
              type="text"
              id="gitUserName"
              value={gitUserName}
              onChange={(e) => setGitUserName(e.target.value)}
              className="text-neutral-300 text-sm rounded-md p-3 bg-[rgba(75,72,106,0.25)] outline outline-[rgba(135,132,164,0.4)] w-full"
              placeholder="Enter your GitHub username"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-400 text-sm mt-3 text-center">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button className="bg-orange-700 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-base w-full" onClick={handleSubmit}>
            Generate My Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
