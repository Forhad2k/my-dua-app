import React from 'react'
import Image from 'next/image';
import { Poppins } from 'next/font/google';  // Importing Poppins font
import '../globals.css';

// Initialize Poppins font with specific weights if needed
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],  // You can adjust the font weights as per your needs
});

function Navber() {
  return (
    <div className="flex justify-between w-full h-14 items-center  md:mt-10">
      {/* Company Name */}
      <button className="  md:hidden  rounded-sm p-3 flex m-1 justify-center">
          <Image
            src="/Navber/menu.png" // Correct path starting from the public folder
            alt="Search"
            width={20}
            height={20}
          />
        </button>
      
      
      <div className={`text-2xl font-bold text-foreground w-73 md:w-auto font-sans-custom text-gray-800`}>
        Dua Page
      </div>

      {/* Search Bar */}
      <div className=" flex items-center justify-between md:border h-10 md:h-14  border-gray-300 rounded-md">
      <input
  type="text"
  placeholder="Search by Dua Name"
  className="outline-none border-none hidden md:block px-3 w-45 md:w-80 text-gray-600"
/>
        <button className=" bg-[#E8F0F5] rounded-sm p-3 flex m-1 justify-center">
          <Image
            src="/Navber/Search.png" // Correct path starting from the public folder
            alt="Search"
            width={20}
            height={20}
          />
        </button>  <button className=" md:hidden bg-[#E8F0F5] rounded-sm p-3 flex m-1 justify-center">
          <Image
            src="/Navber/setting.png" // Correct path starting from the public folder
            alt="Search"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}

export default Navber;
