import Radio from "../../../dashboard/radio";
function Cause(props) {
  return (  
    <div className="flex space-x-4 items-center">
      <Radio />
      <img src={`./icons/${props.img}.svg`}></img>
      <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">{props.label}</p>
    </div>      
  )
} 
export default Cause;