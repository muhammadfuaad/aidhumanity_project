import Radio from "../../menu_options/components/radio";
function Radio_component(props) {
  return (
    <div className={`flex gap-4 ${props.gap}`}>
      <Radio/>
      <p className="text-[1.4rem] font-medium tracking-[-0.21px] text-black">{props.label}</p>
    </div>
  );
}
export default Radio_component;