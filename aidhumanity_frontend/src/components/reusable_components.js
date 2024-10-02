<div>
  style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
  style={{ backgroundImage: `url(${Hero_1})`}}
  {/* text classes */}
  {/* section heading */}
  <p className="text-[3rem] font-bold tracking-[-0.75px] text-black leading-[3.4rem]"></p>
  {/* section text */}
  <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3.2rem]"></p>
  {/* small text */}
  <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body leading-[2.4rem]"></p>


  <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black"></p>
  <p className="text-[1.1rem] font-medium tracking-[-0.17px] text-body"></p>
  <p className="text-[1.1rem] font-semibold tracking-[-0.17px] text-primary"></p>
  <p className="text-[3rem] font-medium tracking-[-0.75px] text-black"></p>
  <p className="text-[2.2rem] font-bold tracking-[-0.55px] text-primary"></p>
  <p className="text-[1.1rem] font-medium tracking-[-0.17px] text-[#bdbdbd]"></p>
  <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body leading-[2.4rem]"></p>
  <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-primary"></p>
  <p className="text-[1rem] font-normal tracking-[-0.25px] text-[#999]"></p>
  <p className="text-[1.6rem] font-medium tracking-[-0.24px] text-primary-dark"></p>
  <p className="text-[1rem] font-normal tracking-[-0.25px] text-[#999]"></p>
  <p className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3.2rem]"></p>



  {/* outline-button */}
  <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline
            outline-spanish-gray rounded-xl">Edit Your Page</button>

  {/* background-button */}
  <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Add Donation
            </button>
  
  {/* outline-button with icon */}
  <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline 
              outline-spanish-gray rounded-xl flex justify-center space-x-4">
              <img src="./icons/share-icon.svg"></img>
              <span>Share</span>
            </button>

  {/* background-button with icon */}
  <button className='w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl 
              flex space-x-4 justify-center'>
              <img src="./icons/arrow-top.svg"></img>
              <span>Share</span>
            </button>

  {/* fixed button */}
  <button className="self-start fixed left-0 sm:static bottom-0 w-full sm:w-fit sm:px-20 py-8 sm:py-6 
            uppercase text-[1.4rem] font-semibold text-black bg-green sm:rounded-xl">Save Changes</button>

  {/* input field with top label */}
  <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4"></label>   
        </div>

  {/* input field with left label */}
  <div className="relative">
            <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl pl-9 pr-3 py-4 w-full text-[1.3rem] font-medium tracking-[0px] text-black" placeholder=" " />
            <label for="" className="absolute text-[1.7rem] font-medium tracking-[0px] text-primary top-4 left-4">£</label>   
          </div>

  {/* dropdown */}
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-gray
              tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
              <span className="text-[1.3rem] font-medium tracking-[0px] text-gray">United Kingdom</span>
              <img src="./icons/drop-down.svg" alt="dropdown"></img>
            </button>

  {/* z-component */}
  <div className="bg-amber rounded-full w-8 h-8 flex justify-center items-center">
              <p className="text-[1rem] font-bold text-black">Z</p>
            </div>

  {/* border-light */}
   className="border-[1px] border-platinum"


</div>

