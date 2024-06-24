import { useEffect, useState } from "react";

const LocationComponent = (props = {}) => {
  const { toggleSidebar, showLocationSidebar, setAddress, setGeometry } = props;
  const [location, setInputLocation] = useState("");
  const [fetchedLocations, setFetchedLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(fetchLocations, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  const fetchLocations = async () => {
    if (location.length < 3) {
      return;
    }

    const res = await fetch(
      "https://www.swiggy.com/dapi/misc/place-autocomplete?input=" +
        location +
        "&types="
    );
    const data = await res.json();
    const { data: locations = [] } = data || {};
    setFetchedLocations(locations);
  };

  const closeSidebar = () => {
    setInputLocation("");
    toggleSidebar();
    setFetchedLocations([]);
  };

  const fetchAdderssDetails = async (locationId) => {
    setIsLoading(true);
    const res = await fetch("https://www.swiggy.com/dapi/misc/address-recommend?place_id=" + locationId);
    const data = await res.json();
    const {data: locationInfo = [] } = data;
    const {formatted_address, geometry = {}} = locationInfo[0];
    setAddress(formatted_address);
    setGeometry(geometry);
    closeSidebar();
    setIsLoading(false);
  };

  return (
    <>
      <div className="pt-20 pl-20">
        <i
          className="fa-solid fa-xmark text-4xl cursor-pointer"
          onClick={closeSidebar}
        ></i>
        <div className="mt-16">
          <input
            className="p-3 w-[300px] border focus:shadow-md h-20 rounded text-sub outline-none transition-all mb-20"
            value={location}
            onChange={(e) => setInputLocation(e.target.value)}
            placeholder="Search for area, streetname.."
          />
          {isLoading ? <div className="flex justify-center pr-24 mt-10"><i className="fa-solid text-5xl fa-circle-notch fa-spin text-[#fc8019]"></i></div> : fetchedLocations.map((loc) => {
            const { description = "", place_id } = loc;
            const name = description.split(",")[0];
            const subDesc = description.split(",").slice(1);

            return (
              <div key={place_id} className="flex gap-4 mb-10 mr-8">
                <i className="fa-solid text-2xl fa-location-dot"></i>
                <div className="flex flex-col gap-3 border-b border-dashed w-full pb-6" onClick={() => fetchAdderssDetails(place_id)}>
                    <div className="text-2xl hover:text-[#fc8019]">{name}</div>
                    <div className="text-xl">{subDesc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showLocationSidebar && (
        <div
          className="h-screen w-screen bg-black fixed top-0 z-10 opacity-50 ml-[450px]"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default LocationComponent;
