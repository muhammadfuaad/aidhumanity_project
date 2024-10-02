function Zakat() {
  return (
    <div className="bg-amber px-8 py-10 rounded-3xl flex flex-col">
      <div className="flex justify-between items-start">
        <span className="text-[3rem] font-bold tracking-[-0.75px] text-black">Zakat</span>
        <div className="flex space-x-2">
          <img src="./icons/stopwatch.svg" className="mr-4 mt-4" alt=""></img>
          <div className="flex flex-col justify-center items-center">
            <span className="text-[2rem] font-semibold text-black">234</span>
            <span className="text-[1rem] font-semibold tracking-[-0.25px] text-black">days</span>
          </div>
          <span className="mb-6">&#58;</span>
          <div className="flex flex-col justify-center">
            <span className="text-[2rem] font-semibold text-black">12</span>
            <span className="text-[1rem] font-semibold tracking-[-0.25px] text-black">hours</span>
          </div>
          <span className="mb-6">&#58;</span>
          <div className="flex flex-col justify-center">
            <span className="text-[2rem] font-semibold text-black">30</span>
            <span className="text-[1rem] font-semibold tracking-[-0.25px] text-black">mins</span>
          </div>
        </div>        
      </div>
      <div className="flex justify-between mt-6">
        <span className="text-[2.4rem] font-semibold tracking-[-0.6px] text-black">£4.342</span>
        <button className="px-8 py-4 text-[1.4rem] font-semibold text-[#bdbdbd] bg-black rounded-lg">Reset</button>
      </div>
    </div>
  );
}
export default Zakat;