function Monthly_donations() {
  return ( 
    <div className="flex flex-col">
      <div className="bg-white rounded-3xl">
        <div className="px-8 py-12 border-bottom-medium">
          <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-2">
            Manage your recurring donations for the cuses you support.
          </p>
        </div>
        <div className="px-8 py-12 border-bottom-medium">
          <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-8">Direct Debits</p>
          <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-2">
            You don’t have any active direct debits.
          </p>
        </div>
        <div className="px-8 py-12">
          <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black mb-8">Recurring card payments</p>
          <p className="text-[1.3rem] font-normal tracking-[-0.33px] text-body mb-2">
            You don’t have any active monthly donations.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Monthly_donations;
  