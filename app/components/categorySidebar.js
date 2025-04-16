import Image from "next/image";

export default function CategorySidebar({
  categories,
  Subcategory,
  toggleSubcategories,
  activeCategoryId,
  handleDuaClick,
  menu,
  handleMenuClick
}) {
  return (
    <div
  className={`w-full max-w-xs bg-white rounded-3xl border border-[#E2E2E2] md:block overflow-y-auto overflow-x-auto max-h-[85vh] scroll-hidden
    ${menu ? "absolute top-0 left-0 z-50 h-screen md:relative" : "hidden"}`}
> 
      <h3 className=" hidden md:block text-center sticky top-0 bg-[#1FA45B] p-4 rounded-t-2xl text-xl text-white">
        Categories
      </h3>
       <div  className="md:hidden flex sticky top-0 justify-end"><Image src="/catagory/close.png" width={50} height={50} alt="close" onClick={() => handleMenuClick()}  className="min-w-2 p-3 m-2"/></div>
      <ul className="">
        {categories.map((category) => (
          <li key={category.id} className="m-4  bg-white rounded-lg">
            {/* Category Row */}
            <div
              className={`flex items-center justify-between py-4 px-6 cursor-pointer ${
                activeCategoryId === category.id
                  ? "bg-[#E8F0F5] text-[#1FA45B]"
                  : ""
              }`}
              onClick={() => toggleSubcategories(category.id)}
            >
              {/* Image */}
              <span className="bg-[#CFE0E5] p-2 w-16 h-16 rounded-lg flex justify-center items-center">
                <Image
                  src="/Catagory/avatar.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                />
              </span>

              {/* Category Info */}
              <div className="flex flex-col w-52 ml-4">
                <p className="text-md font-semibold">{category.cat_name_en}</p>
                <p className="text-sm text-gray-500">
                  Subcategory: {category.no_of_subcat}
                </p>
              </div>

              {/* Duas Count */}
              <div className="text-right">
                <p className="text-lg font-semibold">{category.no_of_dua}</p>
                <p className="text-sm text-gray-500">Duas</p>
              </div>
            </div>

            {/* Subcategories */}
            {activeCategoryId === category.id && (
              <div className="mt-4 ml-10">
                {/* Render Subcategories only for the active category */}
                {Array.isArray(Subcategory) &&
                  Subcategory.filter((sub) => sub.cat_id === activeCategoryId)
                    .map((subcategory, index) => (
                      <ul key={index} className="flex list-disc items-center mt-2">
                        <li
                          className="p-4 text-sm cursor-pointer"
                          onClick={() => handleDuaClick(subcategory.id)}
                        >
                          {subcategory.subcat_name_en}
                        </li>
                      </ul>
                    ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
