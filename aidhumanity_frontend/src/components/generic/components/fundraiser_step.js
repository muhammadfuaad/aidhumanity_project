import Icon_1 from "../images/create-account.svg"
import Icon_2 from "../images/register.svg"
import Icon_3 from "../images/donate.svg"
import Icon_4 from "../images/text-link.svg"
import Icon_5 from "../images/take-link.svg"
import Icon_6 from "../images/black-check-green-circle.svg";
function Fundraiser_step(props) {
  return (
      <div className="flex flex-col items-center">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-platinum relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">{props.number}.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={props.img}></img>
            <div className={`hidden sm:block w-40 h-[1px] bg-platinum absolute left-64 top-32 ${props.rule}`}></div>  
          </div>
        </div>
        <p className="text-center sm:text-start text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">{props.description}</p>
      </div>

      
      
      

    
  );
}
export default Fundraiser_step;