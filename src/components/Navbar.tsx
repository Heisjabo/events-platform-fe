const Navbar = () => {
    return (
        <div className="bg-[#fcfcfc] w-full px-[8%] py-4 fixed flex justify-between items-center top-0 flex-grow z-50">
      <h1 className="text-xl font-bold text-slate-800">Events App</h1>
      <ul className="hidden justify-around text-sm font-light items-center gap-4 xl:flex lg:flex md:flex sm:hidden">
          <li>Home</li>
          <li>About</li>
          <li><a href="#events">Explore</a></li>
      </ul>
          <button className="bg-slate-800 px-5 text-sm font-semibold py-2 text-slate-50 rounded-[8px] hidden xl:flex lg:flex md:flex sm:hidden">
            Signin
          </button>
    </div>
    )
}

export default Navbar