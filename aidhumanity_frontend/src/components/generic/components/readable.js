import Clock from "../../icons/clock.svg"

function Readable(props) {
  return (
    <div className="flex flex-col py-8">
      <div className="flex gap-6">
        <p className="text-[2.5rem] font-normal tracking-[-0.38px] text-[#e2e2e2]">{props.number}</p>
        <div className="flex flex-col gap-4 max-w-[25rem]">
          <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black leading-[2.4rem]">{props.title}</p>
          <div className="flex gap-2 items-center">
            <img src={Clock}></img>
            <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
              <p>April 20, 2022</p>
              <p className='font-bold mb-2'>.</p>
              <p>3 minutes to read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Readable;