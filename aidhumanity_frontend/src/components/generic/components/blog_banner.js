import Clock from "../../icons/clock.svg"

function Blog_banner(props) {
  return (
    <div className="blog-banner p-8 sm:p-16 h-[40rem] rounded-3xl bg-cover bg-[url('assets/images/smiling-children-1.png')]">
      <div className="w-full sm:w-3/4 mt-28">
        <button className="px-8 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-red mb-6">
          New
        </button>
        <p className="text-[3rem] font-bold tracking-[-0.45px] text-white leading-[3.2rem]
        sm:text-[3.6rem] sm:font-bold sm:tracking-[-0.54px] sm:text-white sm:leading-[4rem] mb-4 sm:mb-8">Donec turpis eros, euismod nec justo sit amet</p>
        <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-[#f5f6f7] leading-[2.4rem] mb-4 sm:mb-8">Pellentesque consequat dui turpis, nec porta nisi varius quis. Ut mattis velit quis mi consectetur, non rhoncus metus dapibus.</p>
        <div className="flex gap-2 items-center">
          <img src={Clock}></img>
          <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
            <p>April 20, 2022</p>
            <p className='font-bold mb-2'>.</p>
            <p>3 minutes to read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog_banner;