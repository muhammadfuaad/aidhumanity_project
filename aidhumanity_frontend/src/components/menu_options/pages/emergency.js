import Menu_options_layout from "./menu_options_layout";
function Emergency() {
  return (
    <Menu_options_layout
    title="Emergency"
      content=
      <div className="px-6 py-14">
        <div className="flex flex-col gap-12">         
          <div>
            <div className="flex gap-4 items-center mb-4">
              <img src="./icons/emergency.svg"></img>
              <p className="text-[1.8rem] font-bold tracking-[-0.27px] text-primary-dark">Disaster & Emergency Appeals</p>
            </div>
            <ul className="text-[1.6rem] font-medium tracking-[-0.24px] text-gray ml-16 flex flex-col gap-6">
              <li>Pakistan Floods</li>
              <li>Bangladesh Floods</li>
              <li>Rohingya Appeal</li>
              <li>Palestine Gaza</li>
              <li>Ukraine Emergency Appeal</li>
            </ul>
          </div>
        </div>
      </div>
    />
  );
}
export default Emergency;