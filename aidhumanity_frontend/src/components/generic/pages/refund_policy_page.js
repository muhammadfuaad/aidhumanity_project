import Layout_page from "./layout_page";
function Refund_policy_page() {
  return (
      <Layout_page 
      banner_heading="Help Center"
      heading="Refund Policy"
      navigator=<p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / <span className="text-body">Help Center</span> / Refund Policy</p>
      content=<div className="flex flex-col gap-14 generic-body">
                    <p>
                    If you want to cancel your donation before it is used for your requested appeal or project, please contact our team by email, telephone or post. Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW. <br></br>03300579957 <br></br><span className="font-semibold text-primary">info@aidhumanity.co.uk</span>
                    </p>
                    <p>
                    If the order has not been made to distribute the aid, then we will honour your cancellation and refund your full amount.
                    </p>
                    <p>
                    f you have made a donation in error or if you change your mind about wishing to donate to Aid humanity we will honour your wish and refund your donation, provided that you contact us within 14 days of the donation being made. Your refund will be credited to the card from which it was taken from.
                    </p>
                    <p>
                    If your donations have been used, or the order for the donation to be processed has been given, we offer no refund and no cancellation.
                    </p>
                    <p>
                    To request a refund, please call us during working hours on 03300579957 or email us at <br></br><span className="font-semibold text-primary">info@aidhumanity.co.uk</span>
                    </p>
                    <p>
                    Please include your name, address, contact number and the donation amount that you would like refunded.
                    </p>     
                    <p>If you become aware that your card has been used fraudulently, please contact your card provider.
                    </p>          
                  </div>
                  />
      
      
      
  );
}
export default Refund_policy_page;