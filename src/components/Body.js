import { useEffect, useState } from "react";
import TopBrands from "./TopBrands";
import Restaurants from "./Restaurants";
import { useOutletContext } from "react-router-dom";

const Body = () => {
  const [restaurantsCard, setRestaurantCard] = useState({});
  const [topBrandsCard, setTopBrandsCard] = useState({});
  const [title, setTitle] = useState("");
  const [apiCalled, setApiCalled] = useState(false);
  const [geometry] = useOutletContext();
  const [apiFail, setApiFail] = useState(false);
  const { location: { lat, lng } = {} } = geometry || {};

  useEffect(() => {
    setTopBrandsCard({});
    setRestaurantCard({});
    fetchData();
  }, [lat, lng]);

  const fetchData = async () => {
    setApiCalled(false);
    setApiFail(false);
    try {
      const res = await fetch(
        "https://zwiggy-backend-ajoh.onrender.com/api/restaurants?lat=" + lat + "&lng=" + lng
      );
      const data = await res.json();
      const cards = data?.data?.cards;
      cards?.forEach((card) => {
        const { card: { card: resCard } = {} } = card || {};

        if (resCard?.id === "top_brands_for_you") {
          setTopBrandsCard(resCard);
        }

        if (resCard?.id === "restaurant_grid_listing") {
          setRestaurantCard(resCard);
        }

        if (resCard?.id === "popular_restaurants_title") {
          resCard?.title && setTitle(resCard?.title);
        }
      });
    } catch (err) {
      setApiFail(true);
    }

    setApiCalled(true);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="margin-class m-0">
        <TopBrands data={topBrandsCard} apiCalled={apiCalled} apiFail={apiFail} />
      </div>
      <div className="margin-class my-0 mx-auto">
        <Restaurants
          data={restaurantsCard}
          title={title}
          apiCalled={apiCalled}
          apiFail={apiFail}
        />
      </div>
    </div>
  );
};

export default Body;
