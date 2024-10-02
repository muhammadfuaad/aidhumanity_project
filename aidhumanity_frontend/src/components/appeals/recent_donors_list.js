import Recent_donors from "./recent_donors";
function Recent_donors_list(props) {
  return (
    <div className="flex flex-col rounded-3xl bg-white">
      <div className="flex justify-between p-8 border-b border-[#999] text-[1.6rem] tracking-[-0.4px] text-black">
        <p className="font-bold">Recent Donors</p>
        <p className="font-medium">175</p>
      </div>
      <Recent_donors name="Matt Watson" time="17 hours ago" amount="£60.00" gift_aid="+ £15.00 Gift Aid" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."/>
      <Recent_donors name="Frederic Johannson" time="2 days ago" amount="£20.00"/>
      <Recent_donors name="Anonymous" time="17 hours ago" amount="£60.00" />
      <Recent_donors name="Benjamin Russow" time="17 hours ago" amount="£60.00" />
      <p className="text-[1rem] font-medium tracking-[-0.15px] text-primary-dark mb-8 self-center">Show more</p>
    </div>
  )
}
export default Recent_donors_list;