import Badge from "../images/badge-first.png";
function User_badge(props) {
  return (
    <div className="flex flex-col p-16 bg-white rounded-3xl shadow-md relative h-full w-full">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-body">{props.title}</p>
        <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-primary h-[70%] mb-8">{props.slogan}</p>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999]">{props.description}</p>
      <p className="text-[3.8rem] font-medium tracking-[-0.95px] text-primary-dark self-end">{props.number}.</p>
      <img src={props.badge} className="absolute -bottom-20 right-[40%] w-32 h-36"></img>
    </div>
  );
}
export default User_badge;