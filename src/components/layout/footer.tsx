import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Useful Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/service" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/team" className="hover:text-primary transition">
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="INSTAGRAM_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition flex items-center"
                >
                  {/* Replace PUT-ICON with actual icon */}
                  PUT-ICON LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="YOUTUBE_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition flex items-center"
                >
                  PUT-ICON YouTube
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="tel:+918140202047"
                  className="hover:text-primary transition flex items-center"
                >
                  {/* Replace <i></i> with actual icon */}
                  <i></i> +91 81402 02047
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:saurabhprajapati120.@gmail.com"
                  className="hover:text-primary transition flex items-center"
                >
                  <i></i> saurabhprajapati120@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              Thita Info is a new software development company that provides
              easy and cost-effective solutions for businesses to go online.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {year}-{year + 1} Thita. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm">Designed by Thita Info</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
