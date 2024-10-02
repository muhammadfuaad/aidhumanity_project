import cross from "../../icons/cross-circle.svg"

function Header(props) {
  return (
    <div className="flex justify-between p-14 border-bottom-medium">
      <p className="text-[3rem] font-bold tracking-[-0.75px] text-black">{props.title}</p>
      <img src={cross}></img>
    </div>
  )
}
export default Header;