import { COLORS } from '../../constants/constant'
import './style.css'

const WinningResult = ({ winningResult, handleContinue }) => {
  return (
    <div className='modal-container flex flex-col justify-center items-center gap-2 py-1 px-5 bg-white rounded-lg'>
      <img src={'vite.svg'} className='w-[30%]' alt='vite logo' />
      <span className='text-lg font-bold'>Congratulations</span>
      <span className='text-lg font-bold'>Your reward is</span>
      <span className='text-lg font-bold text-[#C49B60]'>{winningResult.name}</span>
      <img src={winningResult.img} className='w-[25%] object-cover' alt='reward' />
      <div className='flex justify-around items-center xs:gap-5 md:gap-10 mb-3'>
        <button
          className={`px-10 xs:px-3 text-md xs:text-sm py-2 border-[1.5px] rounded-full border-blue-700 hover:border-black text-[${COLORS.primary_first}] hover:text-[${COLORS.primary_second}] transition-all ease-in-out duration-150`}
          onClick={handleContinue}
        >
          Home
        </button>
        <button
          className={`px-6 py-2 text-md xs:text-sm rounded-full bg-blue-700 text-white hover:bg-black transition-all ease-in-out duration-150`}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default WinningResult
