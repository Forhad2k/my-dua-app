"use client";
import { useState, } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google'; // Importing Inter font

// Load Inter font with specific weights (optional)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],  // You can add more weights if needed
});

function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Settings data
  const settings = [
    { icon: '/Profile/Language.png', label: 'Language Settings' },
    { icon: '/Profile/General.png', label: 'General Settings' },
    { icon: '/Profile/Font.png', label: 'Font Settings' },
    { icon: '/Profile/Green-Menu.png', label: 'Appearance Settings', isHighlighted: true },
  ];

//

  return (
    <>
  
    <div className={` hidden md:flex flex-col h-screen ${inter.className}`}> {/* Apply Inter font to the entire component */}
    <div className="flex justify-end items-center mx-10 mt-10">
  <Image 
    src="/Profile/Profile.png" 
    alt="Profile" 
    width={100} 
    height={100} 
    className="w-11 mr-4"  // Adjust the width and margin-right for spacing
  />
  <Image 
    src="/Profile/Arrow.png" 
    alt="Arrow" 
    width={100} 
    height={100} 
    className="w-3"  // Adjust the width for the arrow image
  />
</div>
      {/* Sidebar */}
      <div className="bg-white border border-[#E2E2E2] h-screen rounded-3xl m-10  p-4">
        <div className="space-y-6">
          {/* Settings Title */}
          <h2 className="text-xl text-center font-semibold">Settings</h2>

          {/* Dynamic Settings Items */}
          {settings.map((setting, index) => (
            <div
              key={index}
              className={`flex items-center mb-3.5 space-x-2 bg-[#F7F8FA] text-[#868686] p-3 rounded-sm w-72 ${setting.isHighlighted ? 'text-green-500' : ''}`}
            >
                <span className='bg-[#E8F0F5] rounded-full p-2'>
                  <Image src={`${setting.icon}`} alt={setting.label} width={24} height={24} />
                </span>
               <p>{setting.label}</p>
            </div>
          ))}

          {/* Night Mode Toggle */}
          <div className="flex items-center justify-between space-x-2">
            <p className="text-gray-700 ml-2 mt-2">Night Mode</p>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex items-center p-1 bg-gray-200 rounded-full w-12 h-6 transition-colors duration-300 ease-in-out ${
                isDarkMode ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
