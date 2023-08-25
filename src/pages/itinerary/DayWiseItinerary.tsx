import { ItineraryAccordion } from "./ItineraryAccordion";

const DayWiseItinerary = () => {
  return (
    <>
      <div className="bg-white shadow rounded-xl px-20 py-20 mt-8">
        <h3 className="border border-b-indigo-500 pb-2 inline-block font-medium mb-5">
          Itinerary
        </h3>
        <ItineraryAccordion />
      </div>
    </>
  );
};

export default DayWiseItinerary;
