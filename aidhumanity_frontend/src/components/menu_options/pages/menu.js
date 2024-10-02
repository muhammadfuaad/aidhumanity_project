import Mobile_header from "../components/mobile_header";
function Menu() {
  return (
    <div className=" bg-[#f5f6f7] min-h-screen relative overflow-hidden">
      <div className="">
        < Mobile_header title="Menu" display_logout="hidden"/>
      </div>
      <ul className="text-[1.8rem] font-semibold tracking-[-0.27px] text-black">
        <li className="p-6 border-bottom-medium"><a href="#">Our Story</a></li>
        <li className="p-6 border-bottom-medium"><a href="#" className="flex justify-between"><span>Appeal</span><img src="./icons/arrow-right-primary.svg"></img></a></li>
        <li className="p-6 border-bottom-medium"><a href="#" className="flex justify-between"><span>Emergency</span><img src="./icons/arrow-right-primary.svg"></img></a></li>
        <li className="p-6 border-bottom-medium"><a href="#" className="flex justify-between"><span>Zakat</span><img src="./icons/arrow-right-primary.svg"></img></a></li>
        <li className="p-6 border-bottom-medium"><a href="#" className="flex justify-between"><span>Get Involved</span><img src="./icons/arrow-right-primary.svg"></img></a></li>

        <li className="p-6 border-bottom-medium"><a href="#">Zakat Calculator</a></li>
        <li className="p-6 border-bottom-medium"><a href="#">Blog</a></li>
        <li className="p-6 border-bottom-medium"><a href="#" className="flex gap-4 items-center"><img src="./icons/user-circle-black.svg" className="w-10"></img>My Account</a></li>
        <li className="p-6"><a href="#">Contact Us</a></li>
      </ul>
      <div className="p-6 flex flex-col gap-12 mt-20">
        <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-primary bg-transparent outline
          outline-primary rounded-xl">Donate Now</button>
        <div className="flex justify-between">
          <p className="text-[1.8rem] font-semibold tracking-[-0.27px] text-black">Languages</p>
          <img src="./icons/arrow-right-primary.svg"></img>
        </div>
      </div>
      <img src="./icons/footer-background-logo.svg" className="absolute -right-80 top-96"></img>
    </div>
  );
}
export default Menu;