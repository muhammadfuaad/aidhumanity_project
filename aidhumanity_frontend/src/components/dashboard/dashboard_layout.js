import Dashboard_sidebar from "./dashboard_sidebar/dashboard_sidebar";
import Profile_sidebar from "./profile_sidebar/profile_sidebar";
import Dashboard_bottom_links from "./dashboard_bottom_links";
import Dashboard_header_mobile from "./dashboard_header_mobile";

function Dashboard_layout(props) {
  return (
    <section className="flex overflow-hidden">
      <div className="w-[20%] min-w-[25rem] hidden sm:block">
        < Dashboard_sidebar />
      </div>
      <div className="w-full sm:w-[50%] h-full sm:h-auto relative">
        <div className="bg-[#f5f6f7] h-full w-full min-h-screen">
          <div className="sm:hidden">< Dashboard_header_mobile /></div>
          <div className="mt-8 sm:mt-0 px-8 sm:px-16 h-28 flex items-center sm:border-bottom-light">
            <p className="portal-heading">{props.heading}</p>
          </div>
          <div className="px-8 sm:p-16 pb-20 mt-4 sm:mt-0 relative">
            {props.dashboard_page}
          </div>         
        </div>
        <div className="absolute left-8 bottom-8 hidden sm:block ">
          < Dashboard_bottom_links />
        </div>
      </div>
      <div className="w-[30%] min-w-[30rem] hidden sm:block">
        <Profile_sidebar />
      </div>   
    </section>
  );
}
export default Dashboard_layout;