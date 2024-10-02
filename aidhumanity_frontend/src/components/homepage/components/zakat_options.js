import mosque from "../../icons/mosque.svg"
import emergency from "../../icons/emergency.svg"
import water from "../../icons/water-drop.svg"
import hunger from "../../icons/hunger-appeal.svg"
import sponsor from "../../icons/sponsor-orphan.svg"
import Popular_donations from "./popular_donations"
import Zakat_calculator_horizontal from "./zakat_calculator_horizontal"

function Zakat_options() {
  return (
    <div className="flex flex-col rounded-3xl relative">
      <div className="absolute -top-4 w-full">
        <img src="./icons/blue-bar.svg" className="w-full"></img>
        <img src="./icons/triangle-up.png" className="absolute -top-4 left-[25rem]"></img>
      </div>
      <div class="bg-white h-[40rem] relative overflow-hidden rounded-t-3xl">
          <div className="rounded-t-3xl"><Zakat_calculator_horizontal/></div>
          <img src="./icons/footer-background-logo.svg" className="absolute -right-[25rem] top-40"></img>
        <div className="flex gap-10 px-28 py-20">
        
            <div class="w-1/3">
              <div class="flex items-center gap-8">
                <img src={mosque}></img>
                <h3 class="mb-0 sm:text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">
                  Build a Mosque
                </h3>
              </div>
              <ul class="list-none ml-20 mt-5 text-gray hover:text-body text-[1.6rem] font-medium tracking-[-0.24px] leading-[3rem]">
                <a href="#">
                  <li class="hover:underline">
                    Pay for a Brick
                  </li>
                </a>
                <a href="#">
                  <li class="hover:underline">
                    Books
                  </li>
                </a>
                <a href="#">
                  <li class="hover:underline">
                    Quran Appeal
                  </li>
                </a>
              </ul>
            </div>
            <div class="w-1/3 relative">
              <div className="h-[35rem] w-px bg-platinum absolute -left-20 -top-8"></div>
              <div className="h-[35rem] w-px bg-platinum absolute -right-10 -top-8"></div>
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
              <div>
                <div class="flex items-center gap-8">
                <img src={water}></img>
                  <h3 class="mb-0 sm:text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">
                    Water for All
                  </h3>
                </div>
                <ul class="list-none mt-2 ml-20 text-gray hover:text-body text-[1.6rem] font-medium tracking-[-0.24px]">
                  <a href="#">
                    <li class="hover:underline ">
                      Water Wells
                    </li>
                  </a>
                </ul>
              </div>
              <div class="flex items-center gap-8">
                <img src={sponsor}></img>
                <h3 class="mb-0 sm:text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">
                  Sponsor an Orphan
                </h3>
              </div>
              <div class="flex items-center gap-8">
                <img src={hunger}></img>
          
                <h3 class="mb-0 sm:text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">
                  Hunger Appeal
                </h3>
              </div>
            </div>
        </div>
      </div>
      <Popular_donations/>
    </div>


  );
}
export default Zakat_options;