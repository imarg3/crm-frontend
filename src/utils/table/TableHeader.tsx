import {
    Button,
    CardHeader,
    Tab,
    Tabs,
    TabsHeader,
    Typography,
  } from "@material-tailwind/react";
  import { UserPlusIcon } from "@heroicons/react/24/solid";
  import SearchBar from "./SearchBar";
  
  const TableHeader = ({changeSearch}) => {
    const TABS = [
      {
        label: "All",
        value: "all",
      },
      {
        label: "Monitored",
        value: "monitored",
      },
      {
        label: "Unmonitored",
        value: "unmonitored",
      },
    ];
  
    return (
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" color="blue" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
         <SearchBar changeSearch={changeSearch} />
        </div>
      </CardHeader>
    );
  };
  
  export default TableHeader;
  