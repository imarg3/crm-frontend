import { Destination, Status } from "../../../model/enums";
import { Lead } from "../../../model/interfaces/lead"

export const leadsTableData: Lead[] = [
    {
        "id": 1,
        "customerInfo": {name: "Travel Me", mobile: "999998888"},       
        "createdDate": new Date("2023-07-26"),
        "travelDetailsInfo": {destinations: [Destination.Dubai, Destination.Singapore], departureCity: "Pune", travelDate: new Date("2023-08-20"), totalNights: 7},
        "status": Status.quote_sent
    },
    {
        "id": 2,
        "customerInfo": {name: "Arpit Gupta", mobile: "8805512560"},
        "createdDate": new Date("2023-07-29"),
        "travelDetailsInfo": {destinations: [Destination.Singapore], departureCity: "Pune", travelDate: new Date("2023-09-03"), totalNights: 5},
        "status": Status.quote_expired
    }
];