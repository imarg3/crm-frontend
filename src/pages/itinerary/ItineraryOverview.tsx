import { Typography } from "@material-tailwind/react";
import { ListBullets } from "@phosphor-icons/react";

const ItineraryOverview = () => {
  return (
    <>
      <div className="bg-white shadow rounded-xl px-20 py-20 mt-8">
        <h3 className="border border-b-indigo-500 pb-2 inline-block font-medium mb-5">
          Overview
        </h3>
        <div>
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
          </p>
          <p className="pb-4">
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </p>
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
        </div>
      </div>
    </>
  );
};

export default ItineraryOverview;
