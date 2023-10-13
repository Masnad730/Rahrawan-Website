import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Fade from 'react-reveal/Fade'

const currentSlide = (index, item) => {}
const Testimonial = () => {
  return (
    <section className='testimonial'>
      <Fade up>
        <div className='heading-primary text-center'>What People Are Saying</div>
      </Fade>
      <Fade up>
        <div className='relative l-separator__center'></div>
      </Fade>
      <Carousel
        autoPlay={true}
        autoFocus={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        onChange={currentSlide}
        interval={4000}
      >
        <div className='testimonial__box'>
          <Fade up>
            <blockquote className='testimonial__paragraph'>
              <span className='testimonial__quote'>“</span>Right after graduation from school, I
              wanted to study abroad. But, I did not know which country has the best quality of
              education in the field that I am interested in and is suitable and affordable to me.
              So, I referred to Rahrawan Travels company, they helped me from choosing the best
              country to getting admission and visa.
              <span className='testimonial__quote'>”</span>
              <footer className='testimonial__author'>
                -<cite>&nbsp;Hashmatullah Hoshmand</cite>
              </footer>
            </blockquote>
          </Fade>
        </div>
        <div className='testimonial__box'>
          <Fade up>
            <blockquote className='testimonial__paragraph'>
              <span className='testimonial__quote'>“</span>I was always hearing about Afghanistan's
              beautiful nature and friendly people and I hoped to go there one day. Finally, I
              decided to go, I contacted Rahrawan Travels, its professional travel advisors were
              with me from the time the airplane landed till the day I came back to airport. As well
              as, they provided me everything I needed to have the best travel experience and
              minimized the travel's risk as low as possible.
              <span className='testimonial__quote'>”</span>
              <footer className='testimonial__author'>
                -<cite>&nbsp;Henry Stephen</cite>
              </footer>
            </blockquote>
          </Fade>
        </div>
        <div className='testimonial__box'>
          <Fade up>
            <blockquote className='testimonial__paragraph'>
              <span className='testimonial__quote'>“</span>&nbsp;I was very interested in investing
              abroad, but, it was hard to choose the best country according to you budget.
              Fortunately, I found Rahrawan Travels company, they helped me to choose the best
              country to invest. Besides, Rahrawan Travels' experienced consultants with network all
              over the world helped me in all paper works and legal support.
              <span className='testimonial__quote'>”</span>
              <footer className='testimonial__author'>
                -<cite>&nbsp;Zaker Mohammadi</cite>
              </footer>
            </blockquote>
          </Fade>
        </div>
      </Carousel>
    </section>
  )
}

export default Testimonial
