import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ changeSearch }) => {
  return (
    <div className="w-full md:w-72">
      <Input
        label="Search"
        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        onChange={(e) => changeSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
