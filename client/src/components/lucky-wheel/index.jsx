import { memo, useEffect, useRef } from 'react'
import { FaMapMarker } from "react-icons/fa";
import './style.css'
import { COLORS } from '../../constants/constant'

const LuckyWheel = ({ id, styleRotate, prizes, spinning, timeNeedleRotate }) => {
  const canvasRef = useRef(null)
  const arrowRef = useRef(null)

  /**
   * Function to draw the lucky wheel with canvas
   * @param prizes - list of prizes
   */
  const drawWheel = (prizes) => {
    const num = prizes.length
    const rotateDeg = 360 / num / 2 + 90
    const turnNum = 1 / num
    const html = []

    const ele = document.getElementById(id)
    const ulElementFirstRender = document.querySelector('.luckywheel-list')

    if (ulElementFirstRender) {
      ulElementFirstRender.remove()
    }

    if (ele) {
      const prizeItems = document.createElement('ul')
      const container = ele.querySelector('.luckywheel-container')
      const prizeList = [...prizes]

      if (canvasRef.current && container) {
        const ctx = canvasRef.current.getContext('2d')
        for (let i = 0; i < num; i++) {
          ctx.save()
          ctx.beginPath()
          ctx.translate(250, 250) // Center Point
          ctx.moveTo(0, 0)
          ctx.rotate((((360 / num) * i - rotateDeg) * Math.PI) / 180)
          ctx.arc(0, 0, 250, 0, (2 * Math.PI) / num, false) // Radius
          ctx.fillStyle = `${i % 2 == 0 ? COLORS.primary_first : COLORS.primary_second}`
          ctx.fill()
          ctx.lineWidth = 5
          ctx.strokeStyle = 'black'
          ctx.stroke()
          ctx.restore()

          const htmlString = `<li class="luckywheel-item"><span style="transform: rotate(${i * turnNum}turn); width: ${(100 / num) * 2 - 2
            }%"><div" class="luckywheel-item__content"><div class="text-container"><p class="name-prize">${prizeList[i].name}</p></div></div></span></li>`

          html.push(htmlString)
        }
        prizeItems.className = 'luckywheel-list'
        container.appendChild(prizeItems)
        prizeItems.innerHTML = html.join('')
      }
    }
  }

  // const rotateArrow = (spinningLuckyWheel, timeNeedleRotate) => {
  //   if (arrowRef.current) {
  //     if (spinningLuckyWheel && timeNeedleRotate) {
  //       arrowRef.current.style.animation = `rotate ${timeNeedleRotate}s linear infinite`
  //     } else {
  //       arrowRef.current.style.animation = ''
  //     }
  //   }
  //   requestAnimationFrame(() => rotateArrow(spinningLuckyWheel, timeNeedleRotate))
  // }

  useEffect(() => {
  }, [spinning, arrowRef, timeNeedleRotate])

  useEffect(() => {
    drawWheel(prizes)
  }, [prizes])

  return (
    <div className='wrapper sm:w-[300px] md:w-[600px]' id='wrapper'>
      <section id='luckywheel' className='luckywheel'>
        <div
          className='luckywheel-container'
          style={
            styleRotate.deg !== 0
              ? {
                transform: `rotate(${styleRotate.deg}deg)`,
                transitionTimingFunction: styleRotate.timingFunc,
                transitionDuration: `${styleRotate.timeDuration}s`
              }
              : {}
          }
        >
          <canvas ref={canvasRef} className='luckywheel-canvas' width={'500px'} height={'500px'} />
        </div>

        <div className='luckywheel-logo flex flex-row justify-center items-start'>
          <div ref={arrowRef} className='rotate-180 -translate-x-2 sm:-translate-y-0 -translate-y-5'>
            <FaMapMarker className='text-[70px] text-black' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default memo(LuckyWheel);