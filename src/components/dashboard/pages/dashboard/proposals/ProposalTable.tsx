import { useState, useEffect, useCallback, MouseEventHandler } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import api from "../../../../../api/axiosConfig";
import TableHeader from "../proposals/TableHeader";
import TableHead from "../proposals/TableHead";
import TableBody from "../proposals/TableBody";
import TableFooter from "../proposals/TableFooter";
import { proposalsTableData } from "../../../data/proposals-data";

type Data = typeof proposalsTableData;
type SortKeys =
  | "id"
  | "proposalNumber"
  | "name"
  | "createdAt"
  | "proposalName"
  | "travelDate"
  | "departureCity"
  | "priceQuoted";
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

  const sortedData = proposalsTableData.sort((a, b) => {
    if (sortKey === "id" || sortKey === "proposalNumber"  || sortKey === "createdAt" 
    || sortKey === "proposalName"   || sortKey==="priceQuoted") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    if (
      sortKey === "name" ||      
      sortKey === "departureCity" ||      
      sortKey === "travelDate"  
    ) {
      const objSortKey: "customerName" | "travelDetails" = sortKey === "name"
          ? "customerName"
          : "travelDetails";      
      return a[objSortKey][sortKey]
        .toString()
        .localeCompare(b[objSortKey][sortKey].toString(), "en", {
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

const ProposalsTable = () => {
  const [bookings, setBookings] = useState<Data>(proposalsTableData);
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [searchValue, setSearchValue] = useState("");
  const columns: { key: SortKeys; label: string; sortable: boolean }[] = [
    { key: "id", label: "#", sortable: true },
    { key: "proposalNumber", label: "Proposal Number", sortable: true },
    { key: "name", label: "Customer Name", sortable: true },
    { key: "createdAt", label: "Created At", sortable: true },
    { key: "proposalName", label: "Proposal Name", sortable: true },
    { key: "travelDate", label: "Travel Date", sortable: true },
    { key: "departureCity", label: "Departure City", sortable: true },
    { key: "priceQuoted", label: "Price Quoted", sortable: true }
  ];

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: proposalsTableData,
        sortKey,
        reverse: sortOrder === "desc",
      }),
    [proposalsTableData, sortKey, sortOrder]
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
          <TableHead
            columns={columns}
            changeSort={changeSort}
            sortIcon={SortIcon}
            sortOrder={sortOrder}
            sortKey={sortKey}
          />
          <TableBody data={sortedData()} />
        </table>
      </CardBody>
      <TableFooter />
    </Card>
  );
};

export default ProposalsTable;
