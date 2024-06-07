import React, { useEffect, useState } from 'react'
import './App.css'
import { PRIZES } from './constants/constant'
import { AiOutlineMenu } from 'react-icons/ai'
import { ListPrizeWon, LuckyWheel, Modal, WinningResult } from './components/index'
import dayjs from 'dayjs'
import { getTimeDifference } from './utils/get-time-difference'
import { delayedApiCall } from './api/index'
import Rewards from './components/Rewards/Rewards'

const ID = 'luckywheel'
const CURRENT_TIME_DURATION_LUCKY_WHEEL_ROTATE = 10
const CURRENT_TIME_DURATION_NEEDLE_ROTATE = 0.6

const App = () => {
  const [styleRotate, setStyleRotate] = useState({
    deg: 0,
    timingFunc: 'ease-in-out',
    timeDuration: 0
  })
  const [spinning, setSpinning] = useState(false)
  const [countSpin, setCountSpin] = useState(2)
  const [winningResult, setWinningResult] = useState({
    name: '',
    img: ''
  })
  const [listPrizeWon, setListPrizeWon] = useState([])
  const [time, setTime] = useState()
  const [configModal, setConfigModal] = useState({
    openModal: false,
    typeModal: 'notify'
  })
  const [timeNeedleRotate, setTimeNeedleRotate] = useState(0)
  const [indexPrizeWon, setIndexPrizeWon] = useState(null)

  const handleSpin = () => {
    if (countSpin > 0) {
      setSpinning(true)
      setTime(dayjs())
      delayedApiCall()
        .then((result) => {
          setIndexPrizeWon(result)
        })
        .catch((error) => {
          console.error('Caught error:', error)
        })
      setCountSpin((prevState) => prevState - 1)
      let d = styleRotate.deg
      d = d + (360 - (d % 360)) + 360 * 10
      setStyleRotate({ timingFunc: 'ease-in-out', deg: d, timeDuration: CURRENT_TIME_DURATION_LUCKY_WHEEL_ROTATE })
      setTimeNeedleRotate(CURRENT_TIME_DURATION_NEEDLE_ROTATE)
    }
  }

  const alertAfterTransitionEnd = () => {
    const ele = document.getElementById(ID)
    if (ele) {
      const container = ele.querySelector('.luckywheel-container')
      if (container) {
        container.addEventListener(
          'transitionend',
          () => {
            setConfigModal({ typeModal: 'notify', openModal: true })
            setSpinning(false)
          },
          false
        )
      }
    }
  }

  const handleContinue = () => {
    setConfigModal({ ...configModal, openModal: false })
    if (winningResult.name === 'Spin') setCountSpin((prevState) => prevState + 1)
  }

  const handleOpenListOfPrizeWon = () => {
    setConfigModal({
      openModal: true,
      typeModal: 'list'
    })
  }

  useEffect(() => {
    if (indexPrizeWon !== null && time) {
      const timeCallApi = getTimeDifference(time, dayjs())
      let d = styleRotate.deg
      d = d + (360 - (d % 360)) + (360 * 10 - indexPrizeWon * (360 / PRIZES.length))
      const timeRotate = CURRENT_TIME_DURATION_LUCKY_WHEEL_ROTATE - timeCallApi
      setStyleRotate({
        deg: d,
        timingFunc: 'ease',
        timeDuration: timeRotate
      })
      setTimeNeedleRotate(((timeRotate / 10) * 1) / 4)

      setTimeout(() => {
        setTimeNeedleRotate(((timeRotate / 10) * 3) / 4)
      }, (((timeRotate / 10) * 3) / 4) * 10000)

      setWinningResult({ name: PRIZES[indexPrizeWon].name, img: PRIZES[indexPrizeWon].img })
      setListPrizeWon([
        ...listPrizeWon,
        {
          name: PRIZES[indexPrizeWon].name,
          img: PRIZES[indexPrizeWon].img,
          time: dayjs().format('DD/MM/YYYY HH:mm:ss')
        }
      ])
      alertAfterTransitionEnd()
      setIndexPrizeWon(null)
    }
  }, [indexPrizeWon])

  return (
    <div className='relative flex flex-col justify-center items-center bg-[#004AAD]'>
      <div className='mt-8'>
        <h1 className='text-white sm:text-5xl text-4xl font-semibold'>Spin to win rewards</h1>
      </div>
      <LuckyWheel
        id={ID}
        styleRotate={styleRotate}
        prizes={PRIZES}
        spinning={spinning}
        timeNeedleRotate={timeNeedleRotate}
      />
      <div className='flex flex-col justify-center items-center mt-[70px] w-[40%]'>
        <button
          disabled={countSpin === 0 || spinning}
          onClick={handleSpin}
          className={`py-4 ${countSpin === 0 || spinning ? 'cursor-not-allowed' : 'cursor-pointer'
            } px-5 w-[100%] rounded-lg bg-white text-black font-bold text-xl`}
        >
          {spinning ? 'Spinning' : 'Spin Now'}
        </button>
        <div className="p-4 border border-2 sm:w-[40%] w-[55%] rounded-xl text-center text-white text-xl font-bold mt-8">
          {countSpin}/2
        </div>
        <p className='font-light mt-2 text-white text-lg'>Daily Spins Left</p>
      </div>
              <Rewards listPrizeWon={listPrizeWon} />

    </div>
  )
}

export default App;