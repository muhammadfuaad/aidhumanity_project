import Dashboard_table_desktop from "../dashboard_table_desktop";
import Appeal_status_1 from "./appeal_status_1";
import Circular_chart from "./circular_chart";
import Line_chart from "./line_chart";
import Table_mobile from './table_mobile';
import Copyright from "../copyright";

function Dashboard() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="rounded-2xl bg-white">
        <div className="p-8 border-bottom-medium">
          <div className="flex justify-between items-center">
            <p className="portal-subheading">Statisitics</p>
            <div className="flex space-x-4 items-center">
              <img src="./icons/calendar-clock.svg" className="hidden sm:inline-block"></img>
              <img src="./icons/calendar.svg" className="sm:hidden"></img>
              <p className="text-[1.3rem] font-medium tracking-[0px] text-gray whitespace-nowrap hidden sm:inline-block">Last 7 Days</p>
              <img src="./icons/drop-down.svg" className="w-4"></img>             
            </div>
          </div>
        </div>
        <div className="p-8">
          < Line_chart />
        </div>
      </div>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
        <div className="rounded-2xl bg-white w-full sm:w-[60%]">
          <div className="p-8 border-bottom-medium">
            <div className="flex justify-between items-center">
              <p className="portal-subheading">Fundraising</p>
              <a href="#" className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark">View All</a>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col space-y-6">
              <Appeal_status_1 title="Pakistan Floods" category="Disaster & Emergency Appeals" amount_raised="£113"
              amount_remaining="£243" supporters="12" eligibility="Z" />
              <Appeal_status_1 title="Water Hands Pumps" category="Water for All" amount_raised="£142"
              amount_remaining="£234" supporters="4" eligibility="Z" />
            </div>
          </div>
        </div>
      
        <div className="rounded-2xl bg-white w-full sm:w-[40%]">
          <div className="p-8 border-bottom-medium">
            <div className="flex justify-between items-center">
              <p className="portal-subheading">Appeal Type</p>
            </div>
          </div>
          <div className="p-8">< Circular_chart /></div>
        </div>
      </div>
      <div className="rounded-2xl bg-white mb-16">
        <div className="p-8 border-bottom-medium">
          <div className="flex justify-between items-center">
            <p className="portal-subheading">Donation history</p>
            <a href="#" className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark">View All</a>
          </div>
        </div>
        <div className="px-8 pb-8 hidden sm:block">
          <Dashboard_table_desktop />
        </div>
        <div className="flex flex-col px-6 sm:hidden">
          <div className="border-bottom-light">< Table_mobile /></div>
          <div className="border-bottom-light">< Table_mobile /></div>
          <div className="border-bottom-light">< Table_mobile /></div>
          <div>< Table_mobile /></div>
        </div>
      </div>
      <div className="absolute bottom-8 sm:hidden">
        < Copyright />
      </div>
    </div>   
  );
}
export default Dashboard;
  