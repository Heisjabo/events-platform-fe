import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#fcfcfc] text-slate-800 py-6">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <a href="#" className="hover:text-blue-900">
          Home
        </a>
        <a href="#" className="hover:text-blue-900">
          About
        </a>
        <a href="#" className="hover:text-blue-900">
          Services
        </a>
        <a href="#" className="hover:text-blue-900">
          Contact
        </a>
      </div>
      <div className="container mx-auto mt-4 flex justify-center items-center space-x-4">
        <span className="text-gray-500 hover:text-blue-900 cursor-pointer"><RiFacebookFill /></span>
        <span className="text-gray-500 hover:text-blue-900 cursor-pointer"><RiTwitterFill /></span>
        <span className="text-gray-500 hover:text-blue-900 cursor-pointer"><RiInstagramFill /></span>
        <span className="text-gray-500 hover:text-blue-900 cursor-pointer"><RiLinkedinFill /></span>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p className="text-gray-500">
          &copy; 2024 Events App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
