import Badge from "../../icons/badge-verified.svg"
function Scholar_verified() {
  return (
    <div className="flex flex-col p-12 rounded-3xl bg-primary-light border border-primary">
      <div className="flex gap-4 items-center mb-8">
        <img src={Badge}></img>
        <p className="text-[2.8rem] font-semibold tracking-[-0.7px] text-primary">Scholar Verified</p>
      </div>
      <div className="flex flex-col gap-8 text-[1.6rem] font-normal tracking-[-0.4px] text-[#999] leading-[2.4rem]">
        <p>We ensure our content is reviewed and verified by <span className="font-semibold text-primary">qualified scholars</span> to provide you with the most accurate information. This webpage was last reviewed by <span className="font-semibold text-primary">Sheikh Saalim Al-Azhari.</span></p>
        <p> Page last reviewed: 17 January 2022</p>
        <p> Next review due: Within 12 months</p>
      </div>
    </div>
  );
}
export default Scholar_verified;