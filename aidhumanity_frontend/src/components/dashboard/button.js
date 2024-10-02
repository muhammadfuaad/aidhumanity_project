
function Button(props) {
  if (props.type == "fixed") {
    return (
      <button className={`self-start fixed left-0 sm:static bottom-0 w-full sm:w-fit sm:px-20 py-8 sm:py-6 uppercase text-[1.4rem] font-semibold text-black bg-green sm:rounded-xl ${props.classNames}`}>{props.text}</button>
    )
    
  } else {
    return (
      <button className={`self-start px-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green
      rounded-xl ${props.classNames}`}>{props.text}</button>
    );
  }
}
export default Button;
