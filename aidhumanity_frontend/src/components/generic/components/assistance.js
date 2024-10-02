function Assistance() {
  return (
    <div className="flex flex-col gap-8 sm:flex-row justify-between items-center p-12 border border-[#999] rounded-3xl">
      <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black leading-[2.4rem] text-center"><span>Need further assistance? <br className="sm:hidden"></br>We’re here to help</span></p>
      <button className="px-28 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
        Contact Us
      </button>
    </div>
  );
}
export default Assistance;