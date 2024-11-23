import Image from "next/image";
import Link from "next/link";

async function fetchBlog(id: number) {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://localhost:1337/api/blogs/${id}?populate=*`,
      option
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

const page = async ({ params }: any) => {
  const { id } = await params;
  const blog = await fetchBlog(id);

  const iamgeUrl =
    "http://localhost:1337" + blog.data.Image.formats.thumbnail.url;
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/learn">{"< back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-md mt-5">
        <Image
          layout="fill"
          objectFit="cover"
          src={iamgeUrl}
          alt={blog.Title}
          className="rounded-t-lg"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{blog.data.Title}</h1>
        <p className="text-gray-600 mt-2">{blog.data.Description}</p>
        <div className="mt-4 flex items-center text-gray-400 ">
          <span className="text-sm">
            Published on {new Date(blog.data.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
