import { SettingsContext } from "@/context/setting-context";
import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {GrNext, GrPrevious} from 'react-icons/gr'


const Pagination = ({ data, PaginatedData, perpage }: any) => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = perpage | 9;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    PaginatedData(currentItems);
  }, [itemOffset]);

  return (
    <>
      <section className="mt-12 mb-12 flex items-center justify-center ">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<GrNext/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<GrPrevious/>}
          renderOnZeroPageCount={null}
          previousClassName="text-black flex flex-col justify-center items-center w-10 p h-10 bg-yellow active:scale-105"
          containerClassName="flex gap-5 items-center text-center text-white"
          pageClassName="text-white border-[1px] boxshadow flex flex-col justify-center p bg-dark-gray active:scale-105 items-center w-10 h-10 border-black dark:bg-white dark:text-black"
          activeClassName="!text-black !bg-transparent dark:!text-white"
          nextClassName="text-black flex flex-col justify-center items-center w-10 p h-10 bg-yellow active:scale-105"
        />
      </section>
    </>
  );
};

export default Pagination;
