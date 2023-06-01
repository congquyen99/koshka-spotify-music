"use client";

import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <form className="relative flex items-center flex-1 max-md:opacity-0">
      <input
        type="search"
        name="search"
        placeholder="Search your favourite music"
        className="absolute hidden max-lg:py-3 md:block w-full p-4 rounded-full shadow-md outline-none"
        id=""
      />
      <BsSearch
        size={24}
        className="absolute pointer-events-none right-4 text-black/50"
      />
    </form>
  );
};

export default Search;
