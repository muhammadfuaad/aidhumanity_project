import React from "react";
function Input_dropdown(props) {
  const [showDropdown, setShowDropdown] = React.useState(false)

  return (  
    <div className="h-28 flex mt-6 mb-8 py-6 bg-white rounded-xl">
      <div className="relative">
        <input type="number" id="" className="h-full focus:outline-none focus:bg-white block rounded-l-xl pl-20 pr-8 w-full text-[4rem] font-bold tracking-[0px] text-primary" placeholder=" " />
        <label for="" className="absolute text-[2rem] font-medium tracking-[0px] text-[#7c7c7c] top-3 left-8">£</label>
      </div>
      <div className="focus:outline-none relative pr-4 rounded-r-xl bg-white">
        <button onClick={()=>setShowDropdown(current=> !current)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full h-full bg-white  text-[1.3rem] font-medium text-gray 
          tracking-[0px] pr-4 pl-8 inline-flex gap-8 justify-between items-center border-l border-l-platinum relative" type="button">
          <span className="text-[1.6rem] font-medium tracking-[0px] text-gray">GBP</span>
          <img src="./icons/drop-down-black.svg" alt="dropdown"></img>
        </button>
        {showDropdown ?
          <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USD</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PKR</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pounds</a>
                </li>
              </ul>
          </div> : null}
      </div>

    </div>
  )
} 
export default Input_dropdown;