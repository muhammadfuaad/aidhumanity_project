function Appeal_details_header_mobile() {
  return (
    <div className="flex justify-between p-4 bg-primary-dark">
      <div className="flex gap-6">
        <img src="./icons/toggle-white.svg"></img>
        <img src="./icons/logo-white.svg"></img>
      </div>

      <div className="flex gap-6 items-center">
        <img src="./icons/user-circle-white.svg" className="w-8"></img>
        <div className="relative">
          <img src="./icons/heart-white.svg" className="w-8"></img>
          <div className="bg-primary rounded-full w-5 h-5 flex justify-center items-center absolute bottom-0 right-0">
            <p className="text-[1rem] font-semibold text-white">1</p>
          </div>
        </div>
      </div>     
    </div>
  );
}
export default Appeal_details_header_mobile;