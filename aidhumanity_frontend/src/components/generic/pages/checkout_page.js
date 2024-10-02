import Page_header from "../components/page_header";
import Radio from "../../dashboard/radio";
import Input from "../../dashboard/input";
import Donation_type_card from "../components/donation_type_card";
import Check_circle from "../../icons/check-circle.svg"
import Checkout_card from "../../cart_sidebar/checkout/checkout_card";
import Admin_love from "../../icons/donate-to-admin.svg"
import Toggle from "../../dashboard/toggle";
import Gift from "../../icons/gift.svg"
import Paypal from "../../icons/paypal.png"
import Visa from "../../icons/visa.png"
import Mastercard from "../../icons/mastercard.png"
import Stripe from "../../icons/stripe.png"
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Footer_mobile from "../../footer_mobile";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Radio_component from "../components/radio_component";
function Checkout_page() {
  return (
    <section>
      <div className="hidden sm:block">< Generic_header /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <Page_header heading="Checkout" icon="hidden" />
      <div className="px-12 sm:px-64 pt-12 bg-[#f5f6f7]">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col p-8 rounded-2xl bg-white border-2 border-primary w-full sm:w-[30%] h-fit">
            <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-8">Donation Summary</p>
            <p className="text-[1.6rem] font-semibold tracking-[-0.4px] text-body mb-12">You are donating to <span className="text-red">3 causes</span></p>
            <div className="flex flex-col gap-12">
              < Donation_type_card label="Monthly" title="Sponsor a child for one year" category="MOST NEEDED, DONATION" amount="360" />
              < Donation_type_card label="Monthly" title=<div>Water Solutions<br></br> (Sadaqah Jariyah)</div> category="MOST NEEDED, DONATION" amount="15" />
              < Donation_type_card label="Monthly" title="Water Tankers" category="MOST NEEDED, DONATION" amount="5" />
              <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-green rounded-xl">
                Add Donation
              </button>
              <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black">Help us further</p>
              <div className={`px-4 h-[5.5rem] rounded-2xl flex justify-between gap-4 items-center bg-[#FFB1B1]`}>
                <div className="flex space-x-2 items-center">
                  <img src={Check_circle}></img>
                  <img src={Admin_love}></img>
                  <p className={`text-[1.3rem] font-semibold tracking-[-0.2px] text-black`}>Donate to Admin cost 1.5%</p>
                </div>
                <div>
                  <p className="text-[1.3rem] font-bold tracking-[-0.2px] text-black">£100</p>
                </div>
              </div>
              < Checkout_card title="Rescue a street child" amount="10"/>
              < Checkout_card title="Food pack for a family" amount="100"/>
              <div className="bg-primary p-12 rounded-3xl">
                <div className="flex justify-between items-center">
                  <p className="text-[1.4rem] font-semibold tracking-[0px] text-white uppercase">Total</p>
                  <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-white">£380.00</p>
                </div>
              </div>          
            </div>
          </div>

          <div className="w-full sm:w-[70%] flex flex-col pb-[100px]">              
            <div className="bg-white rounded-2xl">          
              <div className="p-8 border-bottom-medium">
                <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-8">Info</p>
                <div className="flex flex-col space-y-8">
                  <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-12">
                    < Radio_component label="Mr" gap="gap-3"/>
                    < Radio_component label="Mrs" gap="gap-3"/>
                    < Radio_component label="Miss" gap="gap-3"/>
                    < Radio_component label="Ms" gap="gap-3"/>
                    < Radio_component label="Other" gap="gap-3"/>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:space-x-8">
                    <div className="sm:w-1/2 my-4 sm:my-0"><Input type="text" id="first-name" label="First Name" display_toggle="hidden" /></div>

                    <div className="sm:w-1/2 my-4 sm:my-0"><Input type="text" id="last-name" label="Last Name" display_toggle="hidden" /></div>          
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-8">
                    <div className="sm:w-1/2 my-4 sm:my-0"><Input type="text" id="email" label="Email" display_toggle="hidden" /></div>
                    <div className="sm:w-1/2 my-4 sm:my-0"><Input type="text" id="phone" label="Phone" display_toggle="hidden" /></div>          
                  </div>
                </div>
              </div> 
              
              <div className="p-8 border-bottom-medium">
                <p className="portal-subheading mb-8">Billing Address</p>            
                <div className="flex flex-col space-y-8">
                  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-gray
                  tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
                    <span>United Kingdom</span>
                    <img src="./icons/drop-down-black.svg" alt="dropdown"></img>
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

                  <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                    <div className="sm:w-1/2"><Input type="text" id="address-line-1" label="Address Line 1" display_toggle="hidden" /></div>
                    <div className="sm:w-1/2"><Input type="text" id="address-line-2" label="Address Line 2" display_toggle="hidden" /></div>
                  </div>

                  <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                    <div className="w-full sm:w-2/3">
                      <Input type="text" id="town" label="Town" display_toggle="hidden" />            
                    </div>

                    <div className="w-full sm:w-1/3">
                      <Input type="text" id="zip" label="ZIP/Postal" display_toggle="hidden" />            
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-bottom-medium">
                <p className="portal-subheading mb-8">Tell us about your donation</p>            
                <div className="flex flex-col space-y-8">
                  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-full text-[1.3rem] font-medium text-gray
                  tracking-[0px] px-4 py-5 inline-flex justify-between items-center border-light rounded-xl" type="button">
                    <span>Where did you hear about us</span>
                    <img src="./icons/drop-down-black.svg" alt="dropdown"></img>
                  </button>
                  <div className="relative">
                    <textarea type="text" id="title" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px] " rows="4" placeholder=" "></textarea>
                    <label for="title" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Add any comments about your donation (Optional)</label>
                  </div>
                </div>
                <p className="text-[1rem] font-normal tracking-[-0.25px] text-[#999] mt-2">Max. characters: 200</p> 

              </div>

              <div className="p-8 border-bottom-medium">
                <p className="portal-subheading mb-8">Additional Information</p>    
                <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-4">We’d like to keep you updated about our projects and fundraising activities. Please advise whether you are happy to be contacted by email, phone or SMS:</p> 
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <Toggle/>
                    <p className="text-[1.4rem] font-medium tracking-[0px] text-black">Yes, I’m happy to be contacted by Email</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Toggle/>
                    <p className="text-[1.4rem] font-medium tracking-[0px] text-black">Yes, I’m happy to be contacted by SMS</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Toggle/>
                    <p className="text-[1.4rem] font-medium tracking-[0px] text-black">Yes, I’m happy to be contacted by Phone</p>
                  </div>
                </div>
                  <div className="flex gap-8 items-center p-8 rounded-3xl bg-primary-light mt-8 mb-4">
                    <img src={Gift} className="w-10"></img>
                    <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black">Gift Aid</p>
                  </div>
                  <p className="text-[1.5rem] font-semibold tracking-[-0.38px] text-body mt-10 mb-6 sm:mb-4 sm:mt-0">If you are a UK taxpayer we can increase your donation by 25%, this will add £16.25 to your donation without you paying a further penny!</p>
                  <div className="flex gap-8 mb-8">
                    <div className="flex gap-2">
                      <Radio/>
                      <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">Yes</p>
                    </div>
                    <div className="flex gap-2">
                      <Radio/>
                      <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">No</p>
                    </div>
                  </div>
                  <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-4">I would like Muslim Charity to treat all donations I have made in the past, this donation and all my future donations until I notify otherwise as Gift Aid donations. I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all my donations in that tax year it is my responsibility to pay any difference. Please inform Muslim Charity if you want to cancel the declaration, change your name or address or no longer pay sufficient tax. The Gift Aid amount claimed will be used towards fundraising/administrative costs as well as our Where Most Needed fund to save and transform more lives.</p>
                
              </div>          

              <div className="p-8">
                <p className="portal-subheading mb-8">Payment Methods</p>            
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex justify-between bg-white p-8 rounded-xl border border-platinum">
                    <div className="flex gap-8 items-center">
                      <Radio/>
                      <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">Pay with card</p>
                    </div>
                    <div className="flex gap-4">
                      <img src={Visa} className="mix-blend-luminosity w-[4.3rem] h-[1.4rem]"></img>
                      <img src={Mastercard} className="mix-blend-luminosity w-[2.9rem] h-[1.8rem]"></img>
                    </div>
                  </div>

                    <div className="flex justify-between bg-white p-8 rounded-xl border border-platinum">
                      <div className="flex gap-8 items-center">
                        <Radio/>
                        <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">Pay with Paypal</p>
                      </div>
                      <div className="flex gap-4">
                        <img src={Paypal} className="mix-blend-luminosity w-[9rem] h-[2rem]"></img>
                      </div>
                    </div>

                    <div className="flex justify-between bg-white p-8 rounded-xl border border-platinum">
                      <div className="flex gap-8 items-center">
                        <Radio/>
                        <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">Pay with Stripe</p>
                      </div>
                      <div className="flex gap-4">
                        <img src={Stripe} className="mix-blend-luminosity w-[5rem] h-[2rem]"></img>
                      </div>
                    </div>
                </div>

                <div className="p-8 rounded-2xl bg-[#f5f6f7] mb-6">
                  <p className="text-[1.5rem] font-semibold tracking-[-0.38px] text-black mb-8">Enter your card details</p>
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="relative w-full sm:w-1/5">
                      <input type="text" id="number" className="focus:outline-none bg-white block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                      <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Card Number</label>
                    </div>
                    <div className="relative w-full sm:w-1/5">
                      <input type="text" id="number" className="focus:outline-none bg-white block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                      <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Card Holder Name</label>
                    </div>
                    <div className="relative w-full sm:w-[15%]">
                      <input type="text" id="number" className="focus:outline-none bg-white block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                      <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Expiry Date</label>
                    </div>
                    <div className="relative w-full sm:w-[15%]">
                      <input type="password" id="number" className="focus:outline-none bg-white block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                      <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Security Code</label>
                      <img src="./icons/info.png" className="w-6 absolute right-8 top-6"></img>
                    </div>
                  </div>
                  
                </div>
                <button className="hidden sm:block w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
                  Proceed to payment
                </button>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
      <button className="sm:hidden block fixed bottom-0 left-0 w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
        Proceed to payment
      </button>
    </section>
  );
}
export default Checkout_page;