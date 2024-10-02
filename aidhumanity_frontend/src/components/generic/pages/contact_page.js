import {ReactComponent as Phone} from "../../icons/phone-volume-props.svg" 
import Email from "../../icons/email.svg";
import Contact_form from '../components/contact_form';
import Page_header from "../components/page_header";
import Yellow_ring_large from "../../icons/yellow-ring-large.png";
import Yellow_ring_small from "../../icons/yellow-ring-small.png";
import Blue_circle from "../../icons/blue-circle.png";
import Footer from "../../footer";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Generic_header_1 from './../components/generic_header_1';

function Contact_page() {
  return (
    <section className="relative overflow-hidden">
      <img src={Yellow_ring_small} className="hidden sm:block w-40 absolute top-[50rem]"></img>
      <img src={Blue_circle} className="hidden sm:block w-16 absolute top-[100rem] left-[20rem]"></img>

      <div className="hidden sm:block">< Generic_header_1 /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>

      <Page_header heading="Contact" icon="hidden" />
        <div className="px-12 sm:pl-64 sm:pr-8 pb-40">
          <p className="hidden sm:block text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Contact</p>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="flex flex-col mt-12 w-full sm:w-1/2">
                <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-16">Contact</p>
                <p className="generic-subheading mb-16">Got a Question?</p>
                <p className="generic-body mb-24">Aid Humanity is a thoughtful, caring community of like-minded individuals ready to give back and make a difference. If you’d like to know more about what we do, or have a question about how you can help, all you have to do is ask.</p>
                
                <div className='flex flex-col gap-12 sm:flex-row sm:justify-between py-20 border-y border-platinum pr-12'>
                  <div className='flex gap-4'>
                    <div className="mb-8">
                      <Phone stroke="#1d1d1d" />
                    </div>
                    <div className='flex flex-col'>
                      <p className="text-[1.1rem] font-semibold tracking-[0px] text-gray uppercase">Phone</p>
                      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">03300579957</p>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <img src={Email} className="mb-8"></img>
                    <div className='flex flex-col'>
                      <p className="text-[1.1rem] font-semibold tracking-[0px] text-gray uppercase">Email</p>
                      <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-black">info@aidhumanity.co.uk</p>
                    </div>
                  </div>
                </div>

                <p className="generic-subheading mt-16 sm:mt-12 mb-16">Company Details</p>
                <p className="generic-body mb-24">Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW</p>
              </div>

              <div className="relative">
                <img src={Yellow_ring_large} className="w-[30rem] absolute top-20 -right-40"></img>
                <img src={Yellow_ring_small} className="sm:hidden w-40 absolute -bottom-20 left-60"></img>
                <img src={Blue_circle} className="sm:hidden w-16 absolute top-[30rem] -left-12"></img>
                <Contact_form />
              </div>
            </div>     
        </div>
        
        
      <Footer/>
    </section>
  );
}
export default Contact_page;