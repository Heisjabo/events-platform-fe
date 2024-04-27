import Img from "../assets/mtzig-amabeats.jpg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { RiBuilding2Fill } from "react-icons/ri";

const Events = () => {
  return (
    <div className="px-[8%] pt-10 gap-6 flex flex-col" id="events">
      <h2 className="text-xl">Explore the best events happening around you</h2>
      <ul className="flex items-center gap-6">
        <li>All</li>
        <li>Sports</li>
        <li>Arts</li>
        <li>Games</li>
        <li>Literature</li>
        <li>Technology</li>
        <li>Culture</li>
        <li>Lifestyle</li>
        <li>Faishon</li>
      </ul>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-4">
        <div className="bg-slate-200 w-full rounded-xl duration-500 scale-95 hover:scale-100">
          <img
            src={Img}
            alt=""
            className=" rounded-t-2xl h-64 w-full object-cover"
          />
        <h3 className="text-lg font-medium p-4">MÜTZIG AMABEATS FINAL 2023</h3>
          <div className="flex p-4 gap-y-2 flex-wrap gap-x-4">
              <span className="flex items-center gap-2 "><MdOutlineCalendarMonth /> <p className="text-sm">October 14, 2023</p></span>
              <span className="flex items-center gap-2"><GrLocation /><p className="text-sm">Kigali, Rwanda</p></span>
              <span className="flex items-center gap-2"><IoMdTime /> <p className="text-sm">17:00</p></span>
              <span className="flex items-center gap-2"><RiBuilding2Fill /> <p className="text-sm">Camp Kigali (KCEV)</p></span>
          </div>
        </div>
        <div className="bg-slate-200 w-full rounded-xl duration-500 scale-95 hover:scale-100">
          <img
            src={Img}
            alt=""
            className=" rounded-t-2xl h-64 w-full object-cover"
          />
        <h3 className="text-lg font-medium p-4">MÜTZIG AMABEATS FINAL 2023</h3>
          <div className="flex p-4 gap-y-2 flex-wrap gap-x-4">
              <span className="flex items-center gap-2 "><MdOutlineCalendarMonth /> <p className="text-sm">October 14, 2023</p></span>
              <span className="flex items-center gap-2"><GrLocation /><p className="text-sm">Kigali, Rwanda</p></span>
              <span className="flex items-center gap-2"><IoMdTime /> <p className="text-sm">17:00</p></span>
              <span className="flex items-center gap-2"><RiBuilding2Fill /> <p className="text-sm">Camp Kigali (KCEV)</p></span>
          </div>
        </div>
        <div className="bg-slate-200 w-full rounded-xl duration-500 scale-95 hover:scale-100">
          <img
            src={Img}
            alt=""
            className=" rounded-t-2xl h-64 w-full object-cover"
          />
        <h3 className="text-lg font-medium p-4">MÜTZIG AMABEATS FINAL 2023</h3>
          <div className="flex p-4 gap-y-2 flex-wrap gap-x-4">
              <span className="flex items-center gap-2 "><MdOutlineCalendarMonth /> <p className="text-sm">October 14, 2023</p></span>
              <span className="flex items-center gap-2"><GrLocation /><p className="text-sm">Kigali, Rwanda</p></span>
              <span className="flex items-center gap-2"><IoMdTime /> <p className="text-sm">17:00</p></span>
              <span className="flex items-center gap-2"><RiBuilding2Fill /> <p className="text-sm">Camp Kigali (KCEV)</p></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
