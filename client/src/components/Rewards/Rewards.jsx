export default function Rewards({listPrizeWon}) {
    return (
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
                    <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">View Reward</button>
                </div>
                ))}
            </div>
        </div>
    )
}