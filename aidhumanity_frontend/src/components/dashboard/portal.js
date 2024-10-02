import Dashboard_sidebar from "./dashboard_sidebar/dashboard_sidebar";
import Profile_sidebar from "./profile_sidebar/profile_sidebar";

function Portal() {
  return (
    <section className="flex justify-between">
      < Dashboard_sidebar />
      < Profile_sidebar />
    </section>
  );
}
export default Portal;