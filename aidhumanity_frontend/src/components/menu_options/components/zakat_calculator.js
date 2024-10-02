function Zakat_calculator() {
  return (
    <div className="bg-primary-light px-6 py-10">
      <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black mb-6">Quick Zakat Calculator</p>
      <div className="flex flex-col gap-6 items-center">
        <div className="w-full flex flex-col border border-black rounded-xl p-4">
          <p className="text-[1.1rem] font-semibold tracking-[0px] text-black mb-1">Total Savings inc. Gold</p>
          <p className="text-[1.3rem] font-medium tracking-[0px] text-black">£980</p>
        </div>
        <div className="w-full flex flex-col border border-black rounded-xl p-4">
          <p className="text-[1.1rem] font-semibold tracking-[0px] text-black mb-1">Total Debt</p>
          <p className="text-[1.3rem] font-medium tracking-[0px] text-black">£980</p>
        </div>
        <p>=</p>
        <div className="w-full flex flex-col border border-black rounded-xl p-4">
          <p className="text-[1.1rem] font-semibold tracking-[0px] text-black mb-1">Zakat amount to pay</p>
          <p className="text-[1.3rem] font-medium tracking-[0px] text-black">£980</p>
        </div>
      </div>
    </div>
  );
}
export default Zakat_calculator;