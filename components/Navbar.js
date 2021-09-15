import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex items-end">
      <Image quality={100} width={150} height={150} src="/aapl_logo.png" />{" "}
      <ul className="flex ml-auto text-3xl gap-x-10 text-gray-700">
        <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  border-none cursor-pointer">
          Home
        </li>
        <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
          ART-Talks
        </li>
        <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
          About
        </li>
        <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
          Archive
        </li>
        <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
          Submit
        </li>
        <li className="hover:text-gray-900 hover:border-b- border-gray-900 py-2  cursor-pointer">
          FR
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
