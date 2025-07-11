import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function ItineraryAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const dayStyle =
    "w-24 h-9 text-center text-black font-poppins leading-9 bg-blue-100 mr-4 font-medium text-lg";

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div>
            <h5 className={dayStyle}>Day 1</h5>
          </div>
          <div>
            <p className="font-poppins text-base">
              Stet clita kasd gubergren, no sea takimata sanctus est
            </p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-6">
            <li className="pb-4">Buffet breakfast as per the Itinerary</li>
            <li className="pb-4">
              Visit eight villages showcasing Polynesian culture
            </li>
            <li className="pb-4">
              Complimentary Camel safari, Bonfire, and Cultural Dance at Camp
            </li>
            <li className="pb-4">
              All toll tax, parking, fuel, and driver allowances
            </li>
            <li className="pb-4">
              Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on
              all days as per the itinerary.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div>
            <h5 className={dayStyle}>Day 2</h5>
          </div>
          <div>
            <p className="font-poppins text-base">
              Walk down the road and gardens by the bay on ramp
            </p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-6">
            <li className="pb-4">Buffet breakfast as per the Itinerary</li>
            <li className="pb-4">
              Visit eight villages showcasing Polynesian culture
            </li>
            <li className="pb-4">
              Complimentary Camel safari, Bonfire, and Cultural Dance at Camp
            </li>
            <li className="pb-4">
              All toll tax, parking, fuel, and driver allowances
            </li>
            <li className="pb-4">
              Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on
              all days as per the itinerary.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div>
            <h5 className={dayStyle}>Day 3</h5>
          </div>
          <div>
            <p className="font-poppins text-base">Sea side + shopping malls</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-6">
            <li className="pb-4">Buffet breakfast as per the Itinerary</li>
            <li className="pb-4">
              Visit eight villages showcasing Polynesian culture
            </li>
            <li className="pb-4">
              Complimentary Camel safari, Bonfire, and Cultural Dance at Camp
            </li>
            <li className="pb-4">
              All toll tax, parking, fuel, and driver allowances
            </li>
            <li className="pb-4">
              Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on
              all days as per the itinerary.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </>
  );
}
