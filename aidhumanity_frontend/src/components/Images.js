import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

export default function Images(props) {
  const {data} = props;   
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage  = 6;
  
  useEffect (()=> {
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(data.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='images flex gap-12'>
        {currentItems.map(image => {
          return (
            <div>
              <p>{image.id}</p>
              <div><img src={image.url} alt={image.title}/></div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </>
  );
}