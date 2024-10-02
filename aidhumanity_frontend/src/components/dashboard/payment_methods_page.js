import Dashboard_layout from "./dashboard_layout";
import Payment_methods from "./payment_methods";

function Payment_methods_page() {
  return (
    < Dashboard_layout dashboard_page={<Payment_methods />} heading="Payment methods" />
  );
}
export default Payment_methods_page;