import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex items-center">
      <Image quality={100} width={150} height={150} src="/aapl_logo.png" />{" "}
      <ul className="flex ml-auto text-3xl gap-x-10">
        <li>Home</li>
        <li>ART-Talks</li>
        <li>About</li>
        <li>Archive</li>
        <li>Submit</li>
        <li>FR</li>
      </ul>
    </nav>
  );
};

export default Navbar;
