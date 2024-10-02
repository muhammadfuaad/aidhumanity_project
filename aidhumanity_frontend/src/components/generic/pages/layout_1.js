import Page_header from "../components/page_header";
import Generic_header from "../../generic_header";
import Footer from "../../footer";
import Hero from "../../icons/blog-hero-1.png"
import Readable_list from "../components/readable_list";
import Blog_card from "../components/blog_card"
import Clock from "../../icons/clock.svg";
import Home_page_header_mobile from '../../homepage/components/home_page_header_mobile';
import Footer_mobile from '../../footer_mobile';



function Layout_1(props) {
  return (
    <section>
      <div className="hidden sm:block">< Generic_header /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>
      <div className="flex flex-col px-8 sm:px-64 bg-[#f9f9f9]">
        {props.content}
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </section>
  );
}
export default Layout_1;