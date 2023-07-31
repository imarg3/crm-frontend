import { useState, useEffect, useCallback, MouseEventHandler } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import api from "../../../../api/axiosConfig";
import TableHeader from "./TableHeader";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import { leadsTableData } from "../../data/leads-data";

type Data = typeof leadsTableData;
type SortKeys = keyof Data[0];
type SortOrder = "asc" | "desc";

const sortData = ({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) => {
  if (!sortKey) return tableData;

  const sortedData = leadsTableData.sort((a, b) => {
    if(sortKey === "id" || sortKey === "createdDate" || sortKey === "status") {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    if(sortKey === "customerName" || sortKey === "mobile" || sortKey === "destinations" 
    || sortKey === "departureCity" || sortKey === "travelDate" || sortKey === "totalNights") {
        return Object.values(a[sortKey])
        .toString()
        .localeCompare(Object.values(b[sortKey]).toString(), "en", {
          numeric: true,
        });
    } 
  });

  if (reverse) {
    return sortedData.reverse();
  }
  

  return sortedData;
};

const SortIcon = ({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler;
}) => {
  const isDesc = sortKey === columnKey && sortOrder === "desc";
  return (
    <>
      {isDesc ? (
        <ChevronUpIcon strokeWidth={2} className="h-4 w-4" onClick={onClick} />
      ) : (
        <ChevronDownIcon
          strokeWidth={2}
          className="h-4 w-4"
          onClick={onClick}
        />
      )}
    </>
  );
};

const LeadsTable = () => {
  const [leads, setLeads] = useState<Data>(leadsTableData);
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [searchValue, setSearchValue] = useState("");
  const columns: { key: SortKeys; label: string }[] = [
    { key: "id", label: "#" },
    { key: "customerName", label: "Customer Name" },
    { key: "mobile", label: "Mobile" },
    { key: "createdDate", label: "Created Date" },
    { key: "destinations", label: "Destinations" },
    { key: "departureCity", label: "From" },
    { key: "travelDate", label: "Travel Date" },
    { key: "totalNights", label: "Nights" },
    { key: "status", label: "Status" },
  ];

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: leadsTableData,
        sortKey,
        reverse: sortOrder === "desc",
      }),
    [leadsTableData, sortKey, sortOrder]
  );

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  };

  const searchTable = (newSearchValue) => {
    alert("search");
    setSearchValue(newSearchValue);
  };

  /*
  useEffect(() => {
   
    api.get(`/leads?_sort=${sorting.column}&_order=${sorting.order}`).then((response) => {
      console.log(response.data);
      setLeads(response.data);
    });
  }, [sorting, searchValue]);
  */

  return (
    <Card className="h-full w-full">
      <TableHeader searchTable={searchTable} />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
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
                      <SortIcon
                        columnKey={column.key}
                        onClick={() => changeSort(column.key)}
                        {...{ sortOrder, sortKey }}
                      />
                    </Typography>
                  </th>
                );
              })}
            </tr>
          </thead>
          <TableBody data={sortedData()} />
        </table>
      </CardBody>
      <TableFooter />
    </Card>
  );
};

export default LeadsTable;
