import Navbar from "./Navbar"

const HomeWelcome = () => {
    return (
        <div className="bg-slate-100 ">
        <Navbar />
        <div className="text-slate-50 flex items-center justify-center text-center py-[14%] px-[20%]">
        <div className=" flex flex-col gap-4 text-slate-800">
          <p className="font-light mt-14 text-slate-800">
          Host events and Sell Tickets Effortlessly.
          </p>
          <h1 className="font-semibold text-3xl text-slate-800">
          Experience the Ultimate Event Management Platform - Where Every Moment Becomes an Unforgettable Experience!
          </h1>
        </div>
      </div>
        </div>
    )
}

export default HomeWelcome