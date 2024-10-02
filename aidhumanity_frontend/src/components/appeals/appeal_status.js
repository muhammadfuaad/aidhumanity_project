import Circular_progress_bar from "../dashboard/circular_progress_bar";

function Appeal_status() {
  return (
    <div className="flex flex-col bg-white rounded-3xl px-8 py-16">
      <div className='flex justify-between'>
        <div className='flex flex-col space-y-2'>
          <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">£4.342</p>
          <p className="text-[1.2rem] font-medium tracking-[-0.3px] text-spanish-gray">raised of <span className="font-semibold text-primary">£6.200</span> target</p>
        </div>
        <div className="w-[25%]">
          <Circular_progress_bar />
        </div>
      </div>

      <div className="flex justify-between items-center mt-16">
        <div className="flex space-x-2 items-center">
          <span className="text-[1rem] font-medium tracking-[-0.15px] text-body">by</span>
          <img src="./icons/user-circle.svg"></img>
          <span className="text-[1rem] font-medium tracking-[-0.15px] text-body">supporters</span>
        </div>
        <div className="flex space-x-2 items-center">
          <img src="./icons/red-clock.svg"></img>
          <span className="text-[1rem] font-semibold tracking-[-0.15px] text-red">Ends in 161 days</span>
        </div>
      </div>

      <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-black bg-green
        rounded-xl mt-4">Donate</button>
      <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline outline-spanish-gray
        rounded-xl flex justify-center space-x-4 mt-6"><img src="./icons/share-icon.svg"></img><span>Share</span></button>
    </div>
  )
}
export default Appeal_status;