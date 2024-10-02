function Amount(props) {
  return (  
    <ul className="flex text-[1.3rem] font-medium tracking-[0px] text-black h-20 rounded-xl border border-[#bdbdbd]">
      <li className="flex items-center justify-center w-1/4 bg-white hover:bg-primary hover:text-white border-r border-[#bdbdbd] rounded-l-xl"><a href="#">£5</a></li>
      <li className="flex items-center justify-center w-1/4 bg-white hover:bg-primary hover:text-white border-r border-[#bdbdbd]"><a href="#">£10</a></li>
      <li className="flex items-center justify-center w-1/4 bg-white hover:bg-primary hover:text-white border-r border-[#bdbdbd]"><a href="#">£20</a></li>
      <li className="flex items-center justify-center w-1/4 bg-white hover:bg-primary hover:text-white rounded-r-xl"><a href="#">£50</a></li>
    </ul> 
  )
} 
export default Amount;