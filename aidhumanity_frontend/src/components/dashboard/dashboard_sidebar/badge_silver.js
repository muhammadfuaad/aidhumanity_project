function Badge_silver() {
  return (
    <div className="bg-primary flex space-x-4 py-8 px-4 rounded-3xl relative overflow-hidden">
      <img src="./icons/footer-background-logo.svg" className="w-32 absolute right-12 -top-4"></img>
      <img src="./icons/decorator.svg" className="w-6 absolute right-48 top-4"></img>
      <img src="./icons/red-decorator.svg" className="w-6 absolute left-16 top-4"></img>
      <img src="./icons/yellow-star-small.svg" className="absolute left-3 top-4"></img>
      <img src="./icons/yellow-star-large.svg" className="absolute right-6 bottom-4"></img>
      <div className="border-2 border-white rounded-full w-16 h-16 relative"><img src="./icons/dashboard-sidebar-badge.svg" className="absolute"></img></div>
      <div className="right">
        <p className="text-[1.4rem] font-medium tracking-[-0.35px] text-[#fff]">Level <span className="font-semibold">Silver</span></p>
        <p className="text-[1.1rem] font-medium tracking-[-0.28px] text-[#fff]">total donation: <span className="font-semibold">£834.00</span></p>
        <p className="text-[0.8rem] font-medium tracking-[-0.2px] text-[#E0F7FF] mt-2">until level gold still remains: £176.00</p>
      </div>
    </div>
  );
}
export default Badge_silver;