export const LeadsTableData: Lead[] = [
    {
        "customerName": {name: "Travel Me"},
        "mobile": {"mobile": 999998888},
        "createdDate": new Date("2023-07-26"),
        "destinations": {destinations: [Destination.Dubai, Destination.Singapore]},
        "departureCity": {departureCity: "Pune"},
        "travelDate": {travelDate: new Date("2023-08-20")},
        "totalNights": {totalNights: 7},
        "status": Status.quote_sent
    },
    {
        "customerName": {name: "Arpit Gupta"},
        "mobile": {"mobile": 8805512560},
        "createdDate": new Date("2023-07-29"),
        "destinations": {destinations: [Destination.Singapore]},
        "departureCity": {departureCity: "Pune"},
        "travelDate": {travelDate: new Date("2023-09-03")},
        "totalNights": {totalNights: 5},
        "status": Status.quote_sent
    }
];