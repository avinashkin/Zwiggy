import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Restaurants = (props = {}) => {
  const { data, title = "" } = props;
  const {
    gridElements: { infoWithStyle: { restaurants = [] } = {} } = {}
  } = data || {};

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
              return <Link to={`/restaurants/${restaurant?.info.id}`}><RestaurantCard restaurant={restaurant} key={index} /></Link>;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Restaurants;
