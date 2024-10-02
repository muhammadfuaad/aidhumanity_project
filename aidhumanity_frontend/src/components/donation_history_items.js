import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Donor_details from './dashboard/donor_details';
import Donor_details_mobile from './dashboard/donor_details_mobile';

export default function Donation_history_items(props) {
  const {data} = props;   
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage  = 2;
  
  useEffect (()=> {
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(data.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  let results = data.length
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-col gap-4 min-h-[25rem]'>
        {currentItems.map(image => {
          return (           
            <div>
              <div className='hidden sm:flex'>
                <Donor_details donor_name = {image.donor_name}
                location = {image.location}
                date = {image.date}
                appeal = {image.appeal}
                category = {image.category}
                amount = {image.amount}
                />
              </div>
              <div className='sm:hidden flex'>
                <Donor_details_mobile donor_name = {image.donor_name}
                location = {image.location}
                date = {image.date}
                appeal = {image.appeal}
                category = {image.category}
                amount = {image.amount}
              />
              </div>
            </div>           
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-10 sm:mt-8">
        <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-black hidden sm:flex">{results} results</p>
        <div className='w-full sm:w-[60%]'>
          <ReactPaginate
            breakLabel="..."
            nextLabel="NEXT"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="PREVIOUS"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-between items-center w-full"
            pageClassName=''
            pageLinkClassName="w-8 h-8 rounded-full text-[1.2rem] font-normal tracking-[-0.3px] text-black flex justify-center items-center"
            previousLinkClassName='px-6 py-4 uppercase text-[1.4rem] font-semibold text-bd bg-platinum outline
            outline-bd rounded-xl'
            nextLinkClassName='px-10 py-4 uppercase text-[1.4rem] font-semibold text-bd bg-transparent outline
            outline-bd rounded-xl'
            activeLinkClassName='h-8 w-8 rounded-full bg-platinum'
          />
        </div>
      </div>
    </>
  );
}