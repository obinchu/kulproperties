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
            className={`flex border border-primary text-base mx-1 ${
              number === currentPage ? 'bg-primary text-white' : ''
            }`}
          >
            <a className="p-2 mx-1" onClick={() => setPage(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
