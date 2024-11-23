import { BlogPostType } from "@/types/learn";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: BlogPostType }) => {
  const tuncateBlogDesc =
    blog.Description.length > 80
      ? blog.Description.substring(0, 80) + ". . . "
      : blog.Description;

  const iamgeUrl = "http://localhost:1337" + blog.Image.formats.thumbnail.url;
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/learn/${blog.documentId}`}>
        <div className="relative w-full h-1" style={{ paddingBottom: "100%" }}>
          <Image
            layout="fill"
            objectFit="cover"
            src={iamgeUrl}
            alt={blog.Title}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl text-gray-800 font-semibold mb-2 overflow-ellipsis">
            {blog.Title}
          </h2>
          <p className="text-gray-600">{tuncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
