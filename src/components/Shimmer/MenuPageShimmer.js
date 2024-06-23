const MenuPageShimmer = () => {
    return (
        <div className="w-[900px] flex flex-wrap mx-auto gap-3 mt-20">
            <div>
                <div className="w-[400px] h-[200px] bg-slate-100"></div>
                <div className="flex justify-between">
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="w-[200px] h-4 bg-slate-100"></div>
                        <div className="w-[150px] h-4 bg-slate-100"></div>
                    </div>
                    <div className=" mt-4 w-8 h-8 rounded-full bg-slate-100"></div>
                </div>
            </div>

            <div>
                <div className="w-[400px] h-[200px] bg-slate-100"></div>
                <div className="flex justify-between">
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="w-[200px] h-4 bg-slate-100"></div>
                        <div className="w-[150px] h-4 bg-slate-100"></div>
                    </div>
                    <div className=" mt-4 w-8 h-8 rounded-full bg-slate-100"></div>
                </div>
            </div>
            
        </div>
    );
}

export default MenuPageShimmer;