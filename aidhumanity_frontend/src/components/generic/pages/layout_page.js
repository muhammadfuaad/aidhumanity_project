import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Generic_header_1 from "../components/generic_header_1";
import Footer from "../../footer";
import Home_page_header_mobile from './../../homepage/components/home_page_header_mobile';
import Footer_mobile from '../../footer_mobile';

function Layout_page(props) {
  return (
    <section>
      <div className="hidden sm:block">< Generic_header_1 /></div>
      <div className="sm:hidden block">< Home_page_header_mobile /></div>

      <Page_header heading={props.banner_heading} icon={props.icon} />
      <div className="px-8 pt-16 pb-24 sm:px-48">
        <div className="hidden sm:block">{props.navigator}</div>
        <div className="flex">
          <div className="w-full sm:w-[80%] flex flex-col">
            <div>
              <p className="generic-heading mb-12">{props.heading}</p>
              {props.content}
              <div className={`${props.assistance} mt-20`}>
                <Assistance />
              </div>
            </div>
          </div>
          <div className="hidden sm:block relative w-1/5 ml-32">
            <Page_sidebar />
            <img src="./icons/footer-background-logo.svg" className="w-[30rem] absolute top-[40rem]"></img>
            <div className="h-[50rem] w-[1px] bg-platinum absolute -left-16 top-0"></div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">< Footer /></div>
      <div className="sm:hidden">< Footer_mobile /></div>
    </section>
  );
}
export default Layout_page;