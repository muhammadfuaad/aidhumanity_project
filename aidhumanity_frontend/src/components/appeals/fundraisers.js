import User from "../icons/user-circle.svg"
import Clock from "../icons/clock.svg"
import Progress_bar from "../dashboard/progress_bar";

function Fundraisers(props) {
  return (
   
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4 items-center">
          <img src={User} className="w-8"></img>
          <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-primary-dark">{props.name}</p>
        </div>
        <div className="w-[30%] sm:hidden">
          <Progress_bar progress="30" option="1"/>
        </div>
      
      </div>
      <div className="flex justify-between items-center ml-12">
        <div className="flex gap-4">
          <p className="text-[1.8rem] font-semibold tracking-[-0.27px] text-primary">{props.amount}</p>
          <div className="flex gap-2 items-center text-[1rem] font-medium tracking-[-0.15px] text-body">
            <p>raised by</p>
            <img src={User}></img>
            <p>12 people</p>
          </div>
        </div>
        <div className="w-[30%] hidden sm:block">
          <Progress_bar progress="30" option="1"/>
        </div>

      </div>
    </div>
   
  )
}
export default Fundraisers;