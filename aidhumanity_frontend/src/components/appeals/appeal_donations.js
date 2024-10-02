import Dashboard_header_mobile from '../dashboard/dashboard_header_mobile';
import Fixed_navigator from '../fixed_navigator';
import { ReactComponent as User_circle} from "../../icons/user-circle.svg"

function Appeal_media() {
  return (
    
        <div className='flex flex-col bg-white rounded-3xl'>
          <div className='p-8 sm:p-12 border-bottom-medium'>
            <p className='portal-subheading'>Donations total</p>
          </div>
          <div className='p-8 sm:p-12 pr-32 sm:pr-[30rem] border-bottom-medium'>
            <div className='flex flex-col text-[1.6rem] font-semibold tracking-[-0.4px] text-body'>
              <div className='flex flex-col border-b-[1px] border-dashed border-gray pb-4'>
                <p>Number of donations:</p>
                <p>2</p>
              </div>
              
              <div className='flex flex-col border-b-[1px] border-dashed border-gray py-4'>
                <p>Total raised:</p>
                <p>£365.00</p>
              </div>
              <div className='flex flex-col border-b-[1px] border-dashed border-gray py-4'>
                <p>Total offline donations:</p>
                <p>£55.00</p>
              </div>
              <div className='flex flex-col pt-4 font-normal'>
                <p>Gift aid plus supplement:</p>
                <p>£0.00</p>
              </div>
            </div>
          </div>
          
          <div className='p-8 sm:p-12 border-bottom-medium'>
            <p className='portal-subheading mb-6'>Offline donations</p>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] text-black mb-8'>Have you received any offline donations? Add the total amount here.</p>

            <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6'>
              <div className="relative w-full sm:w-[60%]">
                <input type="text" id="" className="focus:outline-none focus:bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
                <label for="" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4"></label>
              </div>

              <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl mt-4 sm:w-[40%]">
                Save Offline Donations
              </button>
            </div>
          </div>

          <div className='p-8 sm:p-12'>
            <p className='portal-subheading mb-6'>Donations made to your page</p>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] text-black mb-4'>You have 0 donations.</p>
            <p className='text-[1.2rem] font-semibold tracking-[-0.3px] text-primary mb-4'>See what happens to your donations</p>
            <table className='w-full'>
              <tr className='text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd]'>
                <th className='w-[50%] text-start pb-4 border-bottom-medium'>Name</th>
                <th className='w-[25%] text-start pb-4 border-bottom-medium'>Amount</th>
                <th className='w-[25%] text-start pb-4 border-bottom-medium'>Date</th>
              </tr>
              <tr className='text-[1.1rem] font-semibold tracking-[-0.28px]'>
                <td className='flex space-x-2 items-center py-4'>
                  <div className='w-8'>< User_circle stroke="#102558" /></div>
                  <p className='text-primary-dark'>Ron Hill</p>
                </td>
                <td className='text-primary py-4'>£231.50</td>
                <td className='flex space-x-2 items-center py-4'>
                  <img src="./icons/calendar-clock-black.svg"></img>
                  <p className='font-medium text-black whitespace-nowrap'>Tue 12 Dec, 08:15</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
  )
}
export default Appeal_media;