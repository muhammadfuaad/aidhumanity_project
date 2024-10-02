import Page_header from "../components/page_header";
import Yellow_ring_large from "../../icons/yellow-ring-large.png";
import Yellow_ring_small from "../../icons/yellow-ring-small.png";
import Blue_circle from "../../icons/blue-circle.png";
import Footer from "../../footer";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Zakat_calculator from "../components/zakat_calculator";
import Scholar_verified from './../components/scholar_verified';
import Generic_header_1 from './../components/generic_header_1';

function Zakat_calculator_page() {
  return (
    <section className="relative overflow-hidden">
      <img src={Yellow_ring_small} className="hidden sm:block w-40 absolute top-[50rem]"></img>

      <div className="hidden sm:block">< Generic_header_1 /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>

      <Page_header heading="Zakat Calculator" icon="hidden" />
        <div className="px-12 sm:pl-64 sm:pr-8 pb-40">
        <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Zakat Calculator</p>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="w-1/2 flex flex-col">
              <div className="flex flex-col gap-10">
                <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">Zakat Calculator</p>
                
                <p className="generic-subheading">Simplifying your Zakat calculation</p>
                <p className="generic-body">Calculating your Zakat isn’t as difficult as you may think. We find that breaking your assets down into different categories makes the Zakat calculation process really simple.</p>
                <p className="generic-body"> We have broken down the calculation process into Zakatable assets (gold, silver, cash, savings, business assets etc.) and Deductible liabilities (money you owe, other outgoings due) so you can calculate the Zakat you owe easily.</p>
                <p className="generic-body"> The amount of Zakat you need to pay will be determined once you have calculated the value of your net assets. You then need to see whether your net assets are equal to, or exceed, the <span className="font-semibold text-primary">Nisab</span> threshold.</p>

                <p className="generic-subheading">Using the Zakat calculator</p>
                <p className="generic-body">Enter all assets that have been in your possession over a lunar year into the Zakat calculator. This will then give you the total amount of Zakat owed.</p>
                <p></p>

                <p className="generic-subheading">Zakat Scholar: Providing specialist advice</p>
                <p className="generic-body">We understand that calculating your Zakat can be daunting, and even confusing. Therefore, we work with a dedicated <span className="font-semibold text-primary">Zakat scholar</span> during Ramadan to provide a specialised advice service. This service allows you to speak directly to a learned scholar via email or telephone.</p>
                <p className="generic-body"> Please note: the Zakat scholar is only available <span className="font-semibold">during Ramadan from 3 to 8pm (Monday to Friday only)</span>. The scholar can therefore only call back during these time periods.</p>

                <p className="generic-subheading">What is Nisab?</p>
                <p className="generic-body">The <span className="font-semibold text-primary">nisab</span> is the minimum amount of wealth a Muslim must possess before they become eligible to pay Zakat. This amount is often referred to as the nisab threshold.</p>
                <p className="generic-body"> Gold and silver are the two values used to calculate the nisab threshold. Therefore the nisab is the value of 87.48 grams of gold or 612.36 grams of silver.</p>

                <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-black">Current Nisab threshold (as of 06/04/2022):</p>
                <ul className="marker:text-primary list-outisde list-disc ml-8">
                  <li className="pl-8">Using value of silver (612.36 grams) – approximately £366.80</li>
                  <li className="pl-8">Using value of gold (87.48 grams) – approximately £4,139.55</li>
                </ul>
                <p className="generic-body mt-4">Visit our Zakat page for an extensive list of <span className="font-semibold text-primary">Zakat FAQs</span>. You can also watch this <span className="font-semibold text-primary">YouTube video series</span> where scholars answer Zakat related questions.</p>
                <Scholar_verified />             
              </div>
            </div>
            <div className="relative">
              <img src={Yellow_ring_large} className="w-[30rem] absolute top-20 -right-40"></img>
              <img src={Yellow_ring_small} className="sm:hidden w-40 absolute -bottom-20 left-60"></img>
              <img src={Blue_circle} className="sm:hidden w-16 absolute top-[30rem] -left-12"></img>
              <Zakat_calculator />
            </div>
          </div>     
        </div>
        
        
      <Footer/>
    </section>
  );
}
export default Zakat_calculator_page;