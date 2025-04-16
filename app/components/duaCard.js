import Image from "next/image";
import { useRef } from "react";
import { Inter } from "next/font/google"; // Importing Inter font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],  // You can add more weights if needed
});

export default function DuaCard({
  dua,
  activeCategoryId,
  subcategoryId,
  categories,
  Subcategory,
}) {
  // Filter the dua array based on activeCategoryId and subcategoryId
  const filteredDuas = dua.filter(
    (item) =>
      (item.subcat_id === subcategoryId && item.cat_id === activeCategoryId) ||
      item.subcat_id === subcategoryId
  );
  
  // Filter categories based on the activeCategoryId
  const filteredCategories = categories.filter(
    (category) => activeCategoryId === category.id
  );

  const imagePaths = [
    "/Dua/copy.png",
    "/Dua/bookmark.png",
    "/Dua/memorize.png", // Add the correct path for memorize image
    "/Dua/share.png", // Add the correct path for share image
    "/Dua/report.png", // Add the correct path for report image
  ];
  
  const audioRef = useRef(null); // Create a ref for the audio element

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio when the image is clicked
    }
  };


  return (
    <>
      <section className={`flex flex-col bg-[#F7F8FA] w-full md:w-[850px] ${inter.className}  space-x-4`}>
        {/* Display filtered category name */}
        {filteredCategories.length > 0 && (
          <div className="w-full bg-white rounded-xl border border-[#E2E2E2] p-4">
            <span className="text-[#1FA45B]">Section:</span> {filteredCategories[0].cat_name_en}
          </div>
        )}

        <div className="w-full ">
          {filteredDuas.length > 0 ? (
            filteredDuas.map((item, index) => (
              <div
                key={index}
                className=" bg-white rounded-xl shadow-sm my-4 p-4"
              >
                <div className="flex items-center mb-2">
                  <Image
                    src="/Dua/logo.png"
                    alt="Avatar"
                    width={50}
                    height={50}
                    className="w-10 pr-2"
                  />
                  <p className="text-md text-[#1FA45B] ">{item.dua_name_en}</p>
                </div>
                <p className="text-md text-[#393939]  ml-4">{item.top_en}</p>
                {item.dua_indopak ? (
                    <p className="text-3xl text-end   ml-4 my-6">
                     {item.dua_indopak}
                    </p>
                  ) : null}
                {item.transliteration_en? (
                    <p className="text-md text-[#393939]  ml-4 my-3">
                        <span className="text-black font-semibold">Transliteration: </span>{item.transliteration_en}
                    </p>
                  ) : null}
                {item.translation_en ? (
                    <p className="text-md  text-[#393939]  ml-4 my-3">
                      <span className="text-black font-semibold">Translation: </span>{item.translation_en}
                    </p>
                  ) : null}
                  
                <div>
                  {item.refference_en ? (
                    <p className="text-md text-[#393939] ml-4 my-2">
                      <span className="text-[#1FA45B]">Reference: </span><br />
                      {item.refference_en}
                    </p>
                  ) : null}
                </div>
                <div className="flex justify-between items-center mt-4">
                {item.audio ? (
        <p className="text-sm text-gray-500 ml-4 my-2">
          {/* Image onClick to play the audio */}
          <Image
            src="/Dua/audio.png"
            width={50}
            height={50}
            alt="audio icon"
            onClick={handleImageClick} // Play audio on image click
            className="cursor-pointer w-10" // Add pointer cursor for better UX
          />
          <audio ref={audioRef}>
            <source src={item.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </p>
      ) : null}
                  <div className="flex space-x-4">
                    {/* Map through the image paths and render them */}
                    {imagePaths.map((path, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-end items-center"
                      >
                        <Image
                          src={path}
                          alt={`Image ${index + 1}`}
                          width={50}
                          height={50}
                          className="w-4 mx-3"
                        />
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No duas available for this category and subcategory.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
