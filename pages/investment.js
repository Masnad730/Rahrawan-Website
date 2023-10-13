import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import Header from '../components/Header'

export default function Education() {
  const [toggleState, setToggleState] = React.useState(0)

  return (
    <Layout
      title='Investment - Rahrawan Travels'
      canonical='https://rahrawan.af/investment/'
      descriptionContent='Rahrawan Travels investment consultant are the best and well-educated consultants that will help you chose the right country to invest considering your background.'
    >
      <div className='container'>
        {/* Hero Section */}
        <div className='hero-page'>
          <div className='hero-wrap'>
            <Header active='services' />
          </div>
          <div className='hero__box'>
            <Fade up>
              <h1 className='hero__title'>Investment</h1>
              <div className='hero__pagination'>
                <span className='hero__pagination-item'>
                  <Link href='/'>home</Link>
                </span>
                <span className='hero__pagination-item'>&#8594;</span>
                <span className='hero__pagination-item'>
                  <Link href='#'>investment</Link>
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <section className='svc-area'>
          <Fade>
            <div className='svc-area__header'>
              <h3 className='svc-area__header-heading'>our service</h3>
              <h2 className='heading-primary text-center uppercase'>Investment</h2>
              <div className='relative l-separator__center'></div>
              <p className='svc-area__header-txt'>
                We must shift our thinking away from short-term gain toward long-term investment and
                sustainability, and always have the next generations in mind with every decision we
                make.
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
                    investment counselling
                  </a>
                  <a
                    onClick={() => setToggleState(1)}
                    className={
                      toggleState === 1 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    legal support
                  </a>
                  <a
                    onClick={() => setToggleState(2)}
                    className={
                      toggleState === 2 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    property management
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
                      src='/images/services/investment-counseling.jpg'
                      alt='Investment Counseling'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Investment Counseling</h2>
                    <p className='svc-area__txt'>
                      Our Investment counselors are well-educated and know every countries
                      Investment law, we can help you to choose the best country to invest according
                      to your budget and your preferences.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 1 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/legal-support.jpg'
                      alt='Legal Support'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Legal Support</h2>
                    <p className='svc-area__txt'>
                      Investing in a country which is totally unfamiliar to you is hard task, but
                      don’t worry Rharwan Travels professional Investment counsellors are ready to
                      help you.
                    </p>
                    <p className='svc-area__txt'>
                      We have the largest network across the world our partner in the country that
                      you want to invest can support you legally and make the investment legal
                      process easy to you.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 2 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/property-management.jpg'
                      alt='Property Management'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Property Management</h2>
                    <p className='svc-area__txt'>
                      Investing is not all about buying property, you need to manage it, our
                      services is not only limited to counselling and legal support, we also help
                      our clients to manage their property in the best way.
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
