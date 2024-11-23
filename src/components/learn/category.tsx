"use client";

import { CategoryContext } from "@/context/CategoryContext";
import { useContext } from "react";

const Category = ({ cat }: any) => {
  const { changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.Title)}
      className="p-4 bg-[#af8533] rounded-lg shadow-md cursor-pointer"
    >
      {cat.Title}
    </div>
  );
};

export default Category;
