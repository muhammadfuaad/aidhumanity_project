function Left_label_input(props) {
  return (  
    <div className="relative">
      <input type="number" id="" className="h-20 focus:outline-none focus:bg-transparent block border-light rounded-xl px-12 py-4 w-full text-[1.3rem] font-medium tracking-[0px] text-black" placeholder=" " />
      <label for="" className="absolute text-[1.7rem] font-medium tracking-[0px] text-primary top-6 left-4">£</label>   
    </div>
  )
} 
export default Left_label_input;