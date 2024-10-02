function Appeal_edit() {
  return (    
        <div>
          <div className='flex flex-col bg-white rounded-3xl'>
            <div className='p-8 sm:p-12 border-bottom-medium'>
              <p className='portal-subheading'>Info</p>
            </div>
            <div className="p-8 sm:p-12 flex flex-col space-y-6 border-bottom-medium">
              <div className="relative">
                <input type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Page title</label>
              </div>
              <div className="relative">
                <input type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Category</label>
              </div>
              <div className="relative flex">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="relative w-[45%] text-[1.3rem] font-medium text-gray
                  tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-l border-l-platinum border-y border-y-platinum rounded-l-xl" type="button">
                  <span className="text-[1.3rem] font-medium tracking-[0px] text-black">GBP</span>
                  <img src="./icons/drop-down-black.svg" alt="dropdown"></img>
                  <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Fundraising target</label>
                </button>
                <input type="text" id="title" className="border-r border-r-platinum border-y border-y-platinum rounded-r-xl focus:outline-none focus:bg-transparent block p-4 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder="0.00" />

              </div>
              <div className="relative">
                <textarea type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px] " rows="4" placeholder=" ">Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.</textarea>
                <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Page summary</label>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <p className='portal-subheading mb-12'>Story</p>
              <div className="relative mb-8 rounded-3xl border border-platinum px-4">
                <div className="flex gap-8 border-b border-platinum p-4">
                  <img src="./icons/bold.svg" className="w-4 h-5"></img>
                  <img src="./icons/italic.svg" className="w-4 h-5"></img>
                  <img src="./icons/url.svg" className="w-6 h-6"></img>
                  <img src="./icons/underline.svg" className="w-6 h-6"></img>
                  <img src="./icons/bullet-list.svg" className="w-8 h-5"></img>
                  <img src="./icons/numbered-list.svg" className="w-8 h-5"></img>
                </div>
                <textarea type="text" id="title" className="focus:outline-none focus:bg-transparent block pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px] h-60" placeholder=" ">
                1 in every 3 people around the world do not have clean water to drink. Millions are forced to drink dirty, unsafe water that could kill them, and is spreading deadly diseases among vulnerable communities. Women and children are forced to walk miles each day on dangerous terrain to fetch clean water, when they should be at home, at school, thriving and content. In 2016, UNICEF estimated that 200 million hours a day are spent by women and girls around the world just collecting water. A water donation is one of the greatest things you can do with your charity this Ramadan.
                </textarea>
              </div>
              <button className="self-start fixed left-0 sm:static bottom-24 w-full sm:w-fit sm:px-20 py-8 sm:py-6
              uppercase text-[1.4rem] font-semibold text-black bg-green sm:rounded-xl">Save Changes</button>
            </div>
          </div>
        </div>  
  )
}
export default Appeal_edit;