import React from 'react';

interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setPage }) => {
  const handleNext = () => setPage(currentPage + 1);
  const handlePrev = () => setPage(currentPage - 1);

  return (
    <div className="pagination flex justify-between items-center mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        Previous
      </button>
      <span className="text-lg">Page {currentPage}</span>
      <button
        onClick={handleNext}
        className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
