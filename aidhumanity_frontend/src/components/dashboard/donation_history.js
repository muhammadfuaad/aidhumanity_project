import Donation_history_pagination from './../donation_history_pagination';

function Donation_history() {
  return (    
    <div className="sm:bg-white sm:p-8 sm:rounded-3xl">
      <div className="flex gap-56 mb-8">
        <div className="flex flex-col space-y-3">
          <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">Total donations</p>
          <p className="text-[2.4rem] font-semibold tracking-[-0.6px] text-black">£2.134</p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-[1.4rem] font-normal tracking-[-0.35px] text-black">Total donations</p>
          <p className="text-[2.4rem] font-semibold tracking-[-0.6px] text-black">£2.134</p>
        </div>
      </div>
        <Donation_history_pagination/>
    </div>      
  );
}
export default Donation_history;
  