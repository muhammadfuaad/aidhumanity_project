import Donation_history from "./donation_history";
import Dashboard_layout from "./dashboard_layout";

function Donation_history_page() {
  return (
    < Dashboard_layout dashboard_page={<Donation_history />} heading="Donation history" />
  );
}
export default Donation_history_page;