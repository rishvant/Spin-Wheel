import { COLORS } from '../../constants/constant'
import './style.css'

const WinningResult = ({ winningResult, handleContinue }) => {
  return (
    <div className='modal-container flex flex-col justify-center items-center gap-2 pt-12 px-12 pb-4 bg-white rounded-lg'>
      {winningResult.name === "Better Luck Next Time" ? (
        <>
          <span className='text-3xl text-[#004AAD]'>{winningResult.name}</span>
          <div className='flex justify-around items-center xs:gap-5 md:gap-10 mb-3 mt-4'>
            <button
              className={`px-10 xs:px-3 text-xl xs:text-sm py-2 border-[1.5px] rounded-xl border-black hover:border-black text-[${COLORS.primary_first}] hover:text-[${COLORS.primary_second}] transition-all ease-in-out duration-150`}
              onClick={handleContinue}
            >
              Spin Again
            </button>
          </div>
        </>
      ) : (
        <>
          <span className='text-lg font-bold'>Congratulations</span>
          <span className='text-lg font-bold'>Your reward is</span>
          <span className='text-lg font-bold text-[#C49B60]'>{winningResult.name}</span>
          <div className='flex flex-col gap-3 sm:flex-row justify-around items-center xs:gap-5 md:gap-10 mb-3 mt-4'>
            <button
              className={`px-10 xs:px-3 w-[180px] text-md xs:text-sm py-2 border-[1.5px] rounded-full border-blue-700 hover:border-black text-[${COLORS.primary_first}] hover:text-[${COLORS.primary_second}] transition-all ease-in-out duration-150`}
              onClick={handleContinue}
            >
              Claim Now
            </button>
            <button
              className={`px-6 py-2 text-md w-[180px] xs:text-sm rounded-full bg-blue-700 text-white hover:bg-black transition-all ease-in-out duration-150`}
              onClick={handleContinue}
            >
              Spin Again
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default WinningResult;