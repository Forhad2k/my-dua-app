import React from "react";
import Image from "next/image";

function Sideber() {
  const images = [
    "/Sideber/1.png",
    "/Sideber/2.png",
    "/Sideber/3.png",
    "/Sideber/4.png",
    "/Sideber/5.png",
    "/Sideber/6.png",
    "/Sideber/7.png",
  ];
  const hoverText = [
    "Home",
    "Menu",
    "Memorize",
    "Bookmark",
    "Dua",
    "Chat",
    "Books",
  ];

  const imageList = images.map((image, index) => (
    <li
      className="flex flex-col  justify-center items-center  w-10 bg-[#E8F0F5] rounded-full p-2.5 my-6 mx-2 md:mx-0 group relative"
      key={index}
    >
      <Image
        src={`${image}`}
        alt={`Image ${index + 1}`}
        width={500}
        height={500}
      />
   <span className="hidden md:inline absolute left-0 opacity-0 group-hover:opacity-100 group-hover:left-[60px] transition-all duration-300 ease-in-out">
  {hoverText[index]}
</span>

    </li>
  ));

  return (
    <div className="sticky">
    <div className="md:flex-col justify-between items-center m-5  md:m-10 h-12 md:h-screen bg-white rounded-3xl shadow-sm w-auto md:w-30 top-0 flex">
      <div className="hidden md:flex flex-col justify-center items-center mt-5">
        <Image
          src="/Sideber/Logo.png"
          priority={false}
          alt="Logo"
          width={500}
          height={500}
        />
      </div>

      <ul className="flex md:flex-col mx-auto justify-center items-center">
        {imageList}
      </ul>

      <div className="hidden md:flex justify-center items-center mb-10">
        <Image src="/Sideber/care.png" alt="Logo" width={500} height={500} />
      </div>
    </div>
    </div>
  );
}

export default Sideber;
