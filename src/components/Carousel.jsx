

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = ({ children, visibleCount = 3 }) => {
  const [startIndex, setStartIndex] = useState(0);
  const total = React.Children.count(children);

  const prev = () => {
    setStartIndex((idx) => Math.max(idx - 4, 0));
  };
  const next = () => {
    setStartIndex((idx) => Math.min(idx + 4, total - visibleCount));
  };

  const visibleItems = React.Children.toArray(children).slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative w-full max-w-full mx-auto">
      {startIndex > 0 && (
        <button
          onClick={prev}
          className="absolute left-0 lg:left-0 top-1/2 transform -translate-y-1/2 p-2 bg-rose-500 shadow rounded-full z-10"
        >
          <FiChevronLeft size={24} />
        </button>
      )}

      <div className="flex overflow-hidden space-x-4 px-2 sm:px-4 md:px-8">
        {visibleItems.map((child, idx) => (
          <div key={idx} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            {child}
          </div>
        ))}
      </div>

      {startIndex < total - visibleCount && (
        <button
          onClick={next}
          className="absolute right-0 lg:right-0 top-1/2 transform -translate-y-1/2 p-2 bg-rose-500 shadow rounded-full z-10"
        >
          <FiChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default Carousel;

