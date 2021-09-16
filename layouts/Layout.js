import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen z-50 fixed inset-0 pointer-events-none md:border-[10px] border-gray-900">
        <div className="w-full h-full border-[10px] border-gray-900" />
      </div>
      <div className=" p-[25px] container">
        <Navbar /> <span className="px-4 md:px-0"> {children} </span>
      </div>
    </div>
  );
};

export default Layout;
