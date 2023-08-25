import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { Country, State, City } from "country-state-city";

export function CityStateCountrySelect() {
  const countries = Country.getAllCountries();
  const [countryCode, setCountryCode] = useState("");
  const states = State.getStatesOfCountry(countryCode);
  const [stateCode, setStateCode] = useState("");
  const cities = City.getCitiesOfState(countryCode, stateCode);

  const updateStates = (event) => {
    const selectedCountryCode = event;
    console.log(`Selected country name - ${selectedCountryCode}`);
    setCountryCode(selectedCountryCode);
  };

  const updateCities = (event) => {
    const selectedStateCode = event;
    console.log(`Selected state name - ${selectedStateCode}`);
    setStateCode(selectedStateCode);
  };

  return (
    <>
      <div className="w-72">
        <Select
          size="lg"
          label="Select Country"
          onChange={updateStates}
          selected={(element) =>
            element &&
            React.cloneElement(element, {
              className: "flex items-center px-0 gap-2 pointer-events-none",
            })
          }
        >
          {countries.map(({ name, flag, isoCode }) => (
            <Option
              key={name}
              value={isoCode}
              className="flex items-center gap-2"
            >
              <div className="h-5 w-5 rounded-full object-cover">{flag}</div>
              {name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="w-72">
        <Select
          size="lg"
          label="Select State"
          onChange={updateCities}
          selected={(element) =>
            element &&
            React.cloneElement(element, {
              className: "flex items-center px-0 gap-2 pointer-events-none",
            })
          }
        >
          {states.map(({ name, isoCode }) => (
            <Option
              key={name}
              value={isoCode}
              className="flex items-center gap-2"
            >
              {name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="w-72">
        <Select
          size="lg"
          label="Select City"
          selected={(element) =>
            element &&
            React.cloneElement(element, {
              className: "flex items-center px-0 gap-2 pointer-events-none",
            })
          }
        >
          {cities.map(({ name }) => (
            <Option key={name} value={name} className="flex items-center gap-2">
              {name}
            </Option>
          ))}
        </Select>
      </div>
    </>
  );
}
