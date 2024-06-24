import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer/Shimmer";
import locationUnserviceable from '../assets/location_unserviceable.avif';

const Restaurants = (props = {}) => {
  const { data, title = "", apiCalled } = props;
  const {
    gridElements: { infoWithStyle: { restaurants = [] } = {} } = {}
  } = data || {};

  if (apiCalled && !restaurants.length) {
    return (
      <div className="flex flex-col items-center justify-center w-full mt-40">
        <img src={locationUnserviceable} alt="Location Unserviceable" height={238} width={238} className="object-cover"/>
        <h1 className="font-bold text-4xl mt-8">Location Unserviceable</h1>
        <div className="text-2xl mt-4">We don’t have any services here till now. Try changing location.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-14">
      {!restaurants.length ? (
        <div className="flex flex-wrap mt-12 gap-8">
            <Shimmer />
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
          </div>
          <div className="flex flex-wrap mt-12 gap-8">
            {restaurants?.map((restaurant = {}, index) => {
              return <Link to={`/restaurants/${restaurant?.info.id}`} key={index}><RestaurantCard restaurant={restaurant} /></Link>;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Restaurants;
