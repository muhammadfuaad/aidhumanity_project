import Page_header from "../components/page_header";
import Icon_1 from "../images/yellow-quotes.svg"
import Generic_header_1 from "../components/generic_header_1";
import Footer from "../../footer";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Fundraiser_step from "../components/fundraiser_step";
import Footer_mobile from '../../footer_mobile';

function Fundraiser_page() {
  return (
    <section>
      <div className="hidden sm:block">< Generic_header_1 /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <Page_header heading="Become a Fundraiser" icon="hidden" />
      <div className="flex flex-col pt-16 pb-20">
        <div className="px-12 sm:pl-64 sm:pr-0">
          <p className="hidden sm:block text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Become a Fundraiser</p>
          <div className="flex flex-col">
            <div className="flex sm:gap-56">
              <div className="w-full sm:w-[60%] flex flex-col sm:pb-[100px]">
                <div className="flex flex-col">
                  <p className="generic-heading mb-12">Become a Fundraiser</p>
                  <p className="generic-body">There’s nothing better in life than deciding you’re going to engage in an activity that makes life better for someone else. That’s why we want to make becoming a fundraiser as quick and easy as it should be:</p>
                </div>     
              </div>
              <div className="hidden sm:block w-[40%]">
                <img src="./images/heart-hands.png" className="rounded-l-3xl h-full" />
              </div>
            </div>
            <div className="mt-16 sm:-mt-32 flex flex-col items-center sm:flex-row">
              <div className="w-full sm:w-[70%] flex flex-col gap-16 sm:flex-row sm:justify-between">
                <div className="w-full sm:w-[20%]"><Fundraiser_step number="1" img="./icons/create-account.svg" description="Join us by creating an account with the click of a button" rule=""/></div>
                <div className="w-full sm:w-[20%]"><Fundraiser_step number="2" img="./icons/register.svg" description="Find a cause that means something to you right now" rule=""/></div>
                <div className="w-full sm:w-[20%]"><Fundraiser_step number="3" img="./icons/donate.svg" description="Raise funds and source donations to make the world a better place" rule="hidden"/></div>
              </div>
              
              <button className="hidden sm:block mt-80 ml-20 px-16 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
                Create An Account Now
              </button>
            </div>  
                  
          </div>
          
        </div>
        <div className="sm:hidden w-full pl-12 mt-16">
          <img src="./images/heart-hands.png" className="rounded-l-3xl h-full" />
        </div>
        <div className="px-12 sm:hidden mt-12">
          <button className="w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
            Create An Account Now
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-60 px-12 sm:pl-0 sm:pr-12 mt-12 sm:mt-52">
          <div className="sm:w-1/2 hidden sm:block"><img src="./images/child-watching.png"  className="rounded-r-3xl h-full"/></div>
          <div className="w-full sm:w-1/2 flex flex-col mt-12">
            <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-8">Searching for inspiration?</p>
            <p className="generic-body">Explore our projects page for ideas on how you can help, or consider a few of the following if you want to look for a good cause you feel a closer personal connection to.</p>
            <div className="flex flex-col gap-4 mt-16 sm:mt-8 mb-20">
              <div className="p-10 rounded-3xl border border-platinum">
                <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">The unrest in Yemen is displacing millions and causing widespread famine</p>
              </div>

              <div className="p-10 rounded-3xl border border-platinum">
                <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">Authoritarian rule in Afghanistan continues to limit education and healthcare</p>
              </div>

              <div className="p-10 rounded-3xl border border-platinum">
                <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">Civil unrest in Sri Lanka is causing widespread hardship and unemployment</p>
              </div>

              <div className="p-10 rounded-3xl border border-platinum">
                <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">Seasonal devastation continues to kill millions every year in Bangladesh</p>
              </div>
            </div>
            <p className="generic-body mb-16 sm:mb-0">The key thing that each and every one of these issues has in common is that they can be solved when we all come together. Give it some thought and then join us in making a real difference.</p>
          </div>
        </div>
        <div className="w-full sm:hidden pr-12"><img src="./images/child-watching.png"  className="rounded-r-3xl h-full"/></div>

        <div className="flex flex-col items-center px-12 sm:mx-0 mt-28 sm:mt-20">
          <div className="flex gap-16 items-center self-center mb-16 px-8 sm:px-0">
            <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-primary">We can’t do this without you…</p>
            <img src={Icon_1} className="self-end"></img>
          </div>
          <div className="w-full flex flex-col items-center sm:ml-24">
            <button className="mb-8 self-center w-full sm:w-auto sm:px-28 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
              Donate Now
            </button>
            <p className="self-center text-[1.8rem] font-bold tracking-[-0.45px] text-black">Still waiting...?</p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </section>
  );
}
export default Fundraiser_page;