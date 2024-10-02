function Funding_stats(props) {
  return (
    <div className={`px-8 py-10 rounded-3xl flex flex-col ${props.classNames}`}>
      <div className="flex justify-between items-start">
        <span className="text-[3rem] font-bold tracking-[-0.75px] text-black">{props.title}</span>
        <img src={`./icons/${props.symbol}-circle.svg`}></img>
      </div>
      <span className="text-[2.4rem] font-semibold tracking-[-0.6px] text-black">{props.amount}</span>
      <div className="mt-8 flex space-x-2">
        <img src={`./icons/arrow-${props.img}.svg`}></img>
        <span className="text-[1.2rem] font-semibold tracking-[-0.18px] text-[#fff]">{props.percentage}</span>
      </div>
      <span className="text-[1rem] font-normal tracking-[-0.18px] text-[#fff]">Than last month</span>
    </div>
  );
}
export default Funding_stats;