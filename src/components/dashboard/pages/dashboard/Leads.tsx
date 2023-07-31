import { useSortableTable } from "../../../../shared/useSotableTable"; 
import LeadsTable from "./LeadsTable";
 
export function Leads() {
  /*
  function getDefaultSorting(defaultTableData, columns) {    
    const sorted = [...defaultTableData].sort((a, b) => {
      const filterColumn = columns.filter((column) => column.sortbyOrder);
      console.log("filter: " + filterColumn);
  
      // Merge all array objects into single object and extract accessor and sortbyOrder keys
      let { accessor = "id", sortbyOrder = "asc" } = Object.assign(
        {},
        ...filterColumn
      );
  
      if (a[accessor] === null) return 1;
      if (b[accessor] === null) return -1;
      if (a[accessor] === null && b[accessor] === null) return 0;
  
      const ascending = a[accessor].toString().localeCompare(b[accessor].toString(), "en", {
          numeric: true,
        });
  
      return sortbyOrder === "asc" ? ascending : -ascending;
    });
    return sorted;
  }

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [tableData, setTableData] = useState(getDefaultSorting(leadsTableData, TABLE_HEAD));

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  */

  return (       
    <LeadsTable />      
  );
}