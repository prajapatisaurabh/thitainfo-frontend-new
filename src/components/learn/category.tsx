"use client";

import { CategoryContext } from "@/context/CategoryContext";
import { CategoryType } from "@/types/learn";
import { useContext } from "react";

const Category = ({ cat }: { cat: CategoryType }) => {
  const { changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.Title)}
      className="p-6 bg-[#af8533] text-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
    >
      <h3 className="text-xl font-semibold">{cat.Title}</h3>
    </div>
  );
};

export default Category;
