import { IoMdNotificationsOutline, IoMdMore } from "react-icons/io";
import styles from "./styles.module.css";

const Navbar = () => {
    return (
        <>
            <nav className="w-full h-[65px] flex flex-row items-center px-4 py-2 shadow">
                <div className="w-[75%] flex justify-between sm:border-r-[#E2E8F0] border-none sm:border sm:border-white px-4">
                    <img className={`w-[10%] sm:block hidden`} src="/logo.png" />
                    <img className={`w-[57px] h-[50px] sm:hidden block`} src="/logo-m.png" />
                    <div className="rounded-full bg-[#EFF4FB] p-1 hidden sm:block">
                    <IoMdNotificationsOutline className="text-2xl text-[#64748B]" />
                    </div>
                </div>
                <div className="w-[25%] flex justify-end">
                    <div className="block sm:hidden">
                        <img src="/logo-2.png" className="rounded-full w-[50px] h-[50px]" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;