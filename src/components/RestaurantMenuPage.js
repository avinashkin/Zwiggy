import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenuPageShimmer from "./Shimmer/MenuPageShimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { resId } = params;
  
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const {info: {
    avgRatingString,
    areaName,
    totalRatingsString,
    sla = {},
    costForTwoMessage,
    cuisines = [],
    city,
    name,
    expectationNotifiers = []
} = {}} = resInfo;

    const {slaString = '', lastMileTravelString = ''} = sla;
    const {text: deliveryFee = ''} = expectationNotifiers[0] || {};



  const fetchRestaurantMenu = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await res.json();
    const { data: { cards = [] } = {} } = data || {};

    cards?.forEach((card) => {
      const { card: { card: resCard = {} } = {} } = card || {};
      const keys =
        resCard["@type"] && resCard["@type"].toLowerCase().split(".");
      if (keys && keys.includes("restaurant")) {
        console.log("Found", resCard);
        setResInfo(resCard);
      }
    });
    setIsLoading(false);
  };


  const renderBreadcrumbs = () => {
    return (
      <div className="text-xl text-slate-400">
        <span className="hover:underline">
          <Link to="/">Home</Link>
        </span>
        <span className="mx-4">/</span>
        <span className="hover:underline">
          <Link>{city}</Link>
        </span>
        <span className="mx-4">/</span>
        <span className="text-black">{name}</span>
      </div>
    );
  };

  const renderRestaurantInfo = () => {
    
    return (
      <div
        className="mt-20 h-[250px] w-[900px] rounded-b-[4.5rem]"
        style={{
          background:
            "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
        }}
      >
        <div className="m-auto bg-white w-[850px] h-[230px] rounded-[3.25rem] border left-[2.5rem] p-12 flex flex-col gap-6">
            <div className="flex flex-row items-center">
                <div className="bg-[#267e3e] w-8 h-8 rounded-full flex items-center justify-center mr-4"><i className="fa-solid fa-star" style={{color: "white"}}></i></div>
                <div className="text-head mr-2 font-semibold">{avgRatingString}</div>
                <div className="text-head font-semibold">{`(${totalRatingsString})`}</div>
                <div className="w-2 h-2 rounded-full bg-slate-400 mx-2"></div>
                <div className="text-head font-semibold">{costForTwoMessage}</div>
            </div>
            <div className="text-sub text-[#fc8019]">
                {cuisines.join(", ")}
            </div>
            <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                    <div className="h-9 w-[1px] bg-slate-400"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                </div>
                <div className="flex flex-col text-sub gap-3">
                    <div className="flex gap-6">
                        <span className="font-semibold">Outlet</span>
                        <span>{areaName}</span>
                    </div>
                    <div className="font-semibold">{slaString}</div>
                </div>
            </div>
            <div className="items-center border-t -mx-12 flex text-sub px-12 pt-4 gap-3 text-slate-500">
                <i className="fa-solid fa-person-biking"></i> 
                <div>{lastMileTravelString}</div>
                <span>|</span>
                <div>{deliveryFee.split("|")[1]}</div>
            </div>
        </div>
      </div>
    );
  };

  return isLoading ? <MenuPageShimmer /> : (
    <div className="max-w-[900px] mx-auto mt-12">
      {renderBreadcrumbs()}
      <h1 className="text-5xl mt-10">{name}</h1>
      {renderRestaurantInfo()}
    </div>
  );
};

export default RestaurantMenu;
