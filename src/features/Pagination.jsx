import React from 'react';

const Pagination = ({ PropertyPerPage, totalProperties, currentPage, setPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProperties / PropertyPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full flex mx-auto justify-items-center p-2">
      <ul className="flex mx-auto">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`flex w-5 h-5 border border-primary items-center justify-center mx-1  rounded-full ${
              number === currentPage ? 'bg-primary text-white' : ''
            }`}
          >
            <a className="mx-1 p-1 text-sm" onClick={() => setPage(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
