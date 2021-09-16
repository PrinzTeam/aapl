import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex items-end">
      <Image quality={100} width={150} height={150} src="/aapl_logo.png" />{" "}
      <ul className="flex ml-auto text-3xl gap-x-10 text-gray-700">
        <Link href="/" passHref>
          <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  border-none cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="/art-talks" passHref>
          <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
            ART-Talks
          </li>
        </Link>
        <Link href="/about" passHref>
          <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
            About
          </li>
        </Link>
        <a
          href="https://koreanfilm.ca/archives/art-talks/2020"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
            Archive
          </li>
        </a>
        <a
          href="https://forms.gle/nxvp3ofKJFfF5cnP8"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
            Submit
          </li>
        </a>
        {/* <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
          FR
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
