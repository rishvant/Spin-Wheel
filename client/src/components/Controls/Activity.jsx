import Graphs from "./Graphs";

const Activity = () => {
    return (
        <>
            <section className="flex flex-col mt-8">
                <div className="flex flex-col gap-8 sm:flex-row p-4 px-12">
                    <div className="w-[70%] ">
                        <h2 className="text-2xl font-bold">Spin Activity</h2>
                        <p className="mt-1">Monitor Your Offer Performance</p>
                    </div>
                    <div className="w-full sm:w-[30%]">
          <div className="flex space-x-2 justify-center">
            <button className="w-[100px] bg-[#004AAD] text-white px-4 py-3 rounded-xl font-bold">Games</button>
            <button className="w-[100px] border border-black px-4 py-3 rounded-xl font-bold">Offers</button>
            <button className="w-[100px] border border-black px-4 py-3 rounded-xl font-bold">Campaign</button>
          </div>

                    </div>
                </div>
                <Graphs />
            </section>
        </>
    )
}

export default Activity;