import Appeal_card from '../../generic/components/appeal_card';
import Scroller from '../../scroller';
import Appeal_details_layout from './appeal_details_layout';

function Appeal_details_donator_page(props) {
  return (
    <Appeal_details_layout
      donators_content=
      <div className="sm:flex flex-col px-8 sm:px-48 hidden -mt-48">
        <p className="self-center text-center generic-subheading mt-24 sm:mb-28">Recent Appeals</p>
        <div className="flex gap-12">
          <div><Appeal_card /></div>
          <div className="hidden sm:flex"><Appeal_card /></div>
          <div className="hidden sm:flex"><Appeal_card /></div>
        </div>
        <div className="my-20">
          <Scroller/>
        </div>
      </div>
    />
  )
}
export default Appeal_details_donator_page;