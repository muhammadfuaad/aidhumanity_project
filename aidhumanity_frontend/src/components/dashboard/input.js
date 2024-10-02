import React from 'react';
function Input(props) {
  const [status, setStatus] = React.useState(false);
  const [visibility, setVisibility] = React.useState(false);

  if (props.type == "password") {

    return (
      <div className="relative">
        <input type={status? "text" : "password"} onChange={()=>setVisibility(true)} id={`${props.id}`} className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for={`${props.id}`} className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">{props.label}</label>   
        {visibility? <a href="#" className={props.display_toggle + " text-[1rem] font-medium tracking-[-0.15px] text-primary-dark absolute right-6 top-6"} onClick={()=>setStatus(current => !current)}>Show</a> : null}      
      </div>
    );
  } else {
    return (
      <div className="relative">
        <input type={`${props.type}`} onChange={()=>setVisibility(true)} id={`${props.id}`} className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
        <label for={`${props.id}`} className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">{props.label}</label>   
        {visibility? <a href="#" className={props.display_toggle + " text-[1rem] font-medium tracking-[-0.15px] text-primary-dark absolute right-6 top-6"} onClick={()=>setStatus(current => !current)}>Show</a> : null}      
      </div>
    );
  }
}
export default Input;
