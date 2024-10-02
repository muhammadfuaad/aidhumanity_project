function Notification(props) {
  return (
    <div className={`h-auto min-h-56 flex gap-8 p-8 border-2 rounded-3xl ${props.class}`}>
      <img src={props.img} className="w-20"></img>
      <div className="flex flex-col gap-2">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">{props.title}</p>
        <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">{props.description}</p>
      </div>
    </div>
  );
}
export default Notification;