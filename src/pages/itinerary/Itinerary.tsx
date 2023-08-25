import DayWiseItinerary from "./DayWiseItinerary";
import ItineraryHeader from "./ItineraryHeader";
import ItineraryIncludeExclude from "./ItineraryIncludeExclude";
import ItineraryOverview from "./ItineraryOverview";
import Package from "./Package";

const Itinerary = () => {
  return (
    <>
      <section className="p-100">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap">
            <div className="lg:w-2/3 pr-4 pl-4">
              <ItineraryHeader />
              <ItineraryOverview />
              <DayWiseItinerary />
              <ItineraryIncludeExclude />
            </div>
            <div className="lg:w-1/3 pr-4 pl-4">
              <Package />
              <div></div>
              <Package />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Itinerary;
