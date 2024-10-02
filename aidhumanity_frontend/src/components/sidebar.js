import React from "react";
import { useHistory } from 'react-router-dom';
import {isMobile} from 'react-device-detect';

function Sidebar({active}) {

  let history = useHistory();
  const [showMenu, setshowMenu] = React.useState(false);

  if(!isMobile){

    return(

      <div className='w-sidebar h-fit bg-white shadow-lg border-l-2 relative z-10'>
          <div className='flex items-center justify-between py-5 border-b-2 px-6 h-20'>
            <div className="flex items-center gap-2 w-auto">
              <img className="w-36" src="images/logo/logo_aid-humanity.svg" alt="" />
            </div>
            <div className="flex items-center gap-2 w-auto">
              <img className="w-4 cursor-pointer" src="images/icons/dashboard/icon_bars.svg" alt="" />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xs pl-6">MENU</p>
            <ul className="flex flex-col">
              <li onClick={()=>history.push('/dashboard')} className={active == 'dashboard' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                  <img src="images/icons/dashboard/icon_dashboard.svg" className="w-4" alt="" />
                  <p className="text-xs font-medium">Dashboard</p>
                </div>
              </li>
              <li onClick={()=>history.push('/profile')} className={active == 'profile' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Profile</p>
              </div>
              </li>
              <li onClick={()=>history.push('/fundraising')} className={active == 'funds' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_fundraising.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Fundraising</p>
              </div>
              </li>
              <li onClick={()=>history.push('/security')}  className={active == 'security' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Security</p>
              </div>
              </li>
              <a href="/donation_history"><li className={active == 'donation' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_history.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Donation History</p>
              </div>
              </li></a>
              <li onClick={()=>history.push('/monthly_donations')} className={active == 'monthly' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_monthly-donations.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Monthly donations</p>
              </div>
              </li>
              <li onClick={()=>history.push('/payment_methods')} className={active == 'payment' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_cash-wallet.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Payment methods</p>
              </div>
              </li>
              <li onClick={()=>history.push('/preferences')} className={active == 'prefer' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_sliders-h-circle.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Preferences</p>
              </div>
              </li>
            </ul>
            <div className="px-6">
              <div className="bg-blue rounded-xl px-3 py-4 mt-14">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full border-2 border-white">
                    <img src="images/icons/dashboard/badge_silver.svg" alt="" />
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-sm">Level Silver</p>
                    <p className="text-xs">total donation: £834.00</p>
                    <p className="text-vs">until level gold still remains: £176.00</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xs mx-auto absolute bottom-5 left-6">© 2022 Aid Humanity. All rights reserved.</p>
          </div>
      </div> 

    );
    
  } else{

    return (

        <div className='w-sidebar h-fit bg-white shadow-lg border-l-2 relative z-10'>
          <div className='flex items-center justify-between py-5 border-b-2 px-6 h-20'>
            <div className="flex items-center gap-2 w-auto">
              <img className="w-36" src="images/logo/logo_aid-humanity.svg" alt="" />
            </div>
            <div className="flex items-center gap-2 w-auto">
              <img onClick={()=>history.push('/appeal')} className="w-5" src="images/icons/dashboard/icon_plus-cirle.svg" alt="" />
              <img onClick={()=>history.push('/appeal')} className="w-5" src="images/icons/dashboard/icon_user-circle.svg" alt="" />
              <img onClick={()=>setshowMenu(true)} className="w-4 cursor-pointer" src="images/icons/dashboard/icon_bars.svg" alt="" />
            </div>
          </div>
          { showMenu ?
          <div className="w-full bg-white h-screen absolute top-0 left-0 pt-6">
            <p className="text-sm font-semibold pl-6 flex items-center gap-2"><img onClick={()=>setshowMenu(false)} className="w-3 h-3" src="images/icons/dashboard/angle-left.svg" alt="" /> MENU</p>
            <ul className="flex flex-col mt-4">
              <li onClick={()=>history.push('/dashboard')} className={active == 'dashboard' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                  <img src="images/icons/dashboard/icon_dashboard.svg" className="w-4" alt="" />
                  <p className="text-xs font-medium">Dashboard</p>
                </div>
              </li>
              <li onClick={()=>history.push('/profile')} className={active == 'profile' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Profile</p>
              </div>
              </li>
              <li onClick={()=>history.push('/fundraising')} className={active == 'funds' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_fundraising.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Fundraising</p>
              </div>
              </li>
              <li onClick={()=>history.push('/security')}  className={active == 'security' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Security</p>
              </div>
              </li>
              <a href="/donation_history"><li className={active == 'donation' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_history.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Donation History</p>
              </div>
              </li></a>
              <li onClick={()=>history.push('/monthly_donations')} className={active == 'monthly' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_monthly-donations.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Monthly donations</p>
              </div>
              </li>
              <li onClick={()=>history.push('/payment_methods')} className={active == 'payment' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_cash-wallet.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Payment methods</p>
              </div>
              </li>
              <li onClick={()=>history.push('/preferences')} className={active == 'prefer' ? "px-6 cursor-pointer border-l-4 border-blue" : "px-6 cursor-pointer border-l-4 border-white" }>
                <div className="flex gap-2 py-3 border-b text-black">
                <img src="images/icons/dashboard/icon_sliders-h-circle.svg" className="w-4" alt="" />
                <p className="text-xs font-medium">Preferences</p>
              </div>
              </li>
            </ul>
            <div className="px-6">
              <div className="bg-blue rounded-xl px-3 py-4 mt-14">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full border-2 border-white">
                    <img src="images/icons/dashboard/badge_silver.svg" alt="" />
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-sm">Level Silver</p>
                    <p className="text-xs">total donation: £834.00</p>
                    <p className="text-vs">until level gold still remains: £176.00</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xs mx-auto absolute bottom-5 left-6">© 2022 Aid Humanity. All rights reserved.</p>
          </div> : null}
        </div>     

    );
  }

}

export default Sidebar;