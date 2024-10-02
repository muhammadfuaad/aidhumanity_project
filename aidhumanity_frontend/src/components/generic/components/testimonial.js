import bar from "../../icons/blue-bar.svg"
import quotes from "../../icons/double-quotes-yellow.svg"
function Testimonial(props) {
  return (
    <div className="bg-white p-12 rounded-3xl h-full relative">
      <img src={bar} className="absolute top-0 left-2 w-[90%]"></img>
      <div className="h-3/4">
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body leading-[2.4rem] sm:mb-12">{props.feedback}</p>
      </div>
      <div className="flex gap-8 items-center">
        <img src={props.img} className="w-[4.5rem] h-[4.5rem]"></img>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className="text-[2.2rem] font-bold tracking-[-0.55px] text-primary">{props.name}</p>
            <p className="text-[1.1rem] font-medium tracking-[-0.17px] text-[#bdbdbd]">{props.age} years old</p>
          </div>
          <img src={quotes} className="w-12"></img>
        </div>
      </div>
    </div>

  );
}
export default Testimonial;