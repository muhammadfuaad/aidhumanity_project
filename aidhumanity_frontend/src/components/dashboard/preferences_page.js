import Preferences from "./preferences";
import Dashboard_layout from "./dashboard_layout";

function Preferences_page() {
  return (
    < Dashboard_layout dashboard_page={<Preferences />} heading="Preferences" />
  );
}
export default Preferences_page;