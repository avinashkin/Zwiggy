import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import TopBrandShimmer from "./Shimmer/TopBrandShimmer";
import Carousel from "./Carousel";

const TopBrands = (props = {}) => {
  const { data, apiCalled, apiFail } = props;
  const {
    gridElements: { infoWithStyle: { restaurants = [] } = {} } = {},
    header: { title = "" } = {},
  } = data || {};

  if (apiCalled && !restaurants.length) {
    return null;
  }

  if (apiFail) return null;

  return !restaurants.length ? (
    <TopBrandShimmer />
  ) : (
    <Carousel shift={316} title={title}>
      {restaurants.map((restaurant, idx) => {
        return (
          <Link key={idx} to={`/restaurants/${restaurant?.info.id}`}>
            <RestaurantCard restaurant={restaurant} />
          </Link>
        );
      })}
    </Carousel>
  );
};

export default TopBrands;
