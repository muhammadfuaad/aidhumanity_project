import Icon from "../images/question-mark-circle.svg";
function Page_header({heading}) {
  return (
    <div className="bg-primary-light py-20 flex gap-4 justify-center items-center">
      <img src="./icons/question-mark-circle.svg"></img>
      <img src={Icon}></img>
      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">{heading}</p>
    </div>
  );
}
export default Page_header;
