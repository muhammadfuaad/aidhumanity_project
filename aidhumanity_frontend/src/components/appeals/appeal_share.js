
function Appeal_share() {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen sm:min-h-fit pb-40 sm:pb-0 sm:rounded-3xl sm:w-[64rem]">
      <div className="flex justify-between items-center bg-white px-4 h-28 border-bottom-light sm:border-bottom-medium">
        <a className="flex space-x-4">
          <img src="./icons/angle-left.svg" className="w-3 sm:hidden"></img>
          <span className="text-[1.8rem] font-bold tracking-[-0.27px] text-black">Share your page</span>
        </a> 
        <img src="./icons/cross-circle.svg" className="hidden sm:flex"></img>     
      </div>

      <div className='px-8'>
        <p className="text-[1.6rem] font-normal traking-[-0.4px] text-body my-16">Sharing your page on 
        Facebook will help you get supporters on board and raise more for your cause.</p>
        <button className='w-full py-6 text-[1.4rem] font-semibold text-white bg-[#006BA3]
        rounded-xl flex space-x-4 justify-center'><img src="./icons/arrow-top.svg"></img><span>Share on facebook</span></button>
        <button className='w-full py-6 text-[1.4rem] font-semibold text-white bg-primary rounded-xl 
          flex space-x-4 justify-center mt-6'>
          <img src="./icons/arrow-top.svg"></img>
          <span>Twitter</span>
        </button>

        <button className="w-full py-6 text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline 
          outline-spanish-gray rounded-xl flex justify-center space-x-4 mt-6">
          <img src="./icons/share-icon.svg"></img>
          <span>Email</span>
        </button>

        <button className="w-full py-6 text-[1.4rem] font-semibold text-[#006BA3] rounded-xl mt-6">Skip</button>
      </div>
    </div>
  )
}
export default Appeal_share;