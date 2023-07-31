import { Status } from "../enums/status"

export type Lead = {
    customerName: Pick<Customer, "name">,
    mobile: Pick<Customer, "mobile">,
    createdDate: Date,
    destinations: Pick<TravelDetails, "destinations">,
    departureCity: Pick<TravelDetails, "departureCity">,
    travelDate: Pick<TravelDetails, "travelDate">,
    totalNights: Pick<TravelDetails, "totalNights">,
    status: Status
}