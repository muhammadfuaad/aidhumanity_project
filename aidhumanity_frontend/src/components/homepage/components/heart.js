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


import heart from "../../icons/heart.svg"
function Heart() {
  return (
    <div className="relative">
      <img src={heart} className="w-20"></img>
      <div className="bg-primary rounded-full w-6 h-6 flex justify-center items-center absolute -bottom-2 -right-2">
        <p className="text-[1rem] font-bold text-white">1</p>
      </div>
    </div>
  );
}
export default Heart;