import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Button,
  Chip,
} from "@material-tailwind/react";
import { Clock, ArrowUp, ChartLine } from "@phosphor-icons/react";
import { 
  EllipsisHorizontalIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  CalendarIcon 
} from "@heroicons/react/24/solid";
import { StatisticsCard } from "../../components/dashboard/widgets/cards/StatisticsCard";
import { StatisticsChart } from "../../components/dashboard/widgets/charts";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import {
  statisticsCardsData,
  statisticsChartsData,
  recentDealsData,
  recentActivitiesData,
} from "../../utils/data";

// Helper function to get stage color
const getStageColor = (stage: string) => {
  switch (stage.toLowerCase()) {
    case 'closed won': return 'green';
    case 'negotiation': return 'orange';
    case 'qualified': return 'blue';
    case 'proposal': return 'purple';
    case 'discovery': return 'cyan';
    case 'follow-up': return 'red';
    default: return 'gray';
  }
};

// Helper function to get priority color
const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'high': return 'red';
    case 'medium': return 'orange';
    case 'low': return 'green';
    default: return 'gray';
  }
};

export function Home() {
  return (
    <div className="relative">
      {/* Dashboard Header with Logout */}
      <DashboardHeader />
      
      <div className="mt-8 px-4">
        {/* CRM Statistics Cards */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          ))}
        </div>

        {/* Charts Section */}
        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          {statisticsChartsData.map((props) => (
            <StatisticsChart
              key={props.title}
              {...props}
              footer={
                <Typography
                  variant="small"
                  className="flex items-center font-normal text-blue-gray-600"
                >
                  <Clock strokeWidth={2} className="h-4 w-4 text-inherit" />
                  &nbsp;{props.footer}
                </Typography>
              }
            />
          ))}
        </div>

        {/* Recent Deals and Activities */}
        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Recent Deals Table */}
          <Card className="overflow-hidden xl:col-span-2">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex items-center justify-between p-6"
            >
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  Recent Deals
                </Typography>
                <Typography
                  variant="small"
                  className="flex items-center gap-1 font-normal text-blue-gray-600"
                >
                  <ChartLine className="h-4 w-4 text-green-500" />
                  <strong>5 deals</strong> closed this week
                </Typography>
              </div>
              <Menu placement="left-start">
                <MenuHandler>
                  <IconButton size="sm" variant="text" color="blue-gray">
                    <EllipsisHorizontalIcon
                      strokeWidth={3}
                      fill="currenColor"
                      className="h-6 w-6"
                    />
                  </IconButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem>View All Deals</MenuItem>
                  <MenuItem>Export Data</MenuItem>
                  <MenuItem>Add New Deal</MenuItem>
                </MenuList>
              </Menu>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {["Company", "Contact", "Value", "Stage", "Probability"].map(
                      (el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-6 text-left"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-medium uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {recentDealsData.slice(0, 5).map((deal, key) => {
                    const className = `py-3 px-5 ${
                      key === recentDealsData.slice(0, 5).length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={deal.id}>
                        <td className={className}>
                          <div className="flex items-center gap-3">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {deal.company}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={deal.contactImage}
                              alt={deal.contact}
                              size="sm"
                              className="border border-blue-gray-50 bg-blue-gray-50/50"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {deal.contact}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {deal.value}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            size="sm"
                            variant="ghost"
                            color={getStageColor(deal.stage)}
                            value={deal.stage}
                          />
                        </td>
                        <td className={className}>
                          <div className="w-max">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {deal.probability}%
                            </Typography>
                            <Progress
                              value={deal.probability}
                              variant="gradient"
                              color={deal.probability >= 75 ? "green" : deal.probability >= 50 ? "orange" : "red"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-6"
            >
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Recent Activities
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <ArrowUp strokeWidth={3} className="h-3.5 w-3.5 text-green-500" />
                <strong>15 activities</strong> today
              </Typography>
            </CardHeader>
            <CardBody className="pt-0">
              {recentActivitiesData.map(({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === recentActivitiesData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div className="flex-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-4">
          <Card>
            <CardBody className="p-6">
              <Typography variant="h6" color="blue-gray" className="mb-4">
                Quick Actions
              </Typography>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <Button
                  variant="gradient"
                  color="blue"
                  className="flex items-center gap-2"
                  fullWidth
                >
                  <PhoneIcon className="h-4 w-4" />
                  Schedule Call
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  className="flex items-center gap-2"
                  fullWidth
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  Send Email
                </Button>
                <Button
                  variant="gradient"
                  color="purple"
                  className="flex items-center gap-2"
                  fullWidth
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book Meeting
                </Button>
                <Button
                  variant="outlined"
                  color="blue-gray"
                  className="flex items-center gap-2"
                  fullWidth
                >
                  View All Leads
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
