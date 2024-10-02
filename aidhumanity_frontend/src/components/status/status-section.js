import Status_green from "./status--green";
import Status_bug from "./status--bug";
import Status_declined from "./status--declined";
import Cookie from "./cookie";

function Status_section() {
  return (
    <div className="flex justify-center space-x-6">
      <Status_green />
      <Status_bug />
      <Status_declined />
      <Cookie />
    </div>
  );
}
export default Status_section;