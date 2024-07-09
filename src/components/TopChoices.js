import { Link } from "react-router-dom";
import { TOP_IMG_URL } from "../utils/constants";
import Carousel from "./Carousel";

const TopChoices = (props = {}) => {
  const { data, apiCalled, apiFail } = props;
  const {
    gridElements: { infoWithStyle: { info = [] } = {} } = {},
    header: { title = "" } = {},
  } = data || {};

  if (apiCalled && !info.length) {
    return null;
  }

  if (apiFail || !info.length) return null;
  console.log(data);
  return (
    <Carousel shift={316} title={title}>
      {info.map((top, idx) => {
        return (
            <div className="block w-full h-[180px]" key={top.id}>
              <img
                className="h-[180px] object-cover w-[144px] max-w-fit"
                src={`${TOP_IMG_URL}/${top.imageId}`}
                alt={top.accessibility.altText}
              />
            </div>
        );
      })}
    </Carousel>
  );
};

export default TopChoices;
