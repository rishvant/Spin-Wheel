import { memo } from 'react'
import './style.css'

const ListPrizeWon = ({ listPrizeWon }) => {
  return (
    <div className='list-prize-won-container flex flex-col gap-3 py-8 px-5 bg-white rounded-lg'>
      <p className='text-lg font-bold mb-5'>List of Won Prizes</p>
      <div className={`list-prize-won ${listPrizeWon.length === 0 ? 'h-[200px]' : 'h-[400px]'} overflow-auto`}>
        {listPrizeWon.length === 0 && <p className='text-center'>You have not won any prizes</p>}
        {listPrizeWon.length !== 0 && (
          <table className='table-fixed rounded-lg '>
            <thead>
              <tr>
                <th className='w-[10%]'>Image</th>
                <th className='w-[45%]'>Name</th>
                <th className='w-[45%] text-right'>Winning Time</th>
              </tr>
            </thead>
            <tbody className='mt-5'>
              {listPrizeWon.map((prize, index) => (
                <tr key={index}>
                  <td>
                    <img className='w-[50%] xs:w-[100%] py-2 mx-auto' src={prize.img} alt={prize.name} />
                  </td>
                  <td className='text-center px-10 py-2'>{prize.name}</td>
                  <td className='text-right py-2'>{prize.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default memo(ListPrizeWon)
