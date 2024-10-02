function Page_sidebar() {
  return (
    <div className="">
      <p className="text-[2rem] font-bold tracking-[-0.5px] text-black mb-16">Related Articles</p>
      <ul className="text-[1.8rem] font-medium tracking-[-0.45px] text-black flex flex-col gap-10">
        <li><a className="" href="#">Terms & Conditions</a></li>
        <li><a className="" href="#">Privacy Policy</a></li>
        <li><a className="" href="#">Donation Policy</a></li>
        <li><a className="text-primary" href="#">Refund Policy</a></li>
      </ul>
    </div>
  );
}
export default Page_sidebar;