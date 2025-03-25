import user from "../assets/images/user1.jpeg";
import logo from "../assets/images/logo.webp";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between items-center px-10  py-2 bg-orange-500 ">
        <div className=" w-16 h-16 rounded-full overflow-hidden">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className=" w-[500px] border border-gray-300 flex  items-center  bg-white rounded px-5 py-2">
          <input
            type="text"
            placeholder="Search for restaurant, dishes"
            className="outline-none w-full text-gray-700 text-sm"
          />
          <IoIosSearch />
        </div>
        <div className=" w-16 h-16 rounded-full border-2 overflow-hidden border-white">
          <img
            src={user}
            alt="user photo"
            className=" h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
