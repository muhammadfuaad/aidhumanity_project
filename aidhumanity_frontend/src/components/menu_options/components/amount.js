function Amount(props) {
  return (  
    <ul className="flex text-[1.3rem] font-medium tracking-[0px] text-black h-20 rounded-xl border border-[#bdbdbd]">
      <li className="flex items-center justify-center w-1/5 bg-white hover:text-white hover:bg-primary border-r border-[#bdbdbd] rounded-l-xl"><a href="#">£10</a></li>
      <li className="flex items-center justify-center w-1/5 bg-white hover:text-white hover:bg-primary border-r border-[#bdbdbd]"><a href="#">£20</a></li>
      <li className="flex items-center justify-center w-1/5 bg-white hover:text-white hover:bg-primary border-r border-[#bdbdbd]"><a href="#">£30</a></li>
      <li className="flex items-center justify-center w-1/5 bg-white hover:text-white hover:bg-primary border-r border-[#bdbdbd]"><a href="#">£50</a></li>
      <li className="flex items-center justify-center w-1/5 bg-white hover:text-white hover:bg-primary rounded-r-xl"><a href="#">£100</a></li>
    </ul> 
  )
} 
export default Amount;