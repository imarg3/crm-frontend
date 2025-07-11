import {
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { CurrencyInr } from "@phosphor-icons/react";
import { Booking } from "../../../model/interfaces/booking";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((booking: Booking, index) => {
        const isLast = index === data.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={booking.id}>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {booking.id}
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
                    {booking.reference}
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
              <div className="w-max">
                <Chip
                  variant="ghost"
                  size="sm"
                  value={booking.type}
                  /*value={online ? "online" : "offline"}
                        color={online ? "green" : "blue-gray"}*/
                />
              </div>
            </td>
            <td className={classes}>
              <div className="w-max">
                <Chip
                  variant="ghost"
                  size="sm"
                  value={booking.status}
                  /*value={online ? "online" : "offline"}
                        color={online ? "green" : "blue-gray"}*/
                />
              </div>
            </td>
            <td className={classes}>
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {booking.bookTime.toLocaleDateString()}
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
                  {booking.travelDetails.travelDate.toLocaleDateString()}
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
                  {booking.customerName.name}
                </Typography>
              </div>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {booking.travelDetails.destinations}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                <IconButton variant="text" color="blue-gray">
                  <CurrencyInr />
                </IconButton>
                {booking.totalAmount}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                <IconButton variant="text" color="blue-gray">
                  <CurrencyInr />
                </IconButton>
                {booking.pendingAmount}
              </Typography>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
