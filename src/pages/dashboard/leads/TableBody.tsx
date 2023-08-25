import {
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Lead } from "../../../model/interfaces/lead";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((leads: Lead, index) => {
        const isLast = index === data.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={leads.id}>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {leads.id}
              </Typography>
            </td>
            <td className={classes}>
              <div className="flex items-center gap-3">
                {/*<Avatar src={img} alt={name} size="sm" />*/}
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {leads.customerInfo.name}
                  </Typography>
                  {/*
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {mobile.mobile}
                        </Typography>
                      */}
                </div>
              </div>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {leads.customerInfo.mobile}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {leads.createdDate.toLocaleDateString()}
              </Typography>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {leads.travelDetailsInfo.destinations.join(", ")}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {leads.travelDetailsInfo.departureCity}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {leads.travelDetailsInfo.travelDate.toLocaleDateString()}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {leads.travelDetailsInfo.totalNights}
              </Typography>
            </td>
            <td className={classes}>
              <div className="w-max">
                <Chip
                  variant="ghost"
                  size="sm"
                  value={leads.status}
                  /*value={online ? "online" : "offline"}
                        color={online ? "green" : "blue-gray"}*/
                />
              </div>
            </td>
            <td className={classes}>
              <Tooltip content="Edit User">
                <IconButton variant="text" color="blue-gray">
                  <PencilIcon className="h-4 w-4" />
                </IconButton>
              </Tooltip>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
