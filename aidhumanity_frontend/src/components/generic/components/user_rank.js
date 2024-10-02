import Badge from "../images/badge-first.png";
function User_rank(props) {
  return (
    <div className="flex flex-col p-16 bg-white rounded-3xl shadow-md relative">
      <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-primary mb-16 h-20">{props.title}</p>
      <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] mb-12 h-20">{props.description}</p>
      <p className="text-[3.8rem] font-medium tracking-[-0.95px] text-primary-dark self-end">{props.number}.</p>
    </div>
  );
}
export default User_rank;