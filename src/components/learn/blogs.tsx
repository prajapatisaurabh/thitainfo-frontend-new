"use client";
import { useContext } from "react";
import BlogCard from "./blogcard";
import { CategoryContext } from "@/context/CategoryContext";

const Blogs = ({ blogs }: any) => {
  const { category } = useContext(CategoryContext);

  const filterBlogs =
    category === "ALL" || category === ""
      ? blogs.data
      : blogs.data.filter((blog: any) => {
          return blog.categories.some((cat: any) => cat.Title === category);
        });

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Blogs
      </h2>
      {filterBlogs.length === 0 ? (
        <p className="text-center text-gray-600">
          No blogs available in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterBlogs.map((blog: any) => (
            <div
              key={blog.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
