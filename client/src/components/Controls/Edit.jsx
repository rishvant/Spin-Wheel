import { IoCloseCircleOutline } from "react-icons/io5";

export default function Edit({ setOpen }) {
    return (
        <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Edit Offer</h2>
                <button className="text-zinc-600 dark:text-zinc-300">
                    <IoCloseCircleOutline onClick={()=>setOpen(false)} className="text-3xl text-black" />
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-zinc-700 dark:text-zinc-300 text-sm font-bold mb-2 text-start" htmlFor="offer-name">
                Offer Name <span className="text-red-500">*</span>
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline" id="offer-name" type="text" value="Free Virgin Mojito" />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-700 dark:text-zinc-300 text-sm font-bold mb-2 text-start" htmlFor="offer-type">
                Offer Type
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white dark:bg-zinc-700 border border-zinc-400 hover:border-zinc-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline" id="offer-type">
                  <option>Discount</option>
                  <option>Buy One Get One</option>
                  <option>Free Shipping</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700 dark:text-zinc-300">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-zinc-700 dark:text-zinc-300 text-sm font-bold mb-2 text-start" htmlFor="offer-redemption">
                Offer redemption/day
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white dark:bg-zinc-700 border border-zinc-400 hover:border-zinc-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline" id="offer-redemption">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option selected>5</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700 dark:text-zinc-300">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-zinc-700 dark:text-zinc-300 text-sm font-bold mb-2 text-start" htmlFor="terms">
                Terms & conditions
              </label>
              <textarea className="resize-none appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none" id="terms" rows="4"></textarea>
            </div>
            <div className="flex justify-between gap-4">
              <button onClick={()=>setOpen(false)} className="w-[50%] border border-[#E2E8F0] dark:bg-zinc-600 text-zinc-700 dark:text-zinc-300 py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                Cancel
              </button>
              <button onClick={()=>setOpen(false)} className="w-[50%] bg-[#004AAD] text-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                Save
              </button>
            </div>
          </form>
        </div>
    )
}