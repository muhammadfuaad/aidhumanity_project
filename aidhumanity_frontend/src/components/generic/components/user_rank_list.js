import Badge from "../images/badge-first.png";
function User_rank_list(props) {
  return (
    <div className="flex justify-between gap-16 w-full">
      <div className="flex flex-col p-16 bg-white rounded-3xl shadow-md relative">
        <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-primary mb-16">Your first project</p>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] w-[80%] mb-12">(when user makes their first donation)</p>
        <p className="text-[3.8rem] font-medium tracking-[-0.95px] text-primary-dark self-end">01.</p>
      </div>
      
      <div className="flex flex-col p-16 bg-white rounded-3xl shadow-md relative">
        <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-green mb-16">green</p>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] w-[80%] mb-12">(when user makes their first donation)</p>
        <p className="text-[3.8rem] font-medium tracking-[-0.95px] text-primary-dark self-end">02.</p>
      </div>
      <div className="flex flex-col p-16 bg-white rounded-3xl shadow-md relative">
        <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-purple mb-16">Purple</p>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] w-[80%] mb-12">(when user makes their first donation)</p>
        <p className="text-[3.8rem] font-medium tracking-[-0.95px] text-primary-dark self-end">03.</p>
      </div>
      <div className="flex flex-col p-16 bg-white rounded-3xl shadow-md relative">
        <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-primary mb-16">Blue</p>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] w-[80%] mb-12">(when user makes their first donation)</p>
        <p className="text-[3.8rem] font-medium tracking-[-0.95px] text-primary-dark self-end">04.</p>
      </div>
    </div>
  );
}
export default User_rank_list;