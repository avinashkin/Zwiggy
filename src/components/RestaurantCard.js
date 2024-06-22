import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props = {}) => {
  const { restaurant = {} } = props;
  const {
    info: {
      cloudinaryImageId,
      name,
      avgRatingString,
      cuisines,
      costForTwo,
      sla,
      areaName
    } = {},
  } = restaurant;
  const cusine = cuisines.join(", ");
  return (
    <div className="">
      <div className="flex flex-1 flex-col rounded-3xl p-4 w-[30rem] gap-3 cursor-pointer border border-transparent hover:border-[#e4e8ed] hover:border hover:shadow-md">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
          className="h-72 rounded-3xl object-cover"
        />
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%] text-3xl font-medium" title={name}>{name}</h2>
            <div className="px-2 text-xl rounded bg-[#267e3e] text-white">{avgRatingString}<i className="fa-solid fa-star fa-xs ml-1" style={{color: "white"}}></i></div>
          </div>
          <div className="flex justify-between items-center text-2xl font-light mb-2">
            <div className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[60%]" title={cusine}>
              {cusine}
            </div>
            <div>{costForTwo}</div>
          </div>
          <div className="flex justify-between text-2xl">
            <div>{areaName}</div>
            <div>{sla.slaString}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
