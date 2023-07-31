import { useState, useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import api from "../../../../api/axiosConfig";
import TableHeader from "./TableHeader";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const LeadsTable = () => {
  const [leads, setLeads] = useState([]);
  const [sorting, setSorting] = useState({column: "createdDate", order: "desc"});
  const [searchValue, setSearchValue] = useState("");
  const columns = [
    "#",
    "name",
    "Mobile",
    "createdDate",
    "Destinations",
    "From",
    "travelDate",
    "Nights",
    "Status",
    "",
  ];

  const sortTable = (newSorting) => {
    alert("sort");
    setSorting(newSorting);
  }

  const searchTable = (newSearchValue) => {
    alert("search");
    setSearchValue(newSearchValue);
  }

  useEffect(() => {
    api.get(`/leads?_sort=${sorting.column}&_order=${sorting.order}`).then((response) => {
      console.log(response.data);
      setLeads(response.data);
    });
  }, [sorting, searchValue]);
  
  return (
    <Card className="h-full w-full">
      <TableHeader searchTable={searchTable} />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <TableHead columns={columns} sorting={sorting} sortTable={sortTable} />
          <TableBody data={leads} />
        </table>
      </CardBody>
      <TableFooter />
    </Card>
  );
};

export default LeadsTable;
