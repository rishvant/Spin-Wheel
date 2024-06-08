export default function Buttons() {
    return (
        <section className="flex justify-between items-center p-8 px-14 border-b-[#0000002E] border">
          <div className="flex space-x-2    ">
            <button className="w-[100px] bg-[#004AAD] text-white px-4 py-3 rounded-xl font-bold">Games</button>
            <button className="w-[100px] border border-black px-4 py-3 rounded-xl font-bold">Offers</button>
            <button className="w-[100px] border border-black px-4 py-3 rounded-xl font-bold">Campaign</button>
          </div>
          <div className="items-center space-x-2 bg-zinc-100 px-4 py-2 rounded-md sm:flex hidden">
            <span className="text-zinc-700">Spin the wheel</span>
            <span className="text-green-500">Active</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-[#004AAD]"></div>
            </label>
          </div>
        </section>
    )
}