import Blogs from "@/components/learn/blogs";
import Categories from "@/components/learn/categories";
import DSAQuestions from "@/components/learn/dsa-question";

async function fetchCategory() {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://localhost:1337/api/categories", option);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchBlogs() {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      "http://localhost:1337/api/blogs?populate=*",
      option
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function Learn() {
  const categoris = await fetchCategory();
  const blogs = await fetchBlogs();

  return (
    <>
      <Categories categories={categoris} />
      <Blogs blogs={blogs} />
      <DSAQuestions />
    </>
  );
}
