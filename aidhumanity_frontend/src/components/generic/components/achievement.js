import check from "../../icons/green-check-circle.svg"
import user from "../../icons/user-circle-black.svg";
function Achievement() {
  return (
    <div className="bg-white w-full p-12 rounded-3xl">
      <div className="flex gap-4 mb-2">
        <img src={check}></img>
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">Gift a Water Hand Pump</p>
      </div>
      <p className="flex gap-3 text-[1.1rem] font-semibold tracking-[-0.17px] text-primary mb-1"><span className="mt-3">Raised:</span> <span className="text-[2.4rem]"> £243</span></p>
      <p className="flex items-center text-[1.1rem] font-medium tracking-[-0.17px] text-body">crowded March 20, 2021 by<img src={user} className="mx-2"></img> <span className="font-semibold">361 supporters</span></p>
    </div>
  );
}
export default Achievement;