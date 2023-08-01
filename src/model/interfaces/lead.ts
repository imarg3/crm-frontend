import { Status } from "../enums/status"
import { TravelDetails } from "./travel-details"

type CustomerInfo = Pick<Customer, "name" | "mobile">
type TravelDetailsInfo = Pick<TravelDetails, "destinations" | "departureCity" | "travelDate" | "totalNights">

export interface Lead {
    id: number,
    customerInfo: CustomerInfo,    
    createdDate: Date,
    travelDetailsInfo: TravelDetailsInfo    
    status: Status
}