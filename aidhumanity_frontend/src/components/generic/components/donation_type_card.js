import Red_cross from "../../icons/red-cross.svg";
function Donation_type_card(props) {
  return (
    <div className="px-10 pt-10 pb-8 bg-white rounded-3xl flex flex-col border-2 border-green relative">
      <div className="flex justify-between items-start gap-4 mb-1">
        <p className="text-[1.2rem] font-semibold tracking-[-0.18px] text-black">{props.title}</p>
        <p className="text-[1.2rem] font-bold tracking-[-0.18px] text-black">£{props.amount}</p>
      </div>
      <div className="flex justify-between items-start gap-4">
        <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-[#999] uppercase">{props.category}</p>
        <img src={Red_cross}></img>
      </div>
      <div className="bg-green absolute -top-6 left-8 px-8 py-4 rounded-xl">
        <p className="text-[1rem] font-bold tracking-[0.15px] text-white">{props.label}</p>
      </div>
    </div>
  )
}
export default Donation_type_card;