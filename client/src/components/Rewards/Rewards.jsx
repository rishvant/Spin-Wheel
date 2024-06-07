import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { IoClose } from "react-icons/io5";
import Accordion from "../Accordion/Accordion";

export default function Rewards({ listPrizeWon }) {
    const [alert, setAlert] = useState("");
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setAlert("");
        }, 5000);
        return () => clearTimeout(clearMessage);
    }, [alert]);

    return (
        <>
            <div>
                <div className={`${styles.Modal} ${displayModal ? styles.Show : ""}`}>
                    <div className="w-full p-5 flex flex-row justify-between border-2 border-transparent border-b-gray-400">
                        <h1 className="text-black text-3xl sm:text-4xl font-semibold" >Reward Details</h1>
                        <IoClose
                            className="text-4xl text-[#426CFF] font-bold hover:cursor-pointer"
                            onClick={() => setDisplayModal(!displayModal)}
                        />

                    </div>
                    <div className="w-[90%] mt-8 p-16 border-2 text-center text-[#004AAD] text-3xl sm:text-4xl font-semibold border-gray-400 rounded-3xl">
                        Free Virgin Mojito
                    </div>
                    <Accordion
                        title="What is your return policy?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>

            <div className="p-6">
                <h1 className="text-white text-3xl font-bold mb-4 text-center">Your Rewards</h1>
                {listPrizeWon.length === 0 && (
                    <p className="text-xl text-center text-white" >You have won no prizes!</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listPrizeWon.map((item) => (
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src="/rewards.png" alt="Reward Image" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                            <h2 className="text-blue-800 text-xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-zinc-500 mb-4 text-sm">T&C Applied</p>
                            <button onClick={() => setDisplayModal(!displayModal)} className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">View Reward</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}