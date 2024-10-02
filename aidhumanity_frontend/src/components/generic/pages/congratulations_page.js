import Page_header from "../components/page_header";
import Generic_header_1 from "../components/generic_header_1";
import Footer from "../../footer";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Footer_mobile from '../../footer_mobile';


function Congratulations_page() {
  return (    
    <section>
      <div className="hidden sm:block">< Generic_header_1 /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <Page_header heading="Congratulations" icon="hidden" />
      <div className='bg-[#f9f9f9] pt-12 pb-20 sm:pb-52 px-8'>
        <div className='w-full sm:w-1/2 mx-auto bg-white p-8 sm:p-12 rounded-3xl'>
          <div className="congratulations-image h-72 w-72 rounded-full my-6 bg-[#999] flex justify-center items-center mx-auto bg-[url('assets/images/heart-hands-1.png')] bg-cover bg-center bg-no-repeat">
            <img src='/icons/logo-without-text.svg' className="w-24 absolute"></img>
          </div>
            <div className='w-full sm:w-[70%] sm:mx-auto text-[1.8rem] font-normal tracking-[-0.45px] text-black text-center '>
              <p className="font-semibold text-primary mt-16 mb-8">You’ve madde a significant difference to people in need and played a major part in
                making the world a better place.
              </p>
              <p className="mb-16">
                Please continue to spread the word about this appeal, and take a moment to check your summary below.
              </p>
            </div>
          <div className=''>
            <ul className='bg-[#f9f9f9] rounded-3xl px-12 py-4 text-[1.4rem] font-medium tracking-[-0.21px] text-black'>
              <li className='py-6 border-b border-platinum flex justify-between items-center'><span>Rescue a street child</span><span className='font-bold'>£360.00</span></li>
              <li className='py-6 border-b border-platinum flex justify-between items-center'><span>Food pack for a family</span><span className='font-bold'>£50.00</span></li>
              <li className='py-6 border-b border-[#bdbdbd] flex justify-between items-center'>
                <div className='flex space-x-4 items-center'>
                  <img src="/icons/gift.svg"></img> 
                  <span className='font-bold py-3 tracking-[-0.35px]'>Gift Aid</span>
                </div>
                <span className='font-bold'>£360.00</span>
              </li>
              <li className='py-6 flex justify-between items-center'><span className='font-semibold tracking-[0px]'>TOTAL</span><span className='text-[1.8rem] font-bold tracking-[-0.27px]'>£360.00</span></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </section>
  );
}
export default Congratulations_page;