import Toggle from "./toggle";
import Button from "./button";
function Preferences() {
  return (
    <div className="bg-white rounded-3xl">          
      <div className="px-8 py-12 border-bottom-medium">
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-10">Aid Humanity communication</p>
        
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Email marketing about other ways to give and fundraise</p>
            < Toggle state="Enabled"/>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Email updates related to pages you donate to</p>
            < Toggle state="Enabled"/>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Email updates realted to pages you create</p>
            < Toggle state="Enabled"/>
          </div>
        </div>
      </div>

      <div className="px-8 py-12 border-bottom-medium">
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-10">Third-party app and website permissions</p>
        <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body">Please see our <span className="font-semibold text-primary">permissions</span> page to update your third-party app and website permissions.</p>
      </div>

      <div className="px-8 py-12">
        <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-10">Communication from charities</p>
        <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-6">If you opted in to hear from a charity when you donated on JustGiving, you’ll need to get in touch with the charity directly to update your preferences.</p> 
        <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-6">Please see our 
        <span className="font-semibold text-primary"> Terms of Service</span> and  
        <span className="font-semibold text-primary"> Privacy policy</span></p>
        < Button text="Save Changes" type="fixed" />        
      </div>
    </div>
  );
}
export default Preferences;
  