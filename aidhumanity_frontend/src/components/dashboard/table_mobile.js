function Table_mobile() {
  return (
    <div className="flex flex-col w-full bg-white pt-7 pb-4">
      <div className="flex gap-2">
        <img src="./icons/user-circle.svg" className="w-6"></img>
        <span className="text-[1.1rem] font-semibold tracking-[-0.28px] text-primary-dark">Ron Hill</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <span className="ml-10 text-[1.1rem] font-normal tracking-[-0.28px] text-black">Great Britain</span>
          <div className="flex gap-2 items-center">
            <img src="./icons/calendar-clock.svg" className="brightness-0 w-6"></img>
            <span className="text-[1.1rem] font-medium tracking-[-0.28px] text-black">Tue 12 Dec, 08:15</span>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <span className="text-[1.1rem] font-semibold tracking-[-0.28px] text-primary">£231.50</span>
          <img src="./icons/arrow-right.svg" className="w-4"></img>
        </div>
      </div>
    </div>
  );
}
export default Table_mobile;