import {
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(
        (
          {
            customerName,
            mobile,
            createdDate,
            destinations,
            departureCity,
            travelDate,
            totalNights,
            status,
          },
          index
        ) => {
          const isLast = index === data.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";          

          return (
            <tr key={index}>
                <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {index+1}
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
                      {customerName}
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
                  {mobile}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {createdDate}
                </Typography>
              </td>
              <td className={classes}>
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {destinations}
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
                    {departureCity}
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
                    {travelDate}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {totalNights}
                </Typography>
              </td>
              <td className={classes}>
                <div className="w-max">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={status}
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
        }
      )}
    </tbody>
  );
};

export default TableBody;
