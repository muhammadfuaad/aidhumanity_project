import calendar from "../../icons/calendar-clock.svg"
function Event() {
  return (
    <div className="px-8 bg-white rounded-3xl flex flex-col shadow-md">
      <div className="py-8  h-60 border-bottom-medium">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <p className="text-[1.1rem] font-semibold tracking-[-0.17px] text-primary-dark">December 2022</p>
            <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-primary">16-21</p>
          </div>
          <img src={calendar} className="w-10"></img>
        </div>
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black leading-[2rem] w-[80%]">The Pakistan Rickshaw Challenge</p>
      </div>
      <div className="py-8 h-32 flex flex-col justify-center items-start">
        <p className="flex items-center text-[1.1rem] font-semibold tracking-[-0.17px] text-green mb-1">Raised: <span className="text-[2.4rem]"> £243</span></p>
        <p className="flex items-center text-[1.1rem] font-semibold tracking-[-0.17px] text-[#999999] mb-1">Raised: <span className="text-[2.4rem]"> £243</span></p>
      </div>
    </div>
  );
}
export default Event;