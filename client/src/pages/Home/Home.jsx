import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="w-full flex flex-row justify-center mt-[45vh] gap-5">
                <Link to="/controls" className="w-[150px] bg-[#004AAD] text-white text-center border-2 border-[#004AAD] rounded-lg px-4 py-2 hover:text-[#004AAD] hover:bg-white transition">
                    Admin
                </Link>
                <Link to="/spin" className="w-[150px] bg-[#004AAD] text-white text-center border-2 border-[#004AAD] rounded-lg px-4 py-2 hover:text-[#004AAD] hover:bg-white transition">
                    Spin the Wheel
                </Link>
            </section>
        </>
    )
}

export default Home;