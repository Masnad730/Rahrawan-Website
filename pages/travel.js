import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import Header from '../components/Header'

export default function Education() {
  const [toggleState, setToggleState] = React.useState(0)

  return (
    <Layout
      title='Travel - Rahrawan Travels'
      canonical='https://rahrawan.af/travel/'
      descriptionContent='As you travel you’re exposed to more new people, cultures, and lifestyles. Rahrwan Travels professional travel advisors help you to have the best travel experience that you have ever had.'
    >
      <div className='container'>
        {/* Hero Section */}
        <div className='hero-page'>
          <div className='hero-wrap'>
            <Header active='services' />
          </div>
          <div className='hero__box'>
            <Fade up>
              <h1 className='hero__title'>Travel</h1>
              <div className='hero__pagination'>
                <span className='hero__pagination-item'>
                  <Link href='/'>home</Link>
                </span>
                <span className='hero__pagination-item'>&#8594;</span>
                <span className='hero__pagination-item'>
                  <Link href='#'>travel</Link>
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <section className='svc-area'>
          <Fade up>
            <div className='svc-area__header'>
              <h3 className='svc-area__header-heading'>our service</h3>
              <h2 className='heading-primary text-center uppercase'>Travel</h2>
              <div className='relative l-separator__center'></div>
              <p className='svc-area__header-txt'>
                We live in a wonderful world that is full of beauty, charm and adventure. There is
                no end to the adventures we can have if only we seek them with our eyes open.
              </p>
            </div>
            <div className='row svc-area__nav-wrap'>
              <div className='svc-area__nav'>
                <div className='svc-area__nav-list'>
                  <a
                    onClick={() => setToggleState(0)}
                    className={
                      toggleState === 0 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    travel advising
                  </a>
                  <a
                    onClick={() => setToggleState(1)}
                    className={
                      toggleState === 1 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    visa assistance
                  </a>
                  <a
                    onClick={() => setToggleState(2)}
                    className={
                      toggleState === 2 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    hotel booking
                  </a>
                  <a
                    onClick={() => setToggleState(3)}
                    className={
                      toggleState === 3 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    flight ticket booking
                  </a>
                  <a
                    onClick={() => setToggleState(4)}
                    className={
                      toggleState === 4 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    car rental
                  </a>
                  <a
                    onClick={() => setToggleState(5)}
                    className={
                      toggleState === 5 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    interpretation services
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className='row svc-area__row'>
              <div className='col-3-of-4 svc-area__wrap svc-area__wrap--tab-content'>
                <div
                  className={toggleState === 0 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/travel-advising.jpeg'
                      alt='Travel Advising'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Travel Advising</h2>
                    <p className='svc-area__txt'>
                      A travel advisor can make the process of designing a trip as stress-free as
                      possible.
                    </p>
                    <p className='svc-area__txt'>
                      Rahrawan Travels expert Travel Advisors provide the clients professional and
                      personalized services and expertise to fulfill travel requests.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 1 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/visa-assistance.png'
                      alt='Visa Assistance'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Visa Assistance</h2>
                    <p className='svc-area__txt'>
                      The first challenge that every traveler face with is Visa, but a professional
                      Visa Assistant can make the process of getting visa easy to you.
                    </p>
                    <p className='svc-area__txt'>
                      Rahrawan Travels experienced Visa assistants can make your Visa Process easy
                      and help you to choose the right type of Visa according to you Background.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 2 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/hotel-booking.jpg'
                      alt='Hotel Booking'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Hotel Booking</h2>
                    <p className='svc-area__txt'>
                      Booking the right hotel in a place which is totally unfamiliar to you is a
                      hard task, but don’t worry Rahrawan Travels competent Travel Advisors can help
                      you to choose the right hotel according to your budget and preferences.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 3 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/flight-ticket-booking.jpg'
                      alt='Flight Ticket Booking'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Flight Ticket Booking</h2>
                    <p className='svc-area__txt'>
                      Having a comfortable and affordable Flight is what every traveler want,
                      Rahrawan Travels Travel advisors can help you to choose the best flight route.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 4 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/car-rental.jpg'
                      alt='Car Rental'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Car Rental</h2>
                    <p className='svc-area__txt'>
                      You can enjoy more for your travel if you have a car and a driver who is from
                      the area that you want to travel in.
                    </p>
                    <p className='svc-area__txt'>
                      Rahrawan Travels can provide you car rental services, we have any types of
                      cars, as well as licensed drivers that are able to speak English.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 5 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/interpretation-services.jpg'
                      alt='interpretation Services'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Interpretation Services</h2>
                    <p className='svc-area__txt'>
                      One of the most important factor that affects you travel experience is to
                      explore local people, it is impossible to explore everything without being
                      able to speak the people language.
                    </p>
                    <p className='svc-area__txt'>
                      Rahrawan Travels professional interpreters can help you explore everything,
                      and make you able to talk to the local people.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-1-of-4 svc-area__wrap'>
                <div className='svc-value'>
                  <h4 className='heading-secondary svc-value__heading'>Our Core Values</h4>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-customer svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Customer Responsiveness</h3>
                      <p className='svc-value__txt'>
                        Committed to provide quick and accurate response to our customer inquires.
                      </p>
                    </div>
                  </div>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-guaranteed svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Quality</h3>
                      <p className='svc-value__txt'>
                        Exceeding your expectations by offering superb quality services with the
                        help of our professional team.
                      </p>
                    </div>
                  </div>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-timeline svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Timeliness</h3>
                      <p className='svc-value__txt'>
                        Committed to provide services at the pre-specified time.
                      </p>
                    </div>
                  </div>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-producer svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Fair Pricing</h3>
                      <p className='svc-value__txt'>
                        Fair and affordable rates for all of our services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    </Layout>
  )
}
