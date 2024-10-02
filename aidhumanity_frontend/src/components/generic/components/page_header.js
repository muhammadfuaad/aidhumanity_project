import Icon from "../images/question-mark-circle.svg";
function Page_header(props) {
  return (
    <div className="bg-primary-light py-20 flex gap-4 justify-center items-center">
      <img src={Icon} className={`${props.icon}`}></img>
      <p className="generic-subheading">{props.heading}</p>
    </div>
  );
}
export default Page_header;
