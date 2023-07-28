export interface Proposal {
    proposalNumber: number,
    createdAt: Date,
    name: string,
    uid: string,    
    travelDetails: TravelDetails,
    priceQuoted: number
}