function Mobile_footer() {
  return (
    <ul className="flex flex-col space-y-4 text-[1rem] font-regular tracking-[0.05px] text-spanish-gray my-8">
      <div className="flex">
        <li className="px-6 border-r-2"><a>Terms & Conditions</a></li>
        <li className="px-6"><a>Privacy Policy</a></li>
      </div>
      <div className="flex">
        <li className="px-6 border-r-2"><a>Donations Policy</a></li>
        <li className="px-6"><a>Refund Policy</a></li>
      </div>
    </ul>
  );
}
export default Mobile_footer;