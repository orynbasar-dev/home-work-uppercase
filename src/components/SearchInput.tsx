import React, { InputHTMLAttributes } from 'react';

import searchIcon from '../assets/icons/search.svg';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // You can add additional props here if needed
  name?: string
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <div className="relative">
      <input
        className="border border-[#E6EAF5] h-10 pl-4 pr-8 w-64 bg-[#FCFCFF] rounded-lg text-[#929BBC]"
        type="text"
        {...props}
      />
      <img src={searchIcon} alt="Search icon" className="pointer-events-none absolute end-3 top-3" />
    </div>
  );
};

export default SearchInput;