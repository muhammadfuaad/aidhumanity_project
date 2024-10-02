function Desktop_header() {
  return (
    <div className="flex justify-between items-center px-8 h-28 border-bottom-light">
      <button className="flex space-x-4 items-center bg-primary-dark rounded-2xl py-4 px-6 h-fit">
        <img src="./icons/blue-plus.svg" className="w-4"></img>
        <span className="text-white text-[1.4rem] font-semibold uppercase">New Appeal</span>
      </button>
      <div className="flex justify-between space-x-10 relative">
        <div className="h-9 w-[1px] bg-[#bdbdbd] absolute left-[6.5rem] top-1"></div>
        <a href="#" className="flex space-x-2 items-center"><span className="text-[1.4rem] font-medium tracking-[-0.21px] text-spanish-gray">En</span><img src="./icons/drop-down.svg" alt=""></img></a>
        <a href="#" className="flex space-x-2 items-center"><img src="./icons/logout.svg" className="w-8" alt=""></img><span className="text-[1.3rem] font-medium tracking-[-0.2px] text-black">Log Out</span></a>
      </div>
    </div>
  )
}
export default Desktop_header;