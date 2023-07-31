import { Status } from "../enums/status"

type CustomerName = Pick<Customer, "name">
type MobileType = Pick<Customer, "mobile">

export interface Lead {
    id: number,
    customerName: CustomerName,
    mobile: MobileType,
    createdDate: Date,
    destinations: Pick<TravelDetails, "destinations">,
    departureCity: Pick<TravelDetails, "departureCity">,
    travelDate: Pick<TravelDetails, "travelDate">,
    totalNights: Pick<TravelDetails, "totalNights">,
    status: Status
}