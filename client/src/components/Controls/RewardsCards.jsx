import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Example from "./Modal";

export default function RewardsCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[337px] max-w-sm mx-auto bg-white dark:bg-zinc-800 rounded-lg border border-[#0000002E] p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Free Virgin Mojito</h2>
            <span className="bg-zinc-100 dark:bg-zinc-700 text-[#004AAD] dark:text-zinc-300 text-sm font-medium px-2 py-1 rounded">Offer 1</span>
          </div>
          <hr className="border-zinc-300 dark:border-zinc-600 my-2" />
          <div className="text-[#64748B] text-md dark:text-zinc-300 mb-2">
            <p>Offer Type : Freebies</p>
            <p>Redemption Rate : 5/Day</p>
            <p>Terms & Condition</p>
            </div>
            <div className="flex justify-end">
            <button onClick={()=>setOpen(true)} className="flex items-center gap-1 text-[#004AAD] border border-[#004AAD] rounded px-3 py-1 hover:bg-[#004AAD] hover:text-white transition">
                <FiEdit />
            Edit
                </button>
            </div>
            <Example open={open} setOpen={setOpen} />
        </div>
    )
}