import { TravelDetails } from "./travel-details"

type CustomerInfo = Pick<Customer, "name">
type TravelDetailsInfo = Pick<TravelDetails, "departureCity" | "travelDate">

export interface Proposal {
    id:number,
    proposalNumber: number,
    customerName: CustomerInfo,
    createdAt: Date,
    proposalName: string,    
    travelDetails: TravelDetailsInfo,
    priceQuoted: number
}