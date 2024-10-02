import Orphan from '../../icons/orphan-1.png';
import Clock from "../../icons/clock.svg";

function Blog_card(props) {
  return (
    <div className="flex flex-col">
      <div className=''><img src={props.img} className="rounded-3xl h-80 w-full mb-10"></img></div>
      <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-4 h-[20%]">{props.title}</p>
      <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] mb-8 h-3/4">{props.description}</p>
      <div className="flex gap-2 items-center">
        <img src={Clock}></img>
        <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
          <p>April 20, 2022</p>
          <p className='font-bold mb-2'>.</p>
          <p>3 minutes to read</p>
        </div>
      </div>
    </div>
  );
}
export default Blog_card;