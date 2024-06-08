export default function Graphs() {
    return (
        <div className="flex flex-col lg:flex-row gap-4 px-14 py-8">
          <div className="w-full sm:w-[65%] bg-white border border-[#0000002E] dark:bg-zinc-800 p-8 rounded-lg flex-1">
            <h2 className="text-lg font-semibold mb-4">Offer Redemption</h2>
            <div className="flex items-end justify-around h-48">
              <div className="text-center">
                <div className="bg-[#004AAD] h-24 w-8 rounded-t-md"></div>
                <p className="mt-2 text-sm">Offer 1</p>
                <p className="text-sm">143</p>
              </div>
              <div className="text-center">
                <div className="bg-[#004AAD] h-12 w-8 rounded-t-md"></div>
                <p className="mt-2 text-sm">Offer 2</p>
                <p className="text-sm">12</p>
              </div>
              <div className="text-center">
                <div className="bg-[#004AAD] h-1 w-8 rounded-t-md"></div>
                <p className="mt-2 text-sm">Offer 3</p>
                <p className="text-sm">0</p>
              </div>
              <div className="text-center">
                <div className="bg-[#004AAD] h-32 w-8 rounded-t-md"></div>
                <p className="mt-2 text-sm">Offer 4</p>
                <p className="text-sm">320</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[35%] flex flex-col gap-4">
            <div className="h-[50%] bg-white border border-[#0000002E] dark:bg-zinc-800 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Total Spin</h2>
              <p className="text-2xl font-bold mt-4">100</p>
            </div>
            <div className="h-[50%] bg-white border border-[#0000002E] dark:bg-zinc-800 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Total Redemption</h2>
              <p className="text-2xl font-bold mt-4">100</p>
            </div>
          </div>
        </div>
    )
}