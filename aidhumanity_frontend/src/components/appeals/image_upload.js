function Image_upload() {
  return (
    <div className="flex flex-col items-center bg-light-gray border-2 border-dashed border-[#bdbdbd] rounded-3xl py-10 px-auto">
      <div className="w-[35%] flex flex-col items-center">
        <div className="flex space-x-4 mb-4 items-center">
          <img src="./icons/cloud-upload.svg"></img>
          <p className="text-[1.2rem] font-bold tracking-[0.18px] text-primary uppercase">Browse</p>
        </div>
        <p className="text-[1.2rem] font-bold tracking-[-0.18px] text-black mb-2">Drag & Drop files here</p>
        <p className="text-center text-[1rem] font-normal tracking-[-0.25px] text-body">* Supported image formats: jpg, jpeg, png, max. filesize 2 MB</p>
      </div>
    </div>
     
    
  );
}
export default Image_upload;