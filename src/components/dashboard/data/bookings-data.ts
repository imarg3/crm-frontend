import { Destination } from "../../../model/enums";
import { BookingType } from "../../../model/enums/booking-type";
import { BookingStatus } from "../../../model/enums/booking-status";
import { Booking } from "../../../model/interfaces/booking";
import { PersonType } from "../../../model/enums/person";

export const bookingsTableData: Booking[] = [
  {
    id: 1,
    reference: "ORN00518SBL",
    type: BookingType.package,
    status: BookingStatus.confirmed,
    bookTime: new Date("2023-08-01"),
    travelDetails: {
      travelDate: new Date("2023-09-20"),
      destinations: [Destination.Singapore],
    },
    customerName: { name: "Tamir Singh" },
    totalPersons: [
      { name: "Tamir Singh", type: PersonType.Adult },
      { name: "Mahira Singh", type: PersonType.Adult },
    ],
    totalAmount: 63724,
    pendingAmount: 63724,
  },
  {
    id: 2,
    reference: "ORN004Z76XV",
    type: BookingType.package,
    status: BookingStatus.confirmed,
    bookTime: new Date("2023-08-01"),
    travelDetails: {
      travelDate: new Date("2023-10-02"),
      destinations: [Destination.Malaysia],
    },
    customerName: { name: "Amit Pratap" },
    totalPersons: [
        { name: "Amit Pratap", type: PersonType.Adult },
        { name: "Preeti Pratap", type: PersonType.Adult },
        { name: "Anuj Pratap", type: PersonType.Child },
      ],
    totalAmount: 45678,
    pendingAmount: 12987,
  },
];
