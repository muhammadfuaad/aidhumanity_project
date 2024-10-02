import Appeal_title from "./appeal_title";
import Mosque from "../../icons/mosque.svg";
import Water_drop from "../../icons/water-drop.svg";
import Hunger_appeal from "../../icons/hunger-appeal.svg";
import Emergency from "../../icons/emergency.svg";
import Sponsor_orphan from "../../icons/sponsor-orphan.svg";
import homeless from "../../icons/homeless.svg";
import uk_projects from "../../icons/uk-projects.svg";
import eid from "../../icons/eid.svg";
import ramadan from "../../icons/ramadan.svg";


function Distribution(props) {
  return (
    <div className={`flex flex-col bg-white w-[330px] h-[175px] p-20 rounded-3xl border-2 ${props.border_color}`}>
      <img src={props.img} className="w-20 absolute -top-10 left-[13rem]"></img>
      <p className="text-center text-primary-dark text-[1.8rem] font-normal tracking-[-0.45px]"><span className="text-black font-bold">{props.title}</span> {props.description}</p>
    </div>
  );
}
export default Distribution;