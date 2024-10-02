function Mobile_header() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <img src="./icons/toggle.svg"></img>
        <img src="./icons/logo-with-text.svg"></img>
      </div>

      <div className="flex gap-6">
        <img src="./icons/user-circle.svg"></img>
        <div className="relative">
          <img src="./icons/heart.svg"></img>
          <div className="bg-primary rounded-full w-4 h-4 flex justify-center items-center">
            <p className="text-[1rem] font-bold text-black">1</p>
          </div>
        </div>
      </div>     
    </div>
  );
}
export default Mobile_header;