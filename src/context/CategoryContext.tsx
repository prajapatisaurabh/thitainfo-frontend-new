"use client";

import { createContext, useState } from "react";

// Define the shape of your context value
interface CategoryContextType {
  category: string;
  changeCategory: (cat: string) => void;
}

export const CategoryContext = createContext<CategoryContextType>({
  category: "", // Default category
  changeCategory: () => {}, // Default function (no-op)
});

export const CategoryProvide = ({ children }: any) => {
  const [category, setCategory] = useState("ALL");

  const changeCategory = (cat: any) => {
    console.log("first : " + cat);
    setCategory(cat);
  };
  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
