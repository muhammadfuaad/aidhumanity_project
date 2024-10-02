function Share() {
  return (
    <div className='h-screen sm:h-auto flex flex-row gap-12 sm:p-12 relative sm:w-[64rem] sm:rounded-3xl sm:border sm:border-black'>
      <img src="./icons/cross-circle.svg" className='absolute hidden sm:flex top-12 right-12'></img>
      <div className='flex flex-col sm:w-3/4'>
        <div className="flex gap-4 items-center px-5 py-8 sm:p-0 bg-white">
          <img src="./icons/angle-left.svg" className="sm:hidden"></img>
          <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-black leading-[2rem] sm:text-[3.6rem] sm:font-bold sm:tracking-[-0.54px] sm:text-black sm:leading-[4rem] sm:mb-8">Share with<br className="hidden sm:flex"></br> friends is powerfull</p>
        </div>
        <div className="flex flex-col gap-5 bg-fa px-5 sm:px-0 h-full">
          <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body leading-[2.4rem] mt-12 sm:mt-0">Sharing this page with your friends could help Ron Hill raise over 3x more in donations</p>
          <div className="self-center sm:hidden">
            <img src="./icons/link-sharing.svg" className="w-[175px] h-[186px]" alt="link sharing icon"></img>
          </div>
          <button className="mt-10 mb-6 w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline 
              outline-spanish-gray rounded-xl flex justify-center space-x-4">
            <img src="./icons/share-icon.svg"></img>
            <span>Share</span>
          </button>
          <p className="self-center text-[1.2rem] font-bold tracking-[-0.18px] text-primary-medium leading-[1.5rem]">Not now, maybe later</p>
        </div>
      </div>
      <div className="self-center hidden sm:flex">
        <img src="./icons/link-sharing.svg" className="w-[175px] h-[186px]" alt="link sharing icon"></img>
      </div>
    </div>
  );
}
export default Share;