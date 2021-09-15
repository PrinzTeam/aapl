import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen z-50 fixed inset-0 pointer-events-none border-[10px] border-gray-900">
        <div className="w-full h-full border-[10px] border-gray-900" />
      </div>
      <div className=" p-[25px] container">
        <Navbar /> {children}
      </div>
    </div>
  );
};

export default Layout;
