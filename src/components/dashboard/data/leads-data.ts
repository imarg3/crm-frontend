import { Destination, Status } from "../../../model/enums";
import { Lead } from "../../../model/interfaces/lead"

export const leadsTableData: Lead[] = [
    {
        "id": 1,
        "customerName": {name: "Travel Me"},
        "mobile": {mobile: 999998888},
        "createdDate": new Date("2023-07-26"),
        "destinations": {destinations: [Destination.Dubai, Destination.Singapore]},
        "departureCity": {departureCity: "Pune"},
        "travelDate": {travelDate: new Date("2023-08-20")},
        "totalNights": {totalNights: 7},
        "status": Status.quote_sent        
    },
    {
        "id": 2,
        "customerName": {name: "Arpit Gupta"},
        "mobile": {"mobile": 8805512560},
        "createdDate": new Date("2023-07-29"),
        "destinations": {destinations: [Destination.Singapore]},
        "departureCity": {departureCity: "Pune"},
        "travelDate": {travelDate: new Date("2023-09-03")},
        "totalNights": {totalNights: 5},
        "status": Status.quote_expired
    }
];