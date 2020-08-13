import React, { useState } from "react";

import Pagination from "./Pagination";
import Row from "./Row";
import Search from "./Search";

export const DataTable = ({ rows, rowsPerPage = 40 }) => {
  const calculateTotalNumberOfPages = (rows) => {
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  };

  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [currentRows, setCurrentRows] = useState(rows);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(
    calculateTotalNumberOfPages(rows)
  );

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = rows;

    if (text) {
      rowsFound = rows.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }

    setCurrentPageNumber(0);
    setCurrentRows(rowsFound);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound));
  };

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const rowsToRender = currentRows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber}
      />
    </div>
  );
};

export default DataTable;
