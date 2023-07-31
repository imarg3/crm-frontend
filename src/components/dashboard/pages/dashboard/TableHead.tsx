import { Typography } from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const TableHead = ({ columns, sorting, sortTable }) => {  
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          const isDescSorting = sorting.column === column && sorting.order === "desc";
          const isAscSorting = sorting.column === column && sorting.order === "asc";
          const futureSortingOrder = isDescSorting? "asc" : "desc";

          return (
          <th
            key={column}
            className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50" 
            onClick={() => sortTable({column, order: futureSortingOrder})}
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
            >
              {column}{" "}
              {index !== columns.length - 1 && (
                isDescSorting && <ChevronDownIcon strokeWidth={2} className="h-4 w-4" />
              )}
              {index !== columns.length - 1 && (
                isAscSorting && <ChevronUpIcon strokeWidth={2} className="h-4 w-4" />
              )}
            </Typography>
          </th>
        )})}
      </tr>
    </thead>
  );
};

export default TableHead;
