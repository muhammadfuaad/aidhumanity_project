import User from "../icons/user-circle.svg"
import Clock from "../icons/clock.svg"

function Recent_donors(props) {
  return (
   
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <div className="flex gap-4 items-center">
          <img src={User} className="w-8"></img>
          <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-primary-dark">{props.name}</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src={Clock}></img>
          <p className="text-[1rem] font-medium tracking-[-0.15px] text-[#bdbdbd] whitespace-nowrap">{props.time}</p>
        </div>
      
      </div>
      <div className="flex flex-col ml-12">
        <p className="text-[1.2rem] font-normal tracking-[-0.18px] text-gray leading-[1.6rem] mb-2">{props.description}</p>
        <p className="text-[1.4rem] font-semibold tracking-[-0.21px] text-primary">{props.amount} <span className="text-[1.2rem] font-medium tracking-[-0.18px]">{props.gift_aid}</span></p>
      </div>
    </div>
   
  )
}
export default Recent_donors;