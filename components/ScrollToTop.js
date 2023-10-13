import React, { useState, useEffect } from 'react'

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }
  return (
    <>
      {show && (
        <div className='scroll-to-top'>
          <div className='scroll-to-top__box' onClick={handleClick}>
            <i className='flaticon-up-arrow'></i>
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
