import Appeal_card from "./appeal_card";

function Appeals_list(props) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
        <Appeal_card />
        <Appeal_card />
        <Appeal_card />
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-12">
        <Appeal_card />
        <Appeal_card />
        <Appeal_card />
      </div>
    </div>
  );
}
export default Appeals_list;