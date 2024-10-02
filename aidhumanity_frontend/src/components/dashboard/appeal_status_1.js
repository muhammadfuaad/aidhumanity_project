import Progress_bar from './progress_bar';

function Appeal_status_1(props) {
  const amount_raised = 12;
  return (
    <div className="flex space-x-4">
      <div className="w-[30%]">
        <img src="./images/pakistan-floods.png" className='rounded-xl'></img>
      </div>

      <div className="flex flex-col w-[70%]">
        <div className="flex justify-between items-center">
          <p className="text-[1.2rem] font-bold text-black mt-4 mb-2">
            {props.title}
          </p>
          <div className="bg-amber rounded-full w-8 h-8 flex justify-center items-center">
            <p className="text-[1rem] font-[800] text-black">{props.eligibility}</p>
          </div>
        </div>
        <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#bdbdbd] mb-1">
          {props.category}
        </p>
        <Progress_bar progress="30" option="2" />
        <div className="flex space-x-6 mt-2 relative">
          <p className="text-[1.1rem] font-semibold tracking-[-0.17px]">
            <span className="text-primary">{amount_raised}</span>
            <span className=" text-[#bdbdbd]">{`/${props.amount_remaining}`}</span>
          </p>
          <div className="flex space-x-1 items-center relative">
            <div className='h-4 w-[1px] bg-body absolute -left-2 top-[1px]'></div>
            <img src="./icons/user-circle.svg" className='w-5 brightness-50'></img>
            <p className="text-[1rem] font-medium tracking-[-0.15px] text-body">
            {`${props.supporters} supporters`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Appeal_status_1;
