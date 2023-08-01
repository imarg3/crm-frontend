import { TravelDetails } from "./travel-details"
import { BookingType } from "../enums/booking-type"
import { BookingStatus } from "../enums/booking-status"
import { Person } from "../types/person"

type CustomerInfo = Pick<Customer, "name">
type TravelDetailsInfo = Pick<TravelDetails, "travelDate" | "destinations">

export interface Booking {
    id: number,
    reference: string,
    type: BookingType,
    status: BookingStatus,
    bookTime: Date,
    travelDetails: TravelDetailsInfo,
    customerName: CustomerInfo,
    totalPersons: Person[],
    totalAmount: number,
    pendingAmount: number
}