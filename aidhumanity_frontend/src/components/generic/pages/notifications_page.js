import Page_header from "../components/page_header";
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Notification from './../components/notification';

function Notifications_page() {
  return (
    
    <section>
      <div className="flex gap-12 px-64">
        
        <div className="w-1/4"><Notification img="./icons/ready.svg" title="We’ve Ready!" description="Your donation has been added to checkout and is ready the moment you are. Thanks so much for joining us in making a difference." class="bg-light-green border-green"/></div>
        <div className="w-1/4"><Notification img="./icons/bug.svg" title="We’ve Ready!" description="Please contact us directly so we can put this right without delay. We appreciate your patience." class="bg-light-red border-red"/></div>
        <div className="w-1/4"><Notification img="./icons/payment-failed.svg" title="We’ve Ready!" description="Please contact us directly so we can put this right without delay. We appreciate your patience." class="bg-light-red border-red"/></div>
        <div className="w-1/4 flex flex-col gap-8 p-8 border border-platinum rounded-3xl">
          <div className="flex gap-8">
            <img src="./icons/cookie.svg"></img>
            <div className="flex flex-col gap-2">
              <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">Can we use Cookies?</p>
              <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">They help our site run at 100% efficiency but you can opt out.</p>            
            </div>
          </div>
          <button className="self-center px-10 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
              Click Here
            </button>
        </div>
      </div>
      < Footer />
    </section>
  );
}
export default Notifications_page;