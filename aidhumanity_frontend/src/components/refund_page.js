import Page_sidebar from '../components/page_sidebar';
import Assistance from '../components/assistance';
import Page_header from './page_header';
function Refund_page() {
  return (
    <section>
      <Page_header heading="Help Center" />
      <div className="page">
        <div className="block">
          <p className="navigator">Home / Help Center / Contact</p>
          <div className="flex page relative">
            <div className="basis-1/2 flex flex-col space-y-8 pb-[100px]">
              <div className="flex flex-col space-y-8">
                <div>
                  <h1 className="page__heading">Refund Policy</h1>
                  <div className="page__content">
                    <p>
                      If you want to cancel your donation before it is used for your requested
                      appeal or project, please contact our team by email, telephone or post.
                      Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW.<br></br> 03300579957
                       <br></br> <span className="email">info@aidhumanity.co.uk</span> 
                    </p>
                    <p>
                      If the order has not been made to distribute the aid, then we will honour
                      your cancellation and refund your full amount.
                    </p>
                    <p>
                      If you have made a donation in error or if you change your mind about wishing to 
                      donate to Aid humanity we will honour your wish and refund your donation, provided 
                      that you contact us within 14 days of the donation being made. Your refund will be
                      credited to the card from which it was taken from.
                    </p>
                    <p>
                      If your donations have been used, or the order for the donation to be processed
                      has been given, we offer no refund and no cancellation. 
                    </p>
                    <p>
                      To request a refund, please call us during working hours on 03300579957 or email
                      us at <span className="email">info@aidhumanity.co.uk</span>
                    </p>
                    <p>
                      Please include your name, address, contact number and the donation amount that
                      you would like refunded.
                    </p>
                    <p>
                      If you become aware that your card has been used fraudulently, please contact your
                      card provider.
                    </p>              
                  </div>
                  <Assistance />
                </div>
              </div>
            </div>
            <Page_sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Refund_page;