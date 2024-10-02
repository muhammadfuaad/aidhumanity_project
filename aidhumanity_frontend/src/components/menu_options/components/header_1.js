import cross from "../../icons/cross-circle.svg"

function Header_1(props) {
  return (
    <div className="flex justify-between bg-white p-10 border-bottom-medium">
      <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black leading-[2.4rem]">{props.title}</p>
      <img src={cross}></img>
    </div>
  )
}
export default Header_1;