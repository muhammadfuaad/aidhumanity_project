import {ReactComponent as Check_circle} from "./check-circle.svg";
function Check(props) {
  return (  
    <div className="flex flex-col">
      <div className="flex space-x-2 items-center mt-2 mb-1">
        <div className="group">
          <div className="flex group-hover:hidden w-8">< Check_circle stroke="" /></div>
          <div className="hidden group-hover:flex w-8 cursor-pointer"><img src="./icons/green-check-circle.svg"></img></div>
        </div>
        <p>£{props.amount}</p>
      </div>
      <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-spanish-gray">{props.title}<br></br>{props.category}</p>
    </div>      
  )
} 
export default Check;

