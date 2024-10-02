import Accordion from "./accordion";

function Faq() {
  return (
    <div className="flex flex-col w-full px-8 py-16 sm:py-24 bg-f5 relative">
      <img src="./icons/yellow-ring-large.png" className="w-[30rem] absolute right-0 -top-60 hidden sm:block"></img>
      <img src="./icons/yellow-ring-small.png" className="w-40 absolute bottom-60 left-60 hidden sm:block"></img>
      <img src="./icons/blue-circle.png" className="w-20 absolute top-[25rem] right-[30rem] hidden sm:block"></img>

      <div className="flex flex-col sm:w-1/2 self-center">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-12 sm:mb-20">
          <p className="generic-subheading">FAQ</p>
          <p className="generic-body hidden sm:block">Do you have more questions? Check out our full <span className="font-semibold text-primary-medium">FAQ</span></p>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8">
          <Accordion question="Does all my donation go to the appeal?" answer="Yes, obviously, why not, why are you scared?" />
          <Accordion question="Can I cancel my subscription?" answer="You can caccel your donation at any time. However if your last paymentt of the month is still yet to come this will still be deducted. Until the next month." />
          <Accordion question="Can I start my own appeal?" answer="Yes, obviously, why not, why are you scared?" />
        </div>
        <p className="generic-body sm:hidden mt-6">Do you have more questions? Check out our full <span className="font-semibold text-primary-medium">FAQ</span></p>

      </div>
    </div>
  );
}
export default Faq;