import { Destination } from "../enums"
import { PersonType } from "../enums/person"

export interface TravelDetails {    
    departureCity: string,
    nationality: string,
    travelDate: Date,
    rooms: number,
    totalNights: number,
    destinations: Array<Destination>,
    totalGuests: Array<PersonType>
}