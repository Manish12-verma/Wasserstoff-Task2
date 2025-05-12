import React, { useRef, useState } from "react";
import { assets } from "../assets/images/assets";
import TicketGenerated from "./TicketGenerated";

const Register = () => {

  const [photo, setPhoto] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGitHub] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);
  

  const isValidEmail = (email)=> {
    if (!email.includes('@')) return false;
    const [local, domain] = email.split('@');
    if (!local.trim() || !domain.trim()) return false;
    const domainParts = domain.split('.');
    return domainParts.length >= 2 && domainParts.at(-1).length >= 2;
  };
 
  const isValidGitHubUsername = (username) => {
    return username.startsWith('@') && !username.includes(' ');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      setErrors((prev) => ({ ...prev, photo: 'Image is too big.' }));
      setPhoto(null);
      return;
    }

    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setErrors((prev) => ({ ...prev, photo: 'Invalid file extension.' }));
      setPhoto(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setPhoto(e.target.result);
      setErrors((prev) => ({ ...prev, photo: null }));
    };
    reader.readAsDataURL(file);
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!photo) newErrors.photo = 'Upload your photo.';
    if (!fullName.trim()) newErrors.fullName = 'Enter your name.';
    if (!email.trim()) newErrors.email = 'Enter your email.';
    else if (!isValidEmail(email)) newErrors.email = 'Enter a valid email address.';
    if (!github.trim()) newErrors.github = 'Enter your GitHub.';
    else if (!isValidGitHubUsername(github)) newErrors.github = 'Enter a valid GitHub username (eg. @username)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      setSubmitted(true);
    }
  };

  const handleDeleteImage = () => {
    setPhoto(null);
    fileInputRef.current.value = '';
  };

  return (
    <div
      className="relative min-h-screen w-full bg-blue-900 bg-cover bg-no-repeat text-white flex flex-col items-center justify-center px-2 py-4"
      style={{ backgroundImage: `url(${assets.bgDesktop})` }}
    >
      
      <img src={assets.patternLines} alt="Pattern" className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0" />
      <img src={assets.patternSquigglyLineTop} alt="Pattern" className="absolute top-10 right-0 transform -translate-x-1/2 opacity-90 z-0" />
      <img src={assets.patternSquigglyLineBottom} alt="Pattern" className="absolute w-120 bottom-0 left-0 opacity-70 z-0 " />
      <img src={assets.patternCircle} alt="Circle" className="absolute -top-16 left-16 w-48 opacity-80 z-0" />
      <img src={assets.patternCircle} alt="Circle" className="absolute top-4/6 right-16 transform -translate-y-1/2 w-48 opacity-80 z-0 mr-40" />

      {!submitted ? (
      <div className="z-10 w-full max-w-md bg-opacity-100 rounded-xl text-white  scale-85 ">
        <div className="text-center mb-6">
          <img src={assets.logo} alt="logo" className="mx-auto w-38 mb-3 scale-130 relative "/>
          <h1 className="text-2xl font-bold">Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p className="text-xs text-gray-400 mt-3 font-bold">Secure your spot at next year's biggest coding conference.</p>
        </div>

        <div className="mb-5">
          <h3 className="text-base font-semibold mb-2">Upload Avatar</h3>
          <div className="border border-dashed border-gray-400 p-4 rounded-lg text-center">
            <input
              type="file"
              id="fileUploader"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <label htmlFor="fileUploader" className="cursor-pointer flex flex-col items-center gap-2">
              <img src={assets.iconUpload} alt="Upload Icon" className="w-8 h-8" />
              <span className="text-sm">Click to upload</span>
            </label>

            {photo && (
              <div className="mt-3 flex gap-3 justify-center">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                >
                  Change
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                  type="button"
                  onClick={handleDeleteImage}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          {errors.photo && <p className="text-red-400 text-xs mt-1">{errors.photo}</p>}
          <p className="text-xs text-gray-300 mt-2 flex items-center gap-2">
            <img src={assets.iconInfo} alt="info" className="w-4 h-4" />
            Upload a JPG or PNG (Max size: 500KB)
          </p>
        </div>

       
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
            {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
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
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="gitUserName" className="block font-medium mb-1 text-sm">GitHub Username</label>
            <input
              type="text"
              id="gitUserName"
              value={github}
              onChange={(e) => setGitHub(e.target.value)}
              className="text-neutral-300 text-sm rounded-md p-3 bg-[rgba(75,72,106,0.25)] outline outline-[rgba(135,132,164,0.4)] w-full"
              placeholder="Enter your GitHub username (eg. @username)"
            />
            {errors.github && <p className="text-red-400 text-xs mt-1">{errors.github}</p>}
          </div>
        </div>

  
  
        <div className="text-center mt-6">
          <button
            className="bg-orange-700 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-base w-full"
            onClick={handleSubmit}
          >
            Generate My Ticket
          </button>
        </div>
      </div>
       ) : (
        <TicketGenerated photo={photo} fullName={fullName} email={email} github={github} />
      )}
    </div>
  );
};

export default Register;
