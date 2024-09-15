import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");

  // Create a debounced version of setSearchTerm
  const debouncedSearchTerm = debounce(setSearchTerm, 1000);

  useEffect(() => {
    debouncedSearchTerm(input);

    // Cleanup the debounce on component unmount
    return () => {
      debouncedSearchTerm.cancel();
    };
  }, [input, debouncedSearchTerm]);

  return (
    <div className="w-full max-w-md mx-auto my-5 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search characters..."
          className="w-full px-4 py-2 text-gray-700 leading-tight focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
