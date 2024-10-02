import Radio from "../../../dashboard/radio";
function Ways(props) {
  return (  
    <div className="flex space-x-3 items-start">
      <Radio />
      <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">{props.label}</p>
    </div>      
  )
} 
export default Ways;