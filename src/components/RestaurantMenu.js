import { useState } from "react";
import { MENU_IMG_URL } from "../utils/constants";

const RestaurantMenu = (props) => {
  const { restaurantMenu = [] } = props;
  const [showAccordion, setAccordion] = useState({});

  const setAccordionProp = (k) => {
    const obj = {...showAccordion};
    obj[k] = !obj[k];
    setAccordion(obj);
  }


  const renderCategoryMenu = (data, key, isFromNested = false) => {
    const { title, itemCards = [] } = data || {};
    const k = `${title}_${key}`;
    
    return (
      <div className={`${isFromNested ? '' : 'border-t-8'} border-slate-200 py-4`}>
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setAccordionProp(k)}>
          <h1 className={`${isFromNested ? "text-[1.6rem] font-medium" : "text-4xl font-semibold"} my-4`}>{title}</h1>
          <i className={`fa-solid fa-2xl fa-angle-down ${showAccordion[k] ? "" : "rotate-180"} transition-all`}></i>
        </div>
        <div className={`${showAccordion[k] ? "h-0" : ""} overflow-hidden`} key={k}>
            {itemCards.map((item) => {
            const { card: { info = {} } = {} } = item;
            const {
                isVeg,
                name,
                description,
                finalPrice,
                price,
                imageId,
                defaultPrice,
            } = info;
            return (
                <div
                key={item?.id}
                className="flex justify-between mb-8 border-b py-8 last:border-none"
                >
                <div className="flex flex-col">
                    <div>
                    {isVeg ? (
                        <div className="w-7 h-7 border rounded flex items-center justify-center border-green-500">
                        <i className="fa-solid fa-circle text-green-500"></i>
                        </div>
                    ) : (
                        <i className="fa-regular fa-2xl fa-square-caret-up text-red-500"></i>
                    )}
                    </div>
                    <div className="text-3xl font-medium mt-3">{name}</div>
                    {defaultPrice ? (
                    <div className="text-sub mt-3">
                        <span className="mr-1">&#8377;</span>
                        {defaultPrice / 100}
                    </div>
                    ) : (
                    <div className="text-sub mt-3">
                        <span className="line-through mr-4">
                        <span className="mr-1">&#8377;</span>
                        {price / 100}
                        </span>
                        <span>
                        <span className="mr-1">&#8377;</span>
                        {finalPrice / 100}
                        </span>
                    </div>
                    )}
                    <div className="mt-4 text-2xl">{description}</div>
                </div>
                <div className="min-w-[156px] ml-20">
                    {imageId && <img
                    className="rounded-2xl object-cover w-[156px] h-[144px]"
                    src={`${MENU_IMG_URL}${imageId}`}
                    alt="Food Img"
                    height={144}
                    width={156}
                    loading="lazy"
                    />}
                    <div className={`flex items-center justify-center relative ${imageId ? 'bottom-8' : '-bottom-4'}`}>
                        <button className="w-36 h-16 border bg-white text-green-500 rounded-xl text-sub font-semibold shadow-md uppercase">Add</button>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
      </div>

    );
  };

  const renderNestedCategoryMenu = (data) => {
    const { categories = [], title } = data || {};
    return (
      <div className="border-t-8 border-slate-200 first:border-none">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold my-4">{title}</h1>
        </div>
        {categories.map((cat, idx) => {
          return <div className="border-b" key={idx}>{renderCategoryMenu(cat, idx, true)}</div>
        })}
      </div>
    );
  };

  return (
    <>
      <h1 className="text-4xl mt-20 text-center border-b pb-4">Menu</h1>
      <div className="mt-8">
        {restaurantMenu.map((cat, idx) => {
          const { card: { card = {} } = {} } = cat || {};
          const keys = card["@type"]?.split(".") || [];
          if (keys?.length && keys.includes("ItemCategory")) {
            return renderCategoryMenu(card, idx);
          }

          if (keys?.length && keys.includes("NestedItemCategory")) {
            return renderNestedCategoryMenu(card);
          }
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
