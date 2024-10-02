import Icon_1 from "../images/refine-message.svg"
function Steps(props) {
  return (
    <div className="flex gap-20 items-center">
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center h-16 w-32 rounded-full bg-platinum"><p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">{props.number}.</p></div>
        <img src={Icon_1}></img>
      </div>
      <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] whitespace-normal pr-[30rem] mt-8">{props.text}</p>
    </div>
  );
}
export default Steps;