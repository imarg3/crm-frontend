import {
  useState,
  useEffect,
  useCallback,
  MouseEventHandler,
  useMemo,
} from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import api from "../../../api/axiosConfig";
import TableHeader from "../../../utils/table/TableHeader";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import { bookingsTableData } from "../../../utils/data/bookings-data";

type Data = typeof bookingsTableData;
type SortKeys =
  | "id"
  | "reference"
  | "type"
  | "status"
  | "bookTime"
  | "travelDate"
  | "name"
  | "destinations"
  | "totalAmount"
  | "pendingAmount";
type SortOrder = "asc" | "desc";

const searchData = ({
  tableData,
  searchValue,
}: {
  tableData: Data;
  searchValue: string;
}) => {
  if (!searchValue) return tableData;

  const filteredLeads = tableData.filter((value) => {
    return (
      value?.reference?.toLowerCase().includes(searchValue?.toLowerCase()) ||
      value?.customerName?.name
        ?.toLowerCase()
        .includes(searchValue?.toLowerCase()) ||
      value?.travelDetails?.destinations
        ?.toString()
        .toLowerCase()
        .includes(searchValue?.toLowerCase())
    );
  });
  return filteredLeads;
};

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

  const sortedData = tableData.sort((a, b) => {
    if (
      sortKey === "id" ||
      sortKey === "reference" ||
      sortKey === "type" ||
      sortKey === "status" ||
      sortKey === "bookTime" ||
      sortKey === "totalAmount" ||
      sortKey === "pendingAmount"
    ) {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    if (
      sortKey === "name" ||
      sortKey === "destinations" ||
      sortKey === "travelDate"
    ) {
      const objSortKey: "customerName" | "travelDetails" =
        sortKey === "name" ? "customerName" : "travelDetails";
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

const BookingsTable = () => {
  const [bookings, setBookings] = useState<Data>(bookingsTableData);
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [searchValue, setSearchValue] = useState("");
  const columns: { key: SortKeys; label: string; sortable: boolean }[] = [
    { key: "id", label: "#", sortable: true },
    { key: "reference", label: "Reference", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "bookTime", label: "BookTime", sortable: true },
    { key: "travelDate", label: "Travel Date", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "destinations", label: "Destinations", sortable: true },
    { key: "totalAmount", label: "Total Amount", sortable: true },
    { key: "pendingAmount", label: "Pending Amount", sortable: true },
  ];

  const searchedData = useMemo(
    () =>
      searchData({
        tableData: bookings,
        searchValue,
      }),
    [bookings, searchValue]
  );

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: searchedData,
        sortKey,
        reverse: sortOrder === "desc",
      }),
    [searchedData, sortKey, sortOrder]
  );

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  };

  const changeSearch = (searchValue: string) => {
    setSearchValue(searchValue);
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
      <TableHeader changeSearch={changeSearch} />
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

export default BookingsTable;
