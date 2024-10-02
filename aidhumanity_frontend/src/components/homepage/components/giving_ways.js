import donation_1 from "../../icons/donation-1.png"
import donation_2 from "../../icons/donation-2.png"
import donation_3 from "../../icons/donation-3.png"
import orange from "../../icons/orange-1.png"

function Giving_ways(props) {
  return (
    <div className="h-[23rem] sm:h-[17.5rem] flex items-center p-12 gap-12 border-platinum border-2 rounded-xl">
      <div className="flex flex-col sm:flex-row items-center gap-12">
        <p className="text-primary-dark text-[38px] font-medium tracking-[-0.95px]">{props.number}.</p>
        <div className="w-40 flex items-center justify-center"><img src={props.img} className={`${props.dimensions}`}></img></div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-black text-[1.8rem] font-bold tracking-[-0.45px] mb-4">{props.title}</p>
        <p className="text-spanish-gray text-[1.6rem] font-normal tracking-[-0.4px]">{props.description}</p>
      </div>
    </div>
  );
}
export default Giving_ways;