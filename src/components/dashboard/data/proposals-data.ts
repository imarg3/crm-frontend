import { Proposal } from "../../../model/interfaces/proposal";

export const proposalsTableData: Proposal[] = [
  {
    id: 1,
    proposalNumber:1234,
    customerName: { name: "Tamir Singh" },
    createdAt: new Date("2023-08-01"),
    proposalName:"My proposal",
    travelDetails: {
      travelDate: new Date("2023-09-20"),
      departureCity: "Miami",
    },
    priceQuoted:98000
  },
  {
    id: 2,
    proposalNumber:5432,
    customerName: { name: "Jack Ryan" },
    createdAt: new Date("2023-06-11"),
    proposalName:"Second Proposal",
    travelDetails: {
      travelDate: new Date("2023-04-18"),
      departureCity: "San-Fransisco",
    },
    priceQuoted:12000
  },
];
