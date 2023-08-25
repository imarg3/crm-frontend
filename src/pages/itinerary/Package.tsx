import { Button } from "@material-tailwind/react";

const Package = () => {
  return (
    <>
      <div>
        <div className="bg-white shadow rounded-xl pt-6 pr-5 pb-9 pl-5">
          <div>
            <h3 className="font-medium text-xl border border-b-indigo-500 pb-2 inline-block">
              Standard package
            </h3>
          </div>
          <div className="flex items-center pt-6">
            <div className="pr-10">
              <h5 className="font-medium pb-1">Valid from</h5>
              <p>01 Feb 2022</p>
            </div>
            <div className="pr-10">
              <h5 className="font-medium pb-1">Valid till</h5>
              <p>15 Feb 2022</p>
            </div>
          </div>
          <div className="pt-5">
            <h5 className="font-medium border border-b-indigo-500 pb-2 inline-block">
              Package details
            </h5>
            <ul className="pt-5 list-disc ml-6">
              <li className="pb-4">Buffet breakfast as per the Itinerary</li>
              <li className="pb-4">
                Visit eight villages showcasing Polynesian culture
              </li>
              <li className="pb-4">Complimentary Camel safari, Bonfire,</li>
              <li className="pb-4">
                All toll tax, parking, fuel, and driver allowances
              </li>
              <li className="pb-4">Comfortable and hygienic vehicle</li>
            </ul>
          </div>
          <div className="pt-5">
            <h5 className="font-medium border border-b-indigo-500 pb-2 inline-block">
              Price
            </h5>
            <div className="flex items-center pt-4">
              <h6 className="text-base font-medium">
                <del>$ 35,500</del>
              </h6>
              <h3 className="pl-2 text-xl font-medium">
                $ 30,500{" "}
                <sub className="font-normal bottom-0 text-sm">/Per serson</sub>{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-b-xl rounded-t-none pb-6">
          <Button fullWidth>Select offer</Button>
        </div>
      </div>
    </>
  );
};

export default Package;
