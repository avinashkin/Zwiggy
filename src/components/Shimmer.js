import { useId } from "react";

const Shimmer = () => {
  return [...Array(15).keys()].map((v, i) => {
    const id = useId();
    return (
      <div key={id} className="flex flex-col rounded-3xl p-4 w-[30rem] gap-3">
        <div className="h-72 rounded-3xl bg-slate-200	"></div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="w-[16rem] h-[1.5rem] font-medium bg-slate-200"></h2>
            <div className="w-[10rem] h-[1.5rem] bg-slate-200"></div>
          </div>
          <div className="flex justify-between items-center font-light mb-2">
            <div className="w-[10rem] h-[1.5rem] bg-slate-200"></div>
            <div className="w-[8rem] h-[1.5rem] bg-slate-200"></div>
          </div>
          <div className="flex justify-end ">
            <div className="w-[6rem] h-[1.5rem] bg-slate-200"></div>
          </div>
        </div>
      </div>
    );
  });
};

export default Shimmer;
