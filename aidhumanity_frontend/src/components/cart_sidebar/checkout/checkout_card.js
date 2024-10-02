import Check_circle from "./check-circle.svg";
function Checkout_card(props) {
  return (
    <div className={`px-4 h-[5.5rem] rounded-2xl flex justify-between gap-4 items-center bg-green ${props.background}`}>
      <div className="flex space-x-2 items-center">
        <img src={Check_circle}></img>
        <p className={`text-[1.3rem] font-semibold tracking-[-0.2px] text-white ${props.text_color}`}>{props.title}</p>
      </div>
      <div>
        <p className={`text-[1.3rem] font-bold tracking-[-0.2px] text-white ${props.text_color}`}>£{props.amount}</p>
      </div>
    </div>
  )
}
export default Checkout_card;