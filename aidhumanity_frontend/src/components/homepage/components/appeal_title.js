function Appeal_title(props) {
  return (
    <a href="#" className="rounded-2xl bg-transparent py-6 px-10">
      <div className="flex gap-4 items-center">
        <img src={props.img}></img>
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black whitespace-nowrap">{props.label}</p>
      </div>
    </a>
  );
}
export default Appeal_title;