import Clock from "./icons/clock.svg";

function Date() {
  return (
    <div className="flex gap-2 items-center">
      <img src={Clock}></img>
      <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
        <p>April 20, 2022</p>
        <p className='font-bold mb-2'>.</p>
        <p>3 minutes to read</p>
      </div>
    </div>
  );
}
export default Date;