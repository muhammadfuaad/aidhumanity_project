import Blog_card from "../components/blog_card"
import Clock from "../../icons/clock.svg";
import Arrow from "../../icons/arrow-left.svg"
import Readable_list from './../components/readable_list';
import Facebook from "../../icons/facebook.png"
import Twitter from "../../icons/twitter.png"
import Email from "../../icons/email-white.svg"
import Layout_1 from './layout_1';

function Blog_page() {
  return (
    <Layout_1 content=
      <div>
        <div className="hidden sm:flex justify-between">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / Blog / Donec turpis eros, euismod nec justo sit amet</p>
          <div className="flex gap-4 items-center">
            <p className="text-[1.1rem] font-bold tracking-[-0.17px] text-[#999]">BACK TO ALL ARTICLES</p>
            <img src={Arrow}></img>
          </div>
        </div>
        <div className="mt-16 mb-2 sm:mt-0 sm:mb-8">
          <div className="mx-auto flex gap-2 items-center">
            <img src={Clock}></img>
            <div className="flex gap-4 items-center text-[1.1rem] font-normal tracking-[-0.17px] text-[#bdbdbd]">
              <p>April 20, 2022</p>
              <p>3 minutes to read</p>
            </div>
          </div>
        </div>
        <p className="mx-auto text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-10">Donec turpis eros, euismod nec justo sit amet</p>
        <div className="flex gap-8">
          <div className="flex flex-col">
          
            <div className="h-[30rem] sm:h-[40rem] rounded-3xl bg-cover bg-[url('assets/images/smiling-children-1.png')]">
              <button className="px-8 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-red mt-12 sm:ml-12">
                New
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] mt-20">
              <div className="w-full sm:w-[70%] mt-20 sm:mt-0 flex flex-col gap-12 relative">
                <div className="absolute left-32 -top-28 sm:top-0 sm:-left-32 flex sm:flex-col gap-6">
                  <div className="bg-primary-dark w-16 h-16 rounded-full flex justify-center items-center">
                    <img src={Facebook} className="w-3"></img>
                  </div>
                  <div className="bg-primary-dark w-16 h-16 rounded-full flex justify-center items-center">
                    <img src={Twitter} className="w-4"></img>
                  </div>
                  <div className="bg-primary-dark w-16 h-16 rounded-full flex justify-center items-center">
                    <img src={Email} className="w-4"></img>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum at. Non curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
                <ul className="list-disc list-outisde marker:text-primary ml-8">
                  <li>Ac turpis egestas integer eget. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.</li>
                  <li> Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</li>
                </ul>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Ac turpis egestas integer eget</p>
                  <p>Nisi porta lorem mollis aliquam ut porttitor. Eget mi proin sed libero enim sed faucibus turpis. Etiam sit amet nisl purus. Aliquam ut porttitor leo a diam sollicitudin tempor id.</p>
                </div>
                <p>Laoreet id donec ultrices tincidunt arcu. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Id venenatis a condimentum vitae sapien pellentesque. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Id ornare arcu odio ut sem nulla pharetra diam sit. Leo a diam sollicitudin tempor id eu nisl nunc. Curabitur vitae nunc sed velit dignissim sodales ut. Facilisi morbi tempus iaculis urna id volutpat lacus. Ut eu sem integer vitae justo eget magna fermentum iaculis. Tellus elementum sagittis vitae et leo duis. Amet nulla facilisi morbi tempus. Consectetur adipiscing elit duis tristique sollicitudin nibh.</p>
              </div>
              <div className="mt-8 sm:mt-0">< Readable_list /></div>
            </div>
            <div className="flex flex-col mt-8 sm:mt-64 pb-16 sm:pb-48">
              <p className="text-[3rem] font-bold tracking-[-0.75px] text-black mx-auto self-center mb-0 sm:mb-16">Similar Articles</p>
              <div className="flex gap-8 mt-10">
                <div>< Blog_card img="./images/blog-1.png" title="Mauris vel ornare massa, at ullamcorper ligula" description="Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus." /></div>
                <div className="hidden sm:block">< Blog_card img="./images/blog-2.png" title="Aenean ac iaculis urna, quis condimentum elit" description="Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue, nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum." /></div>
                <div className="hidden sm:block">< Blog_card img="./images/blog-3.png" title="Congue quisque egestas diam in arcu cursus" description="Nunc eget lorem dolor sed viverra ipsum nunc. Ac ut consequat semper viverra nam. Urna neque viverra justo nec ultrices. Feugiat scelerisque varius morbi enim nunc faucibus a." /></div>
                <div className="hidden sm:block">< Blog_card img="./images/blog-3.png" title="Congue quisque egestas diam in arcu cursus" description="Nunc eget lorem dolor sed viverra ipsum nunc. Ac ut consequat semper viverra nam. Urna neque viverra justo nec ultrices. Feugiat scelerisque varius morbi enim nunc faucibus a." /></div>
              </div>
              <img src="/icons/template-pager.svg" className="sm:hidden self-center mt-12"></img>
            </div>
          </div>      
        </div>
      </div>
    />
  );
}
export default Blog_page;