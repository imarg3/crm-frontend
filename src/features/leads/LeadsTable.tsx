import {
  useState,
  useEffect,
  useCallback,
  MouseEventHandler,
  useMemo,
} from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import api from "../../api/axiosConfig";
import TableHeader from "../../utils/table/TableHeader";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import { leadsTableData } from "../../utils/data/leads-data";
import { Lead } from "../../model/interfaces/lead";
import { Destination } from "../../model/enums";

type Data = typeof leadsTableData;
type SortKeys =
  | "id"
  | "name"
  | "mobile"
  | "createdDate"
  | "destinations"
  | "departureCity"
  | "travelDate"
  | "totalNights"
  | "status"
  | "edit";
type SortOrder = "asc" | "desc";

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
    if (sortKey === "id" || sortKey === "createdDate" || sortKey === "status") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    if (
      sortKey === "name" ||
      sortKey === "mobile" ||
      sortKey === "destinations" ||
      sortKey === "departureCity" ||
      sortKey === "travelDate" ||
      sortKey === "totalNights"
    ) {
      const objSortKey: "customerInfo" | "travelDetailsInfo" =
        sortKey === "name" || sortKey === "mobile"
          ? "customerInfo"
          : "travelDetailsInfo";
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
      value?.customerInfo?.name
        ?.toLowerCase()
        .includes(searchValue?.toLowerCase()) ||
      value?.customerInfo?.mobile
        ?.toLowerCase()
        .includes(searchValue?.toLowerCase()) ||
      value?.travelDetailsInfo?.destinations
        ?.toString()
        .toLowerCase()
        .includes(searchValue?.toLowerCase()) ||
      value?.travelDetailsInfo?.departureCity
        ?.toLowerCase()
        .includes(searchValue?.toLowerCase())
    );
  });
  return filteredLeads;
};

const LeadsTable = () => {
  const [leads, setLeads] = useState<Data>(leadsTableData);
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [searchValue, setSearchValue] = useState("");
  const columns: { key: SortKeys; label: string; sortable: boolean }[] = [
    { key: "id", label: "#", sortable: true },
    { key: "name", label: "Customer Name", sortable: true },
    { key: "mobile", label: "Mobile", sortable: true },
    { key: "createdDate", label: "Created Date", sortable: true },
    { key: "destinations", label: "Destinations", sortable: true },
    { key: "departureCity", label: "From", sortable: true },
    { key: "travelDate", label: "Travel Date", sortable: true },
    { key: "totalNights", label: "Nights", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "edit", label: "", sortable: false },
  ];

  const searchedData = useMemo(
    () =>
      searchData({
        tableData: leads,
        searchValue,
      }),
    [leads, searchValue]
  );

  const sortedData = useMemo(
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
          <TableBody data={sortedData} />
        </table>
      </CardBody>
      <TableFooter />
    </Card>
  );
};

export default LeadsTable;
