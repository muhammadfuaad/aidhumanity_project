import Donation_card from "./donation_card";

function Popular_donations() {
  return (
    <div class="flex bg-f9 px-28 py-20 rounded-b-3xl">
      <div className="w-[25%]">
        <p class="generic-subheading p-0 whitespace-pre-line">Popular<br></br> Donations</p>
      </div>
      <div className="w-[75%] flex gap-12">
        <div className="w-[33%]"><Donation_card title="Support an Orphaned Child" category="Z"/></div>
        <div className="w-[33%]"><Donation_card title="Support an Orphaned Child" category="SJ"/></div>
        <div className="w-[33%]"><Donation_card title="Yemen Emergency" category="S"/></div>
      </div>

    </div>

  );
}
export default Popular_donations;