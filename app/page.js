"use client";
import { useState, useEffect } from 'react';
import DuaCard from './components/duaCard';
import CategorySidebar from './components/categorySidebar';
import Sideber from './components/Sideber';
import Navber from './components/Navber';
import Profile from './components/Profile';

export default function Home() {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);
  const [dua, setDua] = useState([]);
  const [Subcategory, setSubCategory] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [subcategoryId, setSubcategoryId] = useState(1);


  const toggleSubcategories = (categoryId) => {
    setActiveCategoryId((prevId) => (prevId === categoryId ? null : categoryId));
    setActiveCategoryId(categoryId);
  };

  const handleDuaClick = (subcategoryId) => {
    setSubcategoryId(subcategoryId);
  }


  // Fetch data when component mounts
  useEffect(() => {
    fetch('/dua_main_full_content.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);;
        setCategories(data.category || []);
        setSubCategory(data.sub_category || []);
        setDua(data.dua || []);
        
      })
      .catch((error) => console.error('Error fetching duas:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts
 


  return (
<>
  <main className="block overflow-x-hidden md:flex w-full bg-[#F7F8FA] min-h-screen">
    {/* Sidebar — Left for md+, Bottom sticky for mobile */}
    <div className=" md:relative fixed bottom-0 w-full md:w-auto z-50">
      <div className=" sticky md:top-0">
        <Sideber />
      </div>
    </div>

    <div className="block md:flex md:flex-grow md:flex-col pb-14 md:pb-0"> {/* space for bottom sticky on mobile */}
      <section className="w-full">
        <Navber />
      </section>
      <section className="flex bg-[#F7F8FA] w-full mt-3 space-x-4">
        <CategorySidebar
          categories={categories}
          Subcategory={Subcategory}
          toggleSubcategories={toggleSubcategories}
          activeCategoryId={activeCategoryId}
          handleDuaClick={handleDuaClick}
        />
        <DuaCard
          dua={dua}
          categories={categories}
          Subcategory={Subcategory}
          subcategoryId={subcategoryId}
          activeCategoryId={activeCategoryId}
        />
      </section>
    </div>

    <Profile />
  </main>
</>


  );
}
