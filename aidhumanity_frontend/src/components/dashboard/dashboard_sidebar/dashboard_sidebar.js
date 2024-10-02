import Copyright from "../../copyright";
import { Link } from "react-router-dom";
import Badge_silver from './badge_silver';
import Mobile_footer from './mobile_footer';
import Desktop_header from './desktop_header';
import Mobile_header from './../../menu_options/components/mobile_header';
function Dashboard_sidebar() { 
  return (
    <section className="h-full bg-[#f5f6f7] sm:bg-white relative overflow-hidden min-h-screen">
      <img src="./icons/footer-background-logo.svg" className="absolute -right-60 top-96 sm:hidden"></img>
      <div className="hidden sm:block">< Desktop_header /></div>
      <div className="sm:hidden">< Mobile_header title="Menu" display_logout="hidden" /></div>

      <div className="mt-8 sm:mt-0">       
        <p className="text-[1rem] font-medium tracking-[0.5px] text-[#bdbdbd] mt-12 mb-2 px-8 hidden sm:block">MENU</p>

        <ul className="text-[1.8rem] font-semibold tracking-[-0.27px] text-black leading-[2rem] sm:text-[1.2rem] sm:font-medium sm:text-black">
          <Link to={`/dashboard_page`}><li  className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer sm:border-bottom-light"><img src="./icons/dashboard.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Dashboard</span></div></li></Link>
          <Link to={`/profile_page`}><li className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer sm:border-bottom-light"><img src="./icons/profile.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Profile</span></div></li></Link>
          <Link to={`/fundraising_page`}><li className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer sm:border-bottom-light"><img src="./icons/fundraising.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Fundraising</span></div></li></Link>
          <Link to={`/security_page`}><li className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer sm:border-bottom-light"><img src="./icons/security.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Security</span></div></li></Link>
          <Link to={`/donation_history_page`}><li className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer sm:border-bottom-light"><img src="./icons/donation-history.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Donation history</span></div></li></Link>
          <Link to={`/monthly_donations_page`}><li className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer sm:border-bottom-light"><img src="./icons/monthly-donations.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Monthly donations</span></div></li></Link>
          <Link to={`/payment_methods_page`}><li className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer sm:border-bottom-light"><img src="./icons/payment-methods.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Payment methods</span></div></li></Link>
          <Link to={`/preferences_page`}><li className="px-8 sm:border-x-4 sm:border-white sm:hover:border-l-primary hover:text-primary-dark group border-bottom-light"><div className="flex justify-start space-x-4 items-center py-6 cursor-pointer"><img src="./icons/preferences.svg" className="w-8 hover:filter-none brightness-50" alt=""></img><span>Preferences</span></div></li></Link>
        </ul>
        <div className="flex justify-between px-8 mt-8 sm:hidden">
          <p className="text-[1.8rem] font-semibold tracking-[-0.27px] text-black">Languages</p>
          <img src="./icons/arrow-right-primary.svg"></img>
        </div>
        <div className="mt-10 sm:mt-20 mx-8">
          < Badge_silver />
        </div>       
      </div>
      <div className=" sm:hidden">
        < Mobile_footer />
      </div>
      <div className="absolute left-8 bottom-8 hidden sm:block">
        < Copyright />
      </div>
    </section>
  );
}
export default Dashboard_sidebar;