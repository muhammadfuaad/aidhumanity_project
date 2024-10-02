import Image_upload from "./image_upload";

function Appeal_media() {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-3xl sm:pb-10">
        <div className="p-8 sm:p-12 border-bottom-medium">
          <p className="portal-subheading">Page Cover</p>
        </div>
        <div className="p-8 sm:p-12">
          <p className="text-[1.6rem] font-normal tracking-[-0.4px] text-body">Upload a photo, select a photo from your gallery, or add a live stream video.</p>
        </div>
        <div className="bg-[#bdbdbd] h-96 w-full flex justify-center items-center relative">
          <img src="./icons/image.svg"></img>
          <button className="px-20 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl absolute right-12 bottom-12 hidden sm:block">
            Change Cover
          </button>
        </div>
        <div className="m-12 sm:hidden">
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
            Change Cover
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-3xl mt-8">
        <div className="p-8 sm:p-12">
          <p className="portal-subheading mb-12">Gallery</p>
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl sm:hidden">
            Select From Gallery
          </button>
          <div className="hidden sm:block">< Image_upload /></div>
          <div className="sm:flex sm:space-x-10">
            <div className="sm:w-1/3 bg-[#bdbdbd] h-96 w-full flex justify-center items-center rounded-3xl mt-8 sm:mt-10 relative">
              <img src="./icons/black-cross-circle.svg" className="absolute top-6 right-6"></img>
              <img src="./icons/image.svg"></img>
            </div>
            <div className="sm:w-1/3 bg-[#bdbdbd] h-96 w-full flex justify-center items-center rounded-3xl mt-6 sm:mt-10 relative">
              <img src="./icons/black-cross-circle.svg" className="absolute top-6 right-6"></img>
              <button className="px-6 py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
                Set As Cover
              </button>
            </div>
            <div className="sm:w-1/3 bg-[#bdbdbd] h-96 w-full flex justify-center items-center rounded-3xl mt-6 sm:mt-10 relative">
              <img src="./icons/black-cross-circle.svg" className="absolute top-6 right-6"></img>
              <img src="./icons/image.svg"></img>
            </div>
          </div>
          <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#102558] bg-transparent outline
            outline-spanish-gray rounded-xl mt-8 sm:hidden">Load More</button>
        </div>  
      </div>
    </div>
  )
}
export default Appeal_media;