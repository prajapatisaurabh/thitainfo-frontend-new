import { Breadcrumb } from "@/types/breadcrumb";
import Link from "next/link";

const Breadcrumbs = ({ paths }: { paths: Breadcrumb[] }) => {
  return (
    <section id="breadcrumbs" className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {paths.map((path, index) => (
            <li key={index} className="flex items-center space-x-2">
              {path.href ? (
                <Link href={path.href} className="hover:text-primary">
                  {path.label}
                </Link>
              ) : (
                <span className="text-gray-400">{path.label}</span>
              )}
              {index < paths.length - 1 && <span>/</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Breadcrumbs;
