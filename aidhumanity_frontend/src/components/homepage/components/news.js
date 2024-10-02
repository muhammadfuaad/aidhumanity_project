import Blog_banner from "../../generic/components/blog_banner";
import Blog_card from "../../generic/components/blog_card";
import Date from './../../date';

function News() {
  return (
      <section className="bg-f9">
        <div className="flex flex-col bg-Ghost-white px-8 sm:px-48 py-20">
          <p className="generic-subheading mb-20 text-center sm:text-start">Latest News</p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="basis-[50%] rounded-3xl">
              <Blog_banner/>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-8">
              < Blog_card img="./images/blog-1.png" title="Mauris vel ornare massa, at ullamcorper ligula" description="Cras ullamcorper dolor ac viverra finibus. Fusce iaculis accumsan ex, in placerat arcu luctus vitae. Fusce velit lacus, hendrerit scelerisque efficitur eget, placerat eu lectus." />
              < Blog_card img="./images/blog-2.png" title="Aenean ac iaculis urna, quis condimentum elit" description="Nullam eleifend faucibus mi, ac dapibus lectus interdum eu. Suspendisse sed semper augue, nec pulvinar orci. Praesent tincidunt purus condimentum efficitur fermentum." />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 sm:mt-20">      
            <button className="w-full sm:w-fit sm:px-72 py-6 uppercase text-[1.4rem] font-semibold text-primary-dark bg-transparent outline
              outline-spanish-gray rounded-xl sm:mb-8">View All</button>
          </div>
        </div>
      </section>
  );
}
export default News;