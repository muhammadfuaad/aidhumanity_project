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


function Helped() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between px-8 sm:px-48 pt-16 pb-20 sm:py-32  bg-f9">
      <div className="flex flex-col sm:w-[30%]">
        <p className="generic-heading mb-8 text-center sm:text-start">Who have<br></br> we helped?</p>
        <p className="generic-body text-center sm:text-start px-8 sm:px-0">We take pride in providing help to people around the world.</p>
      </div>
      <div className="w-full sm:w-[60%] flex gap-8 items-center flex-wrap">
          <Appeal_title img={Mosque} label="Build a Mosque" />
          <Appeal_title img={Emergency} label="Disaster & Emergency Appeals" />
          <Appeal_title img={Water_drop} label="Water for all" />
          <Appeal_title img={Sponsor_orphan} label="Sponsor an Orphan" />
          <Appeal_title img={homeless} label="Homeless" />
          <Appeal_title img={uk_projects} label="UK Projects" />
          <Appeal_title img={eid} label="Eid" />
          <Appeal_title img={ramadan} label="Ramadan" />
          <Appeal_title img={Hunger_appeal} label="Hunger Appeal" />
          <p className="text-[1.6rem] font-medium tracking-[-0.24px] text-primary-dark">and much more…</p>

      </div>
    </div>
  );
}
export default Helped;