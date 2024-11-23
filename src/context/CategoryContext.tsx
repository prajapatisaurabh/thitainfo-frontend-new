"use client";

import { createContext, useState } from "react";

interface CategoryContextType {
  category: string;
  changeCategory: (cat: string) => void;
}

export const CategoryContext = createContext<CategoryContextType>({
  category: "ALL",
  changeCategory: () => {},
});

export const CategoryProvide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<string>("ALL");

  const changeCategory = (cat: string) => {
    setCategory(cat);
  };
  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
