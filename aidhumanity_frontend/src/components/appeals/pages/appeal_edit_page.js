import Appeal_layout from "../appeal_layout";
import Appeal_edit from "../appeal_edit";

function Appeal_donations_page() {
  return (
    < Appeal_layout  title="Edit" appeal_page={<Appeal_edit />} />
  )
}
export default Appeal_donations_page;