import Activity from "../../components/Controls/Activity";
import Buttons from "../../components/Controls/Buttons";
import Cards from "../../components/Controls/Cards";
import Hero from "../../components/Controls/Hero";
import Example from "../../components/Controls/Modal";
import Navbar from "../../components/Navbar/Navbar"

const Controls = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Buttons />
            <Cards />
            <Activity />
        </>
    )
}

export default Controls;