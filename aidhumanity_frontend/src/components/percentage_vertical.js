import Percent from "./icons/100percent.svg"
function Percentage_vertical() {
  return (
    <div className="flex flex-col">
      <p className="text-[1.8rem] tracking-[-0.9px] leading-[text-[2.4rem] font-semibold sm:tracking-[-1.2px] text-white">we transfer</p>
      <img src={Percent}></img>
      <p className="text-[1.2rem] font-semibold tracking-[-0.6px] sm:text-[1.7rem] sm:tracking-[-0.85px] text-white">of your donation</p>
    </div>
  )
}
export default Percentage_vertical;