import { CategoriesType, CategoryType } from "@/types/learn";
import Category from "./category";

const Categories = ({ categories }: { categories: CategoriesType }) => {
  return (
    <div className="flex flex-wrap gap-6 mb-8 justify-center pt-3">
      {categories?.data?.map((category: CategoryType) => (
        <div
          key={category.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
