import Shimmer from "./Shimmer";

const TopBrandShimmer = () => {
  return (
    <div className="relative">
      <div className="absolute mt-12 right-8">
        <div className="flex gap-6">
          <button className="rounded-full bg-slate-100 w-16 h-16"></button>
          <button className="rounded-full bg-slate-100 w-16 h-16"></button>
        </div>
      </div>
      <div className="overflow-hidden p-12">
        <div className="-ml-10 mb-8 h-8 w-80 overflow-hidden text-4xl font-bold bg-slate-200"></div>
        <div className="overflow-y-hidden overflow-x-scroll mb-8 -ml-8 -mr-8">
          <div className="flex gap-8">
            <Shimmer cards={4} />
          </div>
        </div>
        <hr className="-mx-10 h-2" />
      </div>
      <h2 className="text-center text-2xl">First time loading may take some time since it is running on a free service.</h2>
    </div>
  );
};

export default TopBrandShimmer;
