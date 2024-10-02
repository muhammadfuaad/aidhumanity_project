import Radio from "./radio";
import Input from "./input";
import Button from "./button";
function Profile() {
  return (
    <div className="bg-white rounded-2xl">          
      <div className="p-8 border-bottom-medium">
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-8">Info</p>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-12">
            < Radio marital_status="Mr" />
            < Radio marital_status="Mrs" />
            < Radio marital_status="Miss" />
            < Radio marital_status="Ms" />
            < Radio marital_status="Other" />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="sm:w-1/2 my-4 sm:my-0"><Input type="text" id="first-name" label="First Name" display_toggle="hidden" /></div>

            <div className="sm:w-1/2 my-4 sm:my-0"><Input type="text" id="last-name" label="Last Name" display_toggle="hidden" /></div>          
          </div>
        </div>
      </div> 
      <div className="p-8 border-bottom-medium">
        <p className="portal-subheading mb-8 hidden sm:block">Email</p>
        <div className="my-4 sm:my-0"><Input type="text" id="email" label="Email" display_toggle="hidden" /></div>
      </div>

      <div className="p-8">
        <p className="portal-subheading mb-8">Address</p>            
        <div className="flex flex-col space-y-8">
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-gray
          tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
            <span>United Kingdom</span>
            <img src="./icons/drop-down.svg" alt="dropdown"></img>
          </button>

          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            <div className="sm:w-1/2"><Input type="text" id="address-line-1" label="Address Line 1" display_toggle="hidden" /></div>
            <div className="sm:w-1/2"><Input type="text" id="address-line-2" label="Address Line 2" display_toggle="hidden" /></div>
          </div>

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-2/3">
              <Input type="text" id="town" label="Town" display_toggle="hidden" />            
            </div>

            <div className="w-full sm:w-1/3">
              <Input type="text" id="zip" label="ZIP/Postal" display_toggle="hidden" />            
            </div>
          </div>
          < Button text="Save Changes" type="fixed" />
        </div>
      </div>          
    </div>  
  );
}
export default Profile;