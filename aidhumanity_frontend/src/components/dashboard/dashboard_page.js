import Dashboard from "./dashboard";
import Dashboard_layout from "./dashboard_layout";

function Dashboard_page() {
  return (
    < Dashboard_layout dashboard_page={<Dashboard />} heading="Dashboard" />
  );
}
export default Dashboard_page;