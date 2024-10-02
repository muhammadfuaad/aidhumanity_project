function Fixed_navigator_1() {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between fixed w-full bottom-0 right-0 px-8 sm:pl-56 sm:pr-48 bg-white">
      <ul className="flex space-x-12 w-full bg-white text-[1.2rem] font-medium tracking-[-0.18px] text-black">
        <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">Story</a></li>
        <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">About</a></li>
        <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">Summary</a></li>
        
      </ul>

      <div className="flex justify-between items-center">
        <img src="./icons/cross-black.png" className="sm:hidden w-8"></img>
        <div className="flex space-x-8 items-center">
          <p className="text-[2rem] font-bold tracking-[-0.5px] text-black whitespace-nowrap">£4.342</p>
          <button className="whitespace-nowrap px-10 h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
            Donate now
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Fixed_navigator_1;