import { Typography } from "@material-tailwind/react";
import {
  Clock,
  MapPin,
  MapPinLine,
  PawPrint,
  UsersFour,
} from "@phosphor-icons/react";

const ItineraryHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="pt-4 text-base">
          <Typography variant="h2">Explore the evergreen forest</Typography>
          <div className="flex items-center">
            <div>
              <MapPin size={16} />
            </div>
            <div>
              <h5>Amazon evergreen forest, Amazon.</h5>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-deep-purple-900">Excellent</h4>
          <h6 className="text-base pt-1 text-deep-purple-900">4.8/5</h6>
          <p className="pt-0 text-sm">(1214 reviewes)</p>
        </div>
      </div>
      <div className="mt-6 border-t pt-3 border-b pb-3 flex justify-between">
        <div className="flex items-center">
          <div className="text-3xl pr-2">
            <Clock size={32} />
          </div>
          <div>
            <h5 className="font-medium">Duration</h5>
            <p className="text-sm">10 days</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-3xl pr-2">
            <PawPrint size={32} />
          </div>
          <div>
            <h5 className="font-medium">Tour type</h5>
            <p className="text-sm">Group tour</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-3xl pr-2">
            <UsersFour size={32} />
          </div>
          <div>
            <h5 className="font-medium">Group size</h5>
            <p className="text-sm">50 people</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-3xl pr-2">
            <MapPinLine size={32} />
          </div>
          <div>
            <h5 className="font-medium">Location</h5>
            <p className="text-sm">Amazon rain forest</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItineraryHeader;
