function Scroller() {
  return (
    <div className='flex flex-col gap-12 sm:flex-row sm:justify-between'>
      <img src="./icons/template-pager.svg" className="hidden sm:flex sm:invisible self-center sm:self-auto"></img>
      <img src="./icons/template-pager.svg" className=" self-center sm:self-auto"></img>
      <button className="px-10 py-6 text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
        outline-spanish-gray rounded-xl self-center sm:self-auto">View All</button>
    </div>
  );
}
export default Scroller;