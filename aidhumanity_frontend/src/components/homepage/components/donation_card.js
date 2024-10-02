function Donation_card(props) {
  return (
    <div class="rounded-3xl header-shadow bg-white flex">
      <div class="relative bg-[url('assets/images/pakistan-floods.png')] bg-cover w-1/2 rounded-l-3xl p-6">
        
        <button class="rounded-xl w-full px-8 py-6 bg-primary text-white text-[1.1rem] font-medium tracking-[0.5px] mt-28">DONATE NOW</button>
        <span class="bg-amber w-9 h-9 flex items-center justify-center rounded-full -translate-y-1/4 absolute top-1/2 -right-3 text-[10px] font-bold">
          {props.category}
        </span>
      </div>
      <div class="max-w-[96px] m-7 flex flex-col justify-between h-[94px] rounded-r-3xl">
        <h3 class="text-[1.4rem] font-bold tracking-[-0.35px] text-black leading-[2rem]">
          {props.title}
        </h3>
        <img src="./icons/arrow-right-primary.svg" className="w-4"></img>
      </div>
    </div>
  );
}
export default Donation_card;