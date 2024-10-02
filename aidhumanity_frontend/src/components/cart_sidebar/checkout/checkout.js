import Checkout_card from "./checkout_card";
function Checkout() {
  return (
    <div className="bg-primary-dark overflow-hidden border-l-[1rem] border-primary relative">
      <div className="h-full w-4 bg-white absolute"></div>
      <div className="p-8 flex justify-between border-b border-gray">
        <div className="flex gap-2 items-center">
          <img src="./icons/cash-register.svg"></img>
          <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-white">Checkout</p>
        </div>
        <img src="./icons/white-cross-circle.svg"></img>
      </div>
      <div className="p-8 flex flex-col">
        <p className="text-[1.6rem] font-semibold tracking-[-0.4px] text-white mb-16">Help us further</p>
        <div className="flex flex-col gap-6">
          < Checkout_card title=<div className="flex space-x-2 items-center"><img src="./icons/donate-to-admin.svg"></img><p className="whitespace-wrap">Donate to Admin cost 1.5%</p></div>
            text_color="#1d1d1d" amount="100" />
          < Checkout_card title="Rescue a street child" amount="10"/>
          < Checkout_card title="Food pack for a family" amount="100"/>
          <div className="px-10 pt-10 pb-8 bg-primary rounded-3xl flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <p className="text-[1.4rem] font-semibold tracking-[0px] text-white uppercase">Total</p>
              <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-white">£380.00</p>
            </div>
            <button className='w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-white rounded-xl 
              flex space-x-4 justify-center items-center'>
              
              <span className="text-green">Complete Donation</span>
              <img src="./icons/green-check-circle.svg"></img>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Checkout;