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
import { proposalsTableData } from "../../../utils/data/proposals-data";

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
      value?.proposalName?.toLowerCase().includes(searchValue?.toLowerCase()) ||
      value?.travelDetails?.departureCity
        ?.toLowerCase()
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
      sortKey === "proposalNumber" ||
      sortKey === "createdAt" ||
      sortKey === "proposalName" ||
      sortKey === "priceQuoted"
    ) {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    if (
      sortKey === "name" ||
      sortKey === "departureCity" ||
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

const ProposalsTable = () => {
  const [proposals, setProposals] = useState<Data>(proposalsTableData);
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
    { key: "priceQuoted", label: "Price Quoted", sortable: true },
  ];

  const searchedData = useMemo(
    () =>
      searchData({
        tableData: proposals,
        searchValue,
      }),
    [proposals, searchValue]
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

export default ProposalsTable;
