import React from "react";
function Image_upload() {
  const [visibility, setVisibility] = React.useState(true);
  return (
    <>
      {visibility? 
        <div className="bg-black bg-opacity-50 flex justify-center items-center h-screen w-screen">
          <div className="bg-[#f9f9f9] w-[64rem] rounded-3xl">
            <div className="flex justify-between p-8 border-bottom-medium">
              <p className="text-[1.8rem] font-bold tracking-[-0.45px] text-black">Upload a new image</p>
              <a href="#" onClick={()=>setVisibility(false)}><img src="./icons/cross-circle.svg"></img></a>
            </div>
            <div className="p-12">
              <p className="text-[1.6rem] font-normal tracking-[-0.54px] text-body mb-8">Please select an image by clicking on the icon below.</p>
              <div className="flex flex-col items-center bg-light-gray border-2 border-dashed border-[#bdbdbd] rounded-3xl py-20 px-auto">
                <div className="w-[35%] flex flex-col items-center">
                  <div className="flex space-x-4 mb-4 items-center">
                    <img src="./icons/cloud-upload.svg"></img>
                    <p className="text-[1.2rem] font-bold tracking-[0.18px] text-primary uppercase">Browse</p>
                  </div>
                  <p className="text-[1.2rem] font-bold tracking-[-0.18px] text-black mb-2">Drag & Drop files here</p>
                  <p className="text-center text-[1rem] font-normal tracking-[-0.25px] text-body">* Supported image formats: jpg, jpeg, png, max. filesize 2 MB</p>
                </div>
              </div>
              <button className="px-28 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-lg mt-8">Upload</button>
            </div>
          </div>
        </div> : null}
    </>
    
  );
}
export default Image_upload;