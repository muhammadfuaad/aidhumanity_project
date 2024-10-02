function Heart_white() {
  return (
    <div className="relative">
      <img src="./icons/heart-white.svg" className="w-20"></img>
      <div className="bg-primary rounded-full w-6 h-6 flex justify-center items-center absolute -bottom-2 -right-2">
        <p className="text-[1rem] font-bold text-white">1</p>
      </div>
    </div>
  );
}
export default Heart_white;