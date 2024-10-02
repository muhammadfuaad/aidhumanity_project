import Dashboard_layout from "./dashboard_layout";
import Monthly_donations from "./monthly_donations";

function Monthly_donations_page() {
  return (
    < Dashboard_layout dashboard_page={<Monthly_donations />} heading="Monthly donations" />
  );
}
export default Monthly_donations_page;