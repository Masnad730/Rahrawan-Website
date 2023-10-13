import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, setIsOpen, selector }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted
    ? createPortal(
        <>
          <div className='backdrop'>
            <div className='modal'>
              <div className='modal__wrap'>
                <div className='modal__header'>
                  <h2 className='modal__header-title'>Register for Counseling</h2>
                  <span onClick={() => setIsOpen(false)} className='modal__header-btn'>
                    x
                  </span>
                </div>
                <div className='counseling__appointment-form modal__body'>
                  <label htmlFor='name'>Your Name</label>
                  <input type='text' id='name' />
                  <label htmlFor='email'>Email</label>
                  <input type='email' email='email' />
                  <label htmlFor='phone'>Phone</label>
                  <input type='text' id='phone' />
                  <button type='submit' className='btn'>
                    Get It Now
                  </button>
                </div>
              </div>
            </div>
            <style jsx>{`
              :global(body) {
                overflow: hidden;
              }
            `}</style>
          </div>
        </>,
        ref.current
      )
    : null
}
export default Modal
