function Dashboard_header_mobile() {
  return (
    <div className="flex justify-between bg-white p-6">
      <div className="flex space-x-8">
        <img src="./icons/dashboard-sidebar-toggler.svg"></img>
        <img src="./icons/dashboard-sidebar-logo.svg"></img>
      </div>

      <div className="flex space-x-4">
        <img src="./icons/plus-circle.svg" className="w-8"></img>
        <img src="./icons/user-circle-black.svg" className="w-8"></img>
      </div>
    </div>
  );
}
export default Dashboard_header_mobile;