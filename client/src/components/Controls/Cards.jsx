import RewardsCard from "./RewardsCards"

const Cards = () => {
    return (
        <>
            <section className="px-12 py-8 flex flex-row flex-wrap gap-5 border border-b-[#0000002E]">
                <RewardsCard />
                <RewardsCard />
                <RewardsCard />
                <RewardsCard />
            </section>
        </>
    )
}

export default Cards;