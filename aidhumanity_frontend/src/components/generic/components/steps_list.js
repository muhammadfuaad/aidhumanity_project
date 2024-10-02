import Icon_1 from "../images/create-account.svg"
import Icon_2 from "../images/register.svg"
import Icon_3 from "../images/donate.svg"
import Icon_4 from "../images/text-link.svg"
import Icon_5 from "../images/take-link.svg"
import Icon_6 from "../images/black-check-green-circle.svg";
function Steps_list() {
  return (
    <div className="flex flex-col items-center gap-20 sm:flex-row sm:justify-between">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-platinum relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">1.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={Icon_1}></img>
            <div className="hidden sm:block w-[40rem] h-[1px] bg-platinum absolute left-0 top-32"></div>  
          </div>
        </div>
        <p className="self-center sm:self-start text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">Create an account</p>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-platinum relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">2.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={Icon_2}></img>
            <div className="hidden sm:block w-[40rem] h-[1px] bg-platinum absolute left-0 top-32"></div>  
          </div>
        </div>
        <p className="self-center sm:self-start text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">Register to create appeals</p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center h-16 w-16 rounded-full bg-platinum relative">
            <p className="text-[1.8rem] font-semibold tracking-[-0.45px] text-black">3.</p>
          </div>
          <div className="h-64 w-64 relative">
            <img src={Icon_3}></img>
          </div>
        </div>
        <p className="self-center sm:self-start text-[1.8rem] font-bold tracking-[-0.45px] text-black mt-8">Donate to receive rewards</p>
      </div>
      
      
    </div>

    
  );
}
export default Steps_list;