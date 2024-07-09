import { useRef } from "react";

const Carousel = (props = {}) => {
  const scrollRef = useRef(null);
  const { children, shift, title } = props;
  

  const onScrollBtnClick = (btn) => {
    if (btn === "right") {
      scrollRef.current.scrollLeft += shift;
    } else {
      scrollRef.current.scrollLeft -= shift;
    }
  };

  return (
    <div className="relative">
      <div className="absolute mt-12 right-8">
        <div className="flex gap-6">
          <button
            className="rounded-full w-16 h-16 cursor-pointer bg-slate-100 hover:bg-slate-300"
            onClick={() => onScrollBtnClick('left')}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="rounded-full w-16 h-16 cursor-pointer bg-slate-100 hover:bg-slate-300"
            onClick={() => onScrollBtnClick('right')}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="overflow-hidden px-12 pt-12">
        <div className="-ml-10 mb-8 overflow-hidden text-4xl font-bold">
          <h1>{title}</h1>
        </div>
        <div className="overflow-y-hidden overflow-x-scroll mb-8 -ml-8 -mr-8 scroll-smooth no-scrollbar" ref={scrollRef}>
          <div className="flex gap-8">
            {children}
          </div>
        </div>
        <hr className="-mx-10 h-2" />
      </div>
    </div>
  );
};

export default Carousel;
