import Heart from "./heart";

function Home_page_header_mobile() {
  return (
    <div className="flex justify-between bg-white p-6">
      <div className="flex space-x-8">
        <img src="./icons/dashboard-sidebar-toggler.svg"></img>
        <img src="./icons/dashboard-sidebar-logo.svg"></img>
      </div>

      <div className="flex space-x-6 items-center">
        <img src="./icons/user-circle-black.svg" className="w-8"></img>
        <div className="w-8"><Heart/></div>
      </div>
    </div>
  );
}
export default Home_page_header_mobile;