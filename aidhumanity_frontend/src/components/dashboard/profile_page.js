import Dashboard_layout from "./dashboard_layout";
import Profile from "./profile";

function Profile_page() {
  return (
    < Dashboard_layout dashboard_page={<Profile />} heading="Profile" />
  );
}
export default Profile_page;