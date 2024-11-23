import Image from "next/image";
import Link from "next/link";

async function fetchBlog(id: string) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const page = async ({ params }: any) => {
  const blog = await fetchBlog(params.id);

  const iamgeUrl =
    "http://localhost:1337" + blog.data.Image.formats.thumbnail.url;
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      <Link
        href="/learn"
        className="text-blue-600 hover:text-blue-800 text-lg font-medium mb-4 inline-block"
      >
        {"< Back"}
      </Link>
      <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-lg shadow-lg mt-5">
        <Image
          layout="fill"
          objectFit="cover"
          src={iamgeUrl}
          alt={`${blog.id} and name ${blog.Title}`}
          className="rounded-t-lg"
        />
      </div>
      <div className="mt-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {blog.data.Title}
        </h1>
        <p className="text-lg text-gray-700 mt-4">{blog.data.Description}</p>
        <div className="mt-6 flex items-center text-gray-500">
          <span className="text-sm">
            Published on {new Date(blog.data.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
