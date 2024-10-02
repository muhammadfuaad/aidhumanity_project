import Security from "./security";
import Dashboard_layout from "./dashboard_layout";

function Security_page() {
  return (
    <Dashboard_layout dashboard_page={<Security />} heading="Security" />
  );
}
export default Security_page;