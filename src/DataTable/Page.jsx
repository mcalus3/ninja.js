import React from "react";

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const isActivePage = currentPageNumber === pageNumber;

  const click = (event) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  return (
    <li className="page-item mr-1">
      <button
        className={`page-link ${isActivePage ? " button-outline" : ""}`}
        onClick={click}
      >
        {pageNumber + 1}
      </button>
    </li>
  );
};

export default Page;
