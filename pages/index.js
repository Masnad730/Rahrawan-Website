import React, { useRef, useState } from 'react'
import Loader from 'react-loader-spinner'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import { useSnackbar } from 'react-simple-snackbar'
import axios from 'axios'

import { options } from '../components/SnackbarNotification/settings'
import Layout from '../components/layout/Layout'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import CoolFacts from '../components/CoolFacts'
import NewsLetter from '../components/Newsletter'

export default function Home() {
  const [openSnackbar, closeSnackbar] = useSnackbar(options)
  const appointment = useRef()
  const executeScroll = () => {
    appointment.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  // Handling Counseling Appointment Form
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await axios
      .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
        username: 'admin',
        password: 'I6FR%0^hD@Z[@',
      })
      .then(async (res) => {
        await axios
          .post(
            'https://wpbackend.navisa.af/wp-json/wp/v2/rahrawan-counseling',
            {
              title: 'User Enquiry - Rahrawan Travels Free Counseling',
              status: 'publish',
              fields: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            }
          )
          .then((res) => {
            setIsLoading(false)
            if (res.status === 201) {
              openSnackbar('Your message has been submitted successfully.')
              setIsLoading(false)
            } else {
              openSnackbar('There was an error trying to send your message, Please try again.')
              setIsLoading(false)
            }
            return res.data
          })
          .catch((err) => {
            console.log(err)
            setIsLoading(false)
            openSnackbar(
              'There was an error trying to send your message, Please check your network connection and try again.'
            )
          })
      })
      .catch((err) => {
        console.log(err)
      })
    setFormData({
      name: '',
      phone: '',
      email: '',
    })
  }
  return (
    <Layout
      title='Rahrawan Travels'
      canonical='https://rahrawan.af/'
      descriptionContent='Rahrawan Travels is a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible. We also help foreigners to have the best travel experience in Afghanistan.'
      jsonLD='{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://rahrawan.af/#website",
            "url": "https://rahrawan.af/",
            "name": "Rahrawan Travels",
            "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible.",
            "publisher": { "@id": "https://rahrawan.af/#organization" }
          },
          {
            "@type": "Organization",
            "@id": "https://rahrawan.af/#organization",
            "legalName": "Rahrawan Travels",
            "url": "https://rahrawan.af/",
            "logo": "https://rahrawan.af/images/Rahrawan-Travels.png"
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://rahrawan.af/#breadcrumblist",
            "itemListElement": [
              {
                "@type": "ListItem",
                "@id": "https://rahrawan.af/#listItem",
                "position": 1,
                "item": {
                  "@type": "WebPage",
                  "@id": "https://rahrawan.af/#item",
                  "name": "Home",
                  "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible.",
                  "url": "https://rahrawan.af/"
                }
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://rahrawan.af/#webpage",
            "url": "https://rahrawan.af/",
            "name": "Rahrawan Travels",
            "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://rahrawan.af/#website" },
            "breadcrumb": { "@id": "https://rahrawan.af/#breadcrumblist" },
            "datePublished":"2021-1-27T10:03:55+00:00",
            "dateModified":"2021-13-16T07:23:07+00:00"
          }
        ]
      }'
    >
      <div className='container'>
        {/* Hero Section */}
        <div className='hero'>
          <Header active='home' />
          <div className='hero__text'>
            <Fade up>
              <h1 className='hero__text-title--sub'>welcome to rahrawan travels</h1>
              <h2 className='hero__text-title--main'>Your Success Journey Starts Here</h2>
              <a onClick={executeScroll} className='btn hero__btn'>
                Register for Counseling
              </a>
            </Fade>
          </div>
        </div>
        <div className='counseling'>
          <Fade right>
            <div className='row counseling__info'>
              <div className='col-1-of-3 counseling__wrap'>
                <div className='counseling__info--icon'>
                  <i className='flaticon-calendar'></i>
                </div>
                <div className='counseling__info--time'>
                  <span>Saturday - Thursday 08:00 - 4:00</span>
                  <span>Friday - CLOSED</span>
                </div>
              </div>
              <div className='col-1-of-3 counseling__wrap'>
                <div className='counseling__info--icon'>
                  <i className='flaticon-contact'></i>
                </div>
                <div className='counseling__info--contact'>
                  <span>+93 780 87 57 87</span>
                  <span>info@rahrawan.af</span>
                </div>
              </div>
              <div className='col-1-of-3 counseling__wrap'>
                <div className='counseling__info--icon'>
                  <i className='flaticon-pin'></i>
                </div>
                <div className='counseling__info--add'>
                  Ansori Street, Shahri Now,
                  <br /> Kabul, Afghanistan
                </div>
              </div>
            </div>
          </Fade>
          <div className='relative' ref={appointment}>
            <Fade up>
              <div className='row counseling__appointment'>
                <div className='col-2-of-3 counseling__appointment-info'>
                  <div>
                    <Fade left>
                      <h5 className='counseling__appointment-info--title'>
                        register for free counseling
                      </h5>
                      <p className='counseling__appointment-info--paragraph'>
                        We will contact you within 1 working day
                      </p>
                      <p
                        className='counseling__appointment-info--paragraph'
                        style={{ fontSize: '1.2rem', margin: '0' }}
                      >
                        We are here to help you make the appropriate decision.
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className='counseling__appointment-form--wrap'>
                  <Fade right>
                    <form onSubmit={handleSubmit} className='counseling__appointment-form'>
                      <label htmlFor='name'>Your Name</label>
                      <input
                        name='name'
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor='phone'>Phone</label>
                      <input
                        name='phone'
                        type='text'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor='email'>Email</label>
                      <input
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <button type='submit' className='btn counseling__appointment-btn'>
                        {isLoading ? (
                          <Loader type='Oval' color='#fff' height={15} width={15} />
                        ) : (
                          'Get It Now'
                        )}
                      </button>
                    </form>
                  </Fade>
                </div>
              </div>
            </Fade>
            <div className='counseling__br-layout'></div>
          </div>
        </div>
        <section className='services'>
          <Fade up>
            <h2 className='heading-primary text-center uppercase'>our services</h2>
            <div className='relative l-separator__center'></div>
            <p className='heading-tertiary text-center'>
              Studying, travelling and investing in developed countries can be a hard decision to
              make,
              <br /> but it’s a decision that can shape your future.
            </p>
          </Fade>

          <div className='row services__box'>
            <Fade up>
              <div className='col-1-of-3 services-col relative'>
                <Link href='/education'>
                  <a>
                    <figure className='services__img-box'>
                      <img
                        src='/images/education.jpg'
                        alt='Education'
                        className='services__img'
                        width='357'
                        height='225'
                      />
                      <div className='services__img-overlay'></div>
                    </figure>
                  </a>
                </Link>
                <Link href='/education'>
                  <a>
                    <h2 className='services__title uppercase'>education</h2>
                  </a>
                </Link>
                <p className='services__paragraph'>
                  Students Education and Career are valuable to us, and we understand that each
                  student is unique, therefore we provide personalized university admission
                  expertise to students. To ensure we seek and match students to the appropriate
                  schools and universities we consider each student’s personality, academic
                  background, achievements and career ambitions. We are on hand to guide students
                  through admission and support their career aspirations.
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className='col-1-of-3 services-col relative'>
                <Link href='/travel'>
                  <a>
                    <figure className='services__img-box'>
                      <img
                        src='/images/travel.jpg'
                        alt='Travel'
                        className='services__img'
                        width='357'
                        height='225'
                      />
                      <div className='services__img-overlay'></div>
                    </figure>
                  </a>
                </Link>
                <Link href='/travel'>
                  <a>
                    <h2 className='services__title uppercase'>travel</h2>
                  </a>
                </Link>
                <p className='services__paragraph'>
                  Traveling is an amazingly underrated investment in yourself. As you travel you’re
                  exposed to more new people, cultures, and lifestyles. With all the newness in your
                  life, you’re also opened to new insights, ways of seeing the world and living,
                  which often gives people a new purpose for their lives. Therefore, Rahrwan Travels
                  professional travel advisors help you to have the best travel experience that you
                  have ever had.
                </p>
              </div>
            </Fade>
            <Fade up>
              <div className='col-1-of-3 services-col relative'>
                <Link href='/investment'>
                  <a>
                    <figure className='services__img-box'>
                      <img
                        src='/images/investment.jpg'
                        alt='Investment'
                        className='services__img'
                        width='357'
                        height='225'
                      />
                      <div className='services__img-overlay'></div>
                    </figure>
                  </a>
                </Link>
                <Link href='/investment'>
                  <a>
                    <h2 className='services__title uppercase'>investment</h2>
                  </a>
                </Link>
                <p className='services__paragraph'>
                  Investing in developed countries is the best way to get permanent residency.
                  Rahrawan Travels investment consultant are the best and well-educated consultants
                  that will help you chose the right country to invest considering your background.
                  One the other hand, we have the largest network across the world, our partners in
                  the country that you want to invest will help you in investment process in the
                  best way possible.
                </p>
              </div>
            </Fade>
          </div>
        </section>
        <section className='cool-facts'>
          <CoolFacts />
        </section>
        <section className='why-choose'>
          <div className='heading-primary text-center uppercase'>why choose us ?</div>
          <div className='row why-choose__box'>
            <div className='col-1-of-3 why-choose__item'>
              <Fade up>
                <div className='why-choose__wrap'>
                  <div className='why-choose__icon'>
                    <i className='flaticon-experience'></i>
                  </div>
                  <div className='why-choose__fact'>
                    <h2 className='why-choose__title  uppercase'>over 5 years of expertise</h2>
                    <div className='relative l-separator__start'></div>
                    <p className='why-choose__paragraph'>
                      Over 5 years of expertise in fields of educational, Travel and investment
                      counselling.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className='col-1-of-3 why-choose__item'>
              <Fade up>
                <div className='why-choose__wrap'>
                  <div className='why-choose__icon'>
                    <i className='flaticon-consult'></i>
                  </div>
                  <div className='why-choose__fact'>
                    <h2 className='why-choose__title uppercase'>experienced consultants</h2>
                    <div className='relative l-separator__start'></div>
                    <p className='why-choose__paragraph'>
                      A team of experienced and professional consultants with proven ability and
                      high success rate.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className='col-1-of-3 why-choose__item'>
              <Fade up>
                <div className='why-choose__wrap'>
                  <div className='why-choose__icon'>
                    <i className='flaticon-network'></i>
                  </div>
                  <div className='why-choose__fact'>
                    <h2 className='why-choose__title uppercase'>largest network</h2>
                    <div className='relative l-separator__start'></div>
                    <p className='why-choose__paragraph'>
                      Authorized, experienced and professional partners across the world.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <Testimonial />
        <NewsLetter />
      </div>
    </Layout>
  )
}
