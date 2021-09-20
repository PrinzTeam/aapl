import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
const DesktopNavbar = () => {
  return (
    <nav className="hidden md:flex items-end">
      <Image quality={100} width={150} height={150} src="/aapl_logo.png" />
      <ul className="hidden md:flex ml-auto text-3xl gap-x-10 text-gray-700">
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

const NavbarMobile = () => {
  return (
    <nav className="flex md:hidden justify-between items-center">
      <Image quality={100} width={90} height={90} src="/aapl_logo.png" />
      <Menu as="div" className="relative">
        <Menu.Button>
          <MenuIcon className="h-12 w-12 text-black" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute flex flex-col gap-y-5 items-end right-0 origin-top-right bg-white divide-y divide-gra-100  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none list-none min-w-[200px] px-4 py-5 text-2xl">
            <Menu.Item className="h-full">
              <Link href="/" passHref>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item className="h-full">
              <Link href="/art-talks" passHref>
                ART-Talks
              </Link>
            </Menu.Item>
            <Menu.Item className="h-full">
              <Link href="/about" passHref>
                About
              </Link>
            </Menu.Item>
            <Menu.Item
              className="h-full"
              as="a"
              href="https://koreanfilm.ca/archives/art-talks/2020"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Archive
            </Menu.Item>
            <Menu.Item
              className="h-full"
              as="a"
              href="https://forms.gle/nxvp3ofKJFfF5cnP8"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Submit
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};
const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <NavbarMobile />
    </>
  );
};

export default Navbar;
