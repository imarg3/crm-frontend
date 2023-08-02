import {  
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { CurrencyInr } from "@phosphor-icons/react";
import { Proposal } from "../../../../../model/interfaces/proposal";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(
        (
          proposal: Proposal, index        
        ) => {
          const isLast = index === data.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";          

          return (
            <tr key={proposal.id}>
                <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {proposal.id}
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
                      {proposal.proposalNumber}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {proposal.customerName.name}
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
                    {proposal.createdAt.toLocaleDateString()}                     
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {proposal.proposalName}
                </Typography>
              </td>
              <td className={classes}>
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {proposal.travelDetails.travelDate.toLocaleDateString()}                     
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
                    {proposal.travelDetails.departureCity}
                  </Typography>
                </div>
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
                  {proposal.priceQuoted}
                </Typography>
              </td>             
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default TableBody;
