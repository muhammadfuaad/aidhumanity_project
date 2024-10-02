import Toggle from './../../dashboard/toggle';
import Bar from "../../icons/blue-bar.svg";

function Zakat_calculator() {
  return (
    <div className="flex flex-col relative rounded-3xl bg-white shadow-md">
    <img src={Bar} className="absolute top-0 left-0"></img>
    <div className='p-12 border-b border-[#999]'>
      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mb-12">Our Zakat Calculator</p>
      <p className="text-[2rem] font-bold tracking-[-0.5px] text-black mb-6">Gold and Silver</p>
      <div className="relative">
        <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Value of Gold & Silver you possess</label>
      </div>
    </div>

    <div className='p-12 border-b border-[#999]'>
      <p className="text-[2rem] font-bold tracking-[-0.5px] text-black mb-6">Money</p>
      <div className='flex flex-col gap-4'>
        <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Cash at Home & Bank Accounts</label>
        </div>
        <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Other Savings</label>
        </div>
        <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Investment & Share Values</label>
        </div>
        <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Money owed to you</label>
        </div>
      </div>
    </div>

    <div className='p-12 border-b border-[#999]'>
      <p className="text-[2rem] font-bold tracking-[-0.5px] text-black mb-6">Business Assets</p>
      <div className="relative">
        <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Stock Value</label>
      </div>
    </div>

    <div className='p-12 border-b border-[#999]'>
      <p className="text-[2rem] font-bold tracking-[-0.5px] text-black mb-6">Short Term Liabilities</p>
      <div className='flex flex-col gap-4'>
        <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Money You Owe</label>
        </div>
        <div className="relative">
          <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
          <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Other Outgoings Due</label>
        </div>
      </div>
    </div>

    <div className='p-12'>
      <p className="text-[2rem] font-bold tracking-[-0.5px] text-black mb-6">Net Assets</p>
      <div className="relative">
        <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Money You Owe</label>
      </div>

      <p className="text-[2rem] font-bold tracking-[-0.5px] text-black mb-6">Nisab Threshold</p>
      <div className="relative">
        <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray top-2 left-4">Money You Owe</label>
      </div>

      <div className='bg-primary rounded-3xl flex justify-between items-center p-8'>
        <p className="text-[1.4rem] font-semibold tracking-[0px] text-white">TOTAL ZAKAT PAYABLE =</p>
        <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-white">£124.00</p>
      </div>
      
      <button className="mt-6 w-full h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
        Donate Now
      </button>
    </div>

    

     
  </div>
  );
}
export default Zakat_calculator;