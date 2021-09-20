import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="h-screen z-50 fixed inset-0 pointer-events-none md:border-[10px] border-gray-900"></div>
      <div className="fixed inset-[0.10rem]  pointer-events-none  border-4 border-white " />
      <div className="fixed inset-[0.66rem] pointer-events-none  border-4 border-black " />
      <div className=" p-[25px] container">
        <Navbar /> <span className="px-4 md:px-0"> {children} </span>
      </div>
    </div>
  );
};

export default Layout;
