interface Booking {
    reference: string,
    type: BookingType,
    status: BookingStatus,
    bookTime: Date,
    travelDetails: TravelDetails,
    customer: Customer,
    totalAmount: number,
    pendingAmount: number
}