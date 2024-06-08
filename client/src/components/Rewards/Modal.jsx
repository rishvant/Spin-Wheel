import { IoClose } from "react-icons/io5";
import styles from "./styles.module.css";
import Accordion from "../Accordion/Accordion";

const RewardModal = ({displayModal, setDisplayModal, itemName}) => {
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
                        {itemName}
                    </div>
                    <Accordion />
                </div>
            </div>
        </>
    )
}

export default RewardModal;