
function Appeal_cancel() {
  return (  
    <div className="flex flex-col bg-fa min-h-screen sm:min-h-fit pb-40 sm:pb-12 sm:w-[64rem] sm:rounded-3xl sm:border-2 sm:border-black">
      <div className="flex justify-between items-center bg-white sm:bg-transparent px-6 sm:px-10 h-28 sm:border-b sm:border-b-black sm:rounded-t-3xl">
        <a className="flex gap-4">
          <img src="./icons/angle-left.svg" className="w-3 sm:hidden"></img>
          <span className="text-[1.8rem] font-bold tracking-[-0.27px] sm:tracking-[-0.27px] text-black">Cancel page</span>
        </a>
        <img src="./icons/cross-circle.svg" className="hidden sm:flex"></img>
      </div>
      <div className='px-6 sm:px-10'>
        <p className="text-[1.6rem] font-normal traking-[-0.4px] text-body mt-16 sm:mt-12 mb-96 sm:mb-20">Your are about to cancel the page “Water Hands Pumps”</p>
        <div className="flex flex-col sm:flex-row gap-8">
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline
          outline-spanish-gray rounded-xl">No, Keep My Page</button>
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
            Yes, Cancel My Page
          </button>
        </div>
      </div>
    </div>
  )
}
export default Appeal_cancel;