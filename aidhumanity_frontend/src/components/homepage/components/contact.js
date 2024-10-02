import dot from "../../icons/dot-circle.png"
import profile from "../../icons/profile-plus.png"

function Contact() {
  return (
    <div className="flex flex-col gap-2 bg-amber px-8 py-16 sm:py-24">
      <div className="flex flex-col gap-12 sm:gap-20 sm:w-1/2 self-center">
        <p className="generic-subheading">Contact Us</p>
        <div className="flex flex-col sm:flex-row sm:gap-28">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 bg-white border-black border-2 p-5 rounded-3xl sm:w-[33rem] h-[140px]">
                <div className="flex justify-between">
                  <div className="flex space-x-2 items-center">
                    <img src={dot} className="w-8"></img>
                    <p className="card-heading">Register</p>
                  </div>
                  <img src={profile} className="w-12"></img>
                </div>
                <p className="card-body text-body">I want to help Aid Humanity and receive future appeals</p>
              </div>

              <div className="flex flex-col gap-4 border-gray border-opacity-25 border-2 p-5 rounded-3xl sm:w-[33rem] h-[140px]">
                <div className="flex justify-between">
                  <div className="flex space-x-2 items-center">
                    <img src={dot} className="w-8"></img>
                    <p className="card-heading">Fundraiser</p>
                  </div>
                  <img src={profile} className="w-12"></img>
                </div>
                <p className="card-body text-body">Become a fundraiser and kick start your own Charity appeal</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-10 mt-10 sm:mt-0">
            <div className="flex flex-col gap-8">
              <input className="focus:outline-none placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-xl h-[50px] p-2" placeholder="Name and Surname*"></input>
              <input className="focus:outline-none placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-xl h-[50px] p-2" placeholder="Email*"></input>
              <textarea rows="6" className="focus:outline-none placeholder:text-start placeholder-black text-[13px] font-normal tracking-[0px] leading-[15px] bg-amber border-2 border-opacity-50 border-black rounded-xl h-[98px] p-2" placeholder="Please provide as much detailed information as possible. Thank you *"></textarea>
            </div>
            <button className="self-start w-full sm:w-fit px-20 h-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
              Submit Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;