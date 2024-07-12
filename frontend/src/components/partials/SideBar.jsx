import { FaBookReader } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-60
    bg-black text-white z-40 hidden md:flex flex-col items-center gap-5 py-20 fixed left-0 "
    >
      <div
        className="w-[95%] cursor-pointer flex items-center gap-3 text-left bg-slate-700 hover:bg-slate-500 py-2 pl-4 transition-all duration-300 text-xl rounded-md"
        onClick={() => navigate("/courses")}
      >
        <div>
          <FaBookReader />
        </div>
        Courses
      </div>
      <div
        className="w-[95%] cursor-pointer flex items-center gap-3 text-left bg-slate-700 hover:bg-slate-500 py-2 pl-4 transition-all duration-300 text-xl rounded-md"
        onClick={() => navigate("/profile")}
      >
        <div>
          <CgProfile />
        </div>
        Profile
      </div>
      <div
        className="w-[95%] cursor-pointer flex items-center gap-3 text-left bg-slate-700 hover:bg-slate-500 py-2 pl-4 transition-all duration-300 text-xl rounded-md"
        onClick={() => navigate("/contact")}
      >
        <div>
          <IoMdHelpCircle />
        </div>
        Contact Us
      </div>
      <div
        className=" w-[95%] cursor-pointer flex items-center gap-3 text-left bg-slate-700 hover:bg-slate-500 py-2 pl-4 transition-all duration-300 text-xl rounded-md"
        onClick={() => navigate("/my-purchases")}
      >
        <div>
          <IoMdCart />
        </div>
        My purchases
      </div>
    </div>
  );
};

export default SideBar;
