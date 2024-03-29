import React from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

const PaginationBar = ({getPage ,pageCount}) => {

    const handlePageClick = (data) => {
        console.log(data.selected + 1)
        getPage(data.selected + 1)
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="nextBro"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="prevBro"
            containerClassName={"pagination justify-content-center p-3 center-bar"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationBar
