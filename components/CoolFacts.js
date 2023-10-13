import React, { useState } from 'react'
import AnimatedNumber from 'animated-number-react'
import Fade from 'react-reveal/Fade'

const CoolFacts = () => {
  const [elementVisible, setElementVisible] = useState(false)
  return (
    <>
      <Fade onReveal={() => setElementVisible(true)} up>
        <div className='row'>
          <div className='col-1-of-3 cool-facts__wrap'>
            <div className='cool-facts__illustration'>
              <i className='flaticon-reading'></i>
            </div>
            <div className='cool-facts__num'>
              {elementVisible ? (
                <AnimatedNumber duration='4000' value='524' formatValue={(v) => v.toFixed(0)} />
              ) : (
                524
              )}
            </div>
            <div className='cool-facts__txt uppercase'>happy students</div>
          </div>
          <div className='col-1-of-3 cool-facts__wrap'>
            <div className='cool-facts__illustration'>
              <i className='flaticon-mortarboard'></i>
            </div>
            <div className='cool-facts__num'>
              {elementVisible ? (
                <AnimatedNumber duration='4000' value='274' formatValue={(v) => v.toFixed(0)} />
              ) : (
                274
              )}
            </div>
            <div className='cool-facts__txt uppercase'>successful scholarships</div>
          </div>
          <div className='col-1-of-3 cool-facts__wrap'>
            <div className='cool-facts__illustration'>
              <i className='flaticon-traveler'></i>
            </div>
            <div className='cool-facts__num'>
              {elementVisible ? (
                <AnimatedNumber duration='4000' value='122' formatValue={(v) => v.toFixed(0)} />
              ) : (
                122
              )}
            </div>
            <div className='cool-facts__txt uppercase'>happy travelers</div>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default CoolFacts
