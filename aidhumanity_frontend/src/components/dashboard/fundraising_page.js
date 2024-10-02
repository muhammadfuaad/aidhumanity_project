import Fundraising from "./fundraising";
import Dashboard_layout from "./dashboard_layout";

function Security_page() {
  return (
    <Dashboard_layout dashboard_page={<Fundraising />} heading="Fundraising" />
  );
}
export default Security_page;