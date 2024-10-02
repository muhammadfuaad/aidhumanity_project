function Payment_methods() {
  return (    
    <div className="bg-white p-8 rounded-2xl">
      <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black">Saved cards</p>
      <div className="flex flex-col items-center space-y-4 w-[14rem] mx-auto my-40">
        <div className="bg-platinum w-24 h-24 rounded-full"><img src="./icons/mother-child-charity.svg" className="w-[5rem] -translate-y-6 translate-x-2"></img></div>
        <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-black text-center">There doesn’t seem to be anything here</p>
      </div>
    </div>     
  );
}
export default Payment_methods;
  