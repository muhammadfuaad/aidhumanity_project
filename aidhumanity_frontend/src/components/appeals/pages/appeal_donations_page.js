import Appeal_layout from "../appeal_layout";
import Appeal_donations from "../appeal_donations";

function Appeal_donations_page() {
  return (
    < Appeal_layout  title="Donations" appeal_page={<Appeal_donations />} />
  )
}
export default Appeal_donations_page;