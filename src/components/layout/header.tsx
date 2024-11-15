import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold font-mono">
          <Link href="/">ThitaInfo</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team">Learn</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
            {/* <li>
              <Link href="/contactus">Login</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
