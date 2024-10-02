import Appeal_layout from "../appeal_layout";
import Appeal_settings from "../appeal_settings";

function Appeal_donations_page() {
  return (
    < Appeal_layout  title="Settings" appeal_page={<Appeal_settings />} />
  )
}
export default Appeal_donations_page;