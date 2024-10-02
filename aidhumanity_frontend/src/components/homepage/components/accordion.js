import Quick_ways from "./quick_ways";
import Icon_1 from "../../icons/donate.svg"
import Icon_2 from "../../icons/campaign.svg"
import Icon_3 from "../../icons/administrate.svg"
import React from "react";

function Accordion(props) {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(current => !current)
  return (
    <div className="flex flex-col gap-4 rounded-3xl border-2 border-bd p-12">
      <div className="w-full flex justify-between items-center">
        <p className="portal-subheading">{props.question}</p>
        {!showResults ? <img src="./icons/blue-plus.svg" onClick={onClick}></img> : <img src="./icons/minus-gray.svg" onClick={onClick}></img>}
      </div>
      
        { showResults ? <p className="accordion-text">{props.answer}</p> : null }
    </div>
  );
}
export default Accordion;