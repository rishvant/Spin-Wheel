import { ReactElement } from 'react'

const Modal = ({ children, close, className }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-50 z-10 transition ${className}`}>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20'>
        {children}
      </div>
    </div>
  )
}

export default Modal;