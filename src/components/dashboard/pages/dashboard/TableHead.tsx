import { Typography } from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const TableHead = ({ columns, SortIcon }) => {  
  
  return (
    <thead>
      <tr>
        {columns.map((column) => {          
          return (
          <th
            key={column.key}
            className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"             
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
            >
              {column.label}{" "}              
            </Typography>
          </th>
        )})}
      </tr>
    </thead>
  );
};

export default TableHead;
