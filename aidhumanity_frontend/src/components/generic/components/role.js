function Role(props) {
  return (
    <div className="flex flex-col gap-16 p-12 bg-white rounded-3xl shadow-md">
      <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-body">{props.title}</p>
      <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#999]">{props.description}</p>
      <p className="text-[3.8rem] font-medium tracking-[-0.95px] text-primary-dark self-end">{props.number}</p>
    </div>
  );
}
export default Role;