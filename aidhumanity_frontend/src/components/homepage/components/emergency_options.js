import emergency from "../../icons/emergency.svg"
import Popular_donations from "./popular_donations"

function Appeals_options() {
  return (
    <div className="flex flex-col rounded-3xl relative">
      <div className="absolute -top-4 w-full">
        <img src="./icons/blue-bar.svg" className="w-full"></img>
        <img src="./icons/triangle-up.png" className="absolute -top-4 left-[25rem]"></img>
      </div>
      <div class="px-28 py-20 h-[40rem] rounded-t-3xl flex gap-10 relative bg-white overflow-hidden">
        <img src="./icons/footer-background-logo.svg" className="absolute -right-[25rem] top-40"></img>

          <div class="w-1/3">
          <div class="flex items-center gap-8">
              <img src={emergency}></img>
              <h3 class="mb-0 sm:text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">
                Disasters & Emergency Appeals
              </h3>
            </div>
            <ul class="list-none ml-20 mt-5 text-gray hover:text-body text-[1.6rem] font-medium tracking-[-0.24px] leading-[3rem]">
              <a href="#">
                <li class="hover:underline">
                  Pakistan Floods
                </li>
              </a>
              <a href="#">
                <li class="hover:underline">
                  Bangladesh Floods
                </li>
              </a>
              <a href="#">
                <li class="hover:underline">
                  Rohingya Appeals
                </li>
              </a>
              
            </ul>
          </div>
          <div class="w-1/3 relative">
            <div className="h-[35rem] w-px bg-platinum absolute -left-1 -top-8"></div>
            <div className="h-[35rem] w-px bg-platinum absolute -right-10 -top-8"></div>
            <div class="flex items-center gap-8 invisible">
              <img src={emergency}></img>
              <h3 class="mb-0 sm:text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">
                Disasters & Emergency Appeals
              </h3>
            </div>
            <ul class="list-none ml-20 mt-5 text-gray hover:text-body text-[1.6rem] font-medium tracking-[-0.24px] leading-[3rem]">
              
              <a href="#">
                <li class="hover:underline">
                  Palestine Gaza
                </li>
              </a>
              <a href="#">
                <li class="hover:underline">
                  Ukraine Emergency Appeal
                </li>
              </a>
            </ul>
          </div>
          <div class="flex flex-col gap-[3.5rem] w-1/3 pl-20">
            
          </div>
      </div>
      <Popular_donations/>
    </div>


  );
}
export default Appeals_options;