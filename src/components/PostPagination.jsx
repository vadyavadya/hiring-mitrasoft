import React from "react";
import { Pagination } from "react-bootstrap";
import { usePagination } from "./hooks/usePagination";

export const PostPagination = ({ clsName, pageTotal, pageCurrent, setPageCurrent }) => {

    let pageArray = usePagination(pageTotal);

    return (
        <Pagination className={clsName}>
            {
                pageArray.length > 1 &&
                pageArray.map((number) =>
                    <Pagination.Item key={number}
                        active={number === pageCurrent}
                        onClick={() => setPageCurrent(number)}>
                        {number}
                    </Pagination.Item>
                )
            }
        </Pagination>
    )
}
