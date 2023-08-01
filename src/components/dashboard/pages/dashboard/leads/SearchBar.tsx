import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({searchTable}) => {
    const [searchValue, setSearchValue] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        searchTable(searchValue);
    }

    return (
        <div className="w-full md:w-72">
        <form onSubmit={submitForm}>
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />} 
            value={searchValue} 
            onChange={e => setSearchValue(e.target.value)}
          />
          </form>
        </div>     
    )

}

export default SearchBar;