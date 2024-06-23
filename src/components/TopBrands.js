import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import TopBrandShimmer from "./Shimmer/TopBrandShimmer";

const TopBrands = (props = {}) => {
  const { data, apiCalled } = props;
  const {
    gridElements: { infoWithStyle: { restaurants = [] } = {} } = {},
    header: { title = "" } = {},
  } = data || {};
  const disabled = true;


  if (apiCalled && !restaurants.length) {
    return null;
  }

  return !restaurants.length ?  <TopBrandShimmer /> : (
    <div className="relative">
        <div className="absolute mt-12 right-8">
            <div className="flex gap-6">
                <button className={`rounded-full ${disabled ? 'bg-slate-100' : 'bg-slate-300'} w-16 h-16 cursor-pointer`}><i className="fa-solid fa-arrow-left"></i></button>
                <button className={`rounded-full ${disabled ? 'bg-slate-100' : 'bg-slate-300'} w-16 h-16 cursor-pointer`}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        <div className="overflow-hidden px-12 pt-12">
            <div className="-ml-10 mb-8 overflow-hidden text-4xl font-bold">
                <h1>{title}</h1>
            </div>
            <div className="overflow-y-hidden overflow-x-scroll mb-8 -ml-8 -mr-8">
                <div className="flex gap-8">
                    {restaurants.map((restaurant, idx) => {
                        return <Link key={idx} to={`/restaurants/${restaurant?.info.id}`}><RestaurantCard restaurant={restaurant} /></Link>;
                    })}
                </div>
            </div>
            <hr className="-mx-10 h-2"/>
        </div>
    </div>
  );
};

export default TopBrands;
