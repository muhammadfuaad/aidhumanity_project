import Mobile_header from "../components/mobile_header";
function Menu_options_layout(props) {
  return (
    <div className="bg-fa min-h-screen relative overflow-hidden">
      <div className="">
        < Mobile_header title={props.title} display_logout="hidden"/>
      </div>
      {props.content}
      <div className="w-full px-8 absolute bottom-10">
        <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#006ba3] bg-white outline
          outline-primary rounded-xl">Donate Now</button>
      </div>
      <img src="./icons/footer-background-logo.svg" className="absolute -right-[22rem] top-40"></img>
    </div>
  );
}
export default Menu_options_layout;