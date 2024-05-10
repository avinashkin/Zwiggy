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
    } = {},
  } = restaurant;
  return (
    <div className="flex flex-col rounded-3xl p-4 w-[35rem] gap-3 cursor-pointer border border-transparent hover:border-[#e4e8ed] hover:border hover:shadow-md">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="h-80 rounded-3xl object-cover"
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-3xl font-medium">{name}</h2>
          <div className="text-2xl">{avgRatingString}</div>
        </div>
        <div className="flex justify-between items-center text-2xl font-light mb-2">
          <div className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[60%]">
            {cuisines.join(", ")}
          </div>
          <div>{costForTwo}</div>
        </div>
        <div className="flex justify-end text-2xl">
          <div>{sla.slaString}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
