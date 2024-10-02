function Donor_details(props) {
  return (
    <div className="p-8 bg-white border border-platinum rounded-3xl w-full">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <img src="./icons/user-circle.svg" className=""></img>
          <p className="text-[1.5rem] font-semibold tracking-[-0.38px] text-primary-dark">{props.donor_name}</p>
        </div>
        <div className="flex space-x-8 items-center">
          <p className="text-[1.1rem] font-normal tracking-[-0.28px] text-black">From 
          <span className="font-semibold"> {props.location}</span></p>
          <div className="flex space-x-1 items-center">
            <img src="./icons/calendar-clock-black.svg"></img>
            <span className="text-[1.1rem] font-medium tracking-[-0.28px] text-black whitespace-nowrap">{props.date}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-[1.2rem] font-bold tracking-[-0.3px] text-black">{props.appeal}</p>
        <img src="./icons/eye.svg"></img>
      </div>
      <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd]">{props.category}</p>
      <div className="flex justify-between mt-2">
        <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-primary">{props.amount}</p>
        <div className="flex space-x-8 relative">
          <div className="absolute top-2 left-20 w-0.5 h-4 bg-gray-600"></div>
          <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-spanish-gray">Edit</button>
          <button className="text-[1.1rem] font-bold tracking-[-0.17px] text-spanish-gray">View</button>
        </div>
      </div>
    </div>
  );
}
export default Donor_details;