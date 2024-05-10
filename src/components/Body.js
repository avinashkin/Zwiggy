import RestaurantCard from "./RestaurantCard";

const Body = (props = {}) => {
    const {data = []} = props;

    return (
      <div className="w-full">
        <div className="w-[110rem] my-0 mx-auto">
          <div className="flex flex-wrap mt-12 gap-8">
            {data?.map((restaurant = {}, index) => {
              return (
                <RestaurantCard restaurant={restaurant} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  export default Body;