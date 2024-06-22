import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.0684183&lng=77.71336&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    const cards = data?.data?.cards;
    cards?.forEach((card) => {
      const { card: { card: resCard } = {} } = card || {};

      if (resCard?.id === "restaurant_grid_listing") {
        const {
          gridElements: {
            infoWithStyle: { restaurants = [] },
          },
        } = resCard;
        setRestaurantList(restaurants);
      }
    });
  };

  return (
    <div className="w-full">
      <div className="w-[126rem] my-0 mx-auto">
        <div className="flex flex-wrap mt-12 gap-8">
          {!restaurantsList.length ? (
            <Shimmer />
          ) : (
            restaurantsList?.map((restaurant = {}, index) => {
              return <RestaurantCard restaurant={restaurant} key={index} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
