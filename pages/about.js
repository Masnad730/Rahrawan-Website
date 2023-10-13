import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import CoolFacts from '../components/CoolFacts'

export default function About() {
  return (
    <Layout
      title='About Us - Rahrawan Travels'
      canonical='https://rahrawan.af/about/'
      descriptionContent='Rahrawan Travels is a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible. We also help foreigners to have the best travel experience in Afghanistan.'
      jsonLD='{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://rahrawan.af/#website",
            "url": "https://rahrawan.af/",
            "name": "Rahrawan Travels",
            "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible, also help foreign  tourists to have the best travel experience in Afghanistan.",
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
                  "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible, we also help foreign  tourists to have the best travel experience in Afghanistan.",
                  "url": "https://rahrawan.af/"
                }
              },
              {
                "@type": "ListItem",
                "@id": "https://rahrawan.af/about/#listItem",
                "position": 2,
                "item": {
                  "@type": "WebPage",
                  "@id": "https://rahrawan.af/about/#item",
                  "name": "About",
                  "description": "Contact Us.Ansori Street, Shahri Now, District 10, Kabul, Afghanistan . +93 780 87 57 87. info@rahrawan.af",
                  "url": "https://rahrawan.af/about/"
                }
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://rahrawan.af/about/#webpage",
            "url": "https://rahrawan.af/about/",
            "name": "About",
            "description": "Rahrawan travels is a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible. Besides that, we also help foreigners to have the best travel experience in Afghanistan.",
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
        <div className='hero-page'>
          <Header active={'about'} />
          <div className='hero__box'>
            <Fade up>
              <div className='hero__title'>About</div>
              <div className='hero__pagination'>
                <span className='hero__pagination-item'>
                  <Link href='/'>home</Link>
                </span>
                <span className='hero__pagination-item'>&#8594;</span>
                <span className='hero__pagination-item'>
                  <Link href='#'>about</Link>
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <section className='svcq'>
          <div className='row'>
            <div className='col-1-of-3 svcq-des__box'>
              <div className='svcq-des'>
                <Fade up>
                  <h1 className='svcq-des__subtitle'>about rahrawan travels</h1>
                  <h2 className='svcq-des__title'>High Quality Services</h2>
                  <p className='svcq-des__txt'>
                    Rahrawan travels is a company in Afghanistan that helps people to Study, Invest
                    and Travel abroad in the best way possible. Besides that, we also help
                    foreigners to have the best travel experience in Afghanistan.
                  </p>
                </Fade>
              </div>
            </div>

            <div className='col-2-of-3'>
              <div className='row'>
                <div className='col-1-of-2 svcq-attr__box'>
                  <Fade up>
                    <div className='svcq-attr'>
                      <div className='svcq-attr__icon-box'>
                        <i className='svcq-attr__icon flaticon-customer'></i>
                      </div>
                      <div className='svcq-attr__txt-box'>
                        <h3 className='svcq-attr__title'>Customer Responsiveness</h3>
                        <p className='svcq-attr__txt'>
                          Committed to provide quick and accurate response to our customer inquires.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='col-1-of-2 svcq-attr__box'>
                  <Fade up>
                    <div className='svcq-attr'>
                      <div className='svcq-attr__icon-box'>
                        <i className='svcq-attr__icon flaticon-guaranteed'></i>
                      </div>
                      <div className='svcq-attr__txt-box'>
                        <h3 className='svcq-attr__title'>Quality</h3>
                        <p className='svcq-attr__txt'>
                          Exceeding your expectations by offering superb quality services with the
                          help of our professional team.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className='row'>
                <div className='col-1-of-2 svcq-attr__box'>
                  <Fade up>
                    <div className='svcq-attr'>
                      <div className='svcq-attr__icon-box'>
                        <i className='svcq-attr__icon flaticon-timeline'></i>
                      </div>
                      <div className='svcq-attr__txt-box'>
                        <h3 className='svcq-attr__title'>Timeliness</h3>
                        <p className='svcq-attr__txt'>
                          Committed to provide services at the pre-specified time.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='col-1-of-2 svcq-attr__box'>
                  <Fade up>
                    <div className='svcq-attr'>
                      <div className='svcq-attr__icon-box'>
                        <i className='svcq-attr__icon flaticon-producer'></i>
                      </div>
                      <div className='svcq-attr__txt-box'>
                        <h3 className='svcq-attr__title'>Fair Pricing</h3>
                        <p className='svcq-attr__txt'>
                          Fair and affordable rates for all of our services
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='choose-us'>
          <div className='row'>
            <div className='col-1-of-2'></div>
            <div className='col-1-of-2 choose-us__feature-col'>
              <div className='choose-us__feature'>
                <Fade up>
                  <h2 className='choose-us__feature--title'>Your success journey starts here</h2>
                  <p className='choose-us__feature--des'>
                    Still have trouble finding the best country to study, travel and invest?
                    <br /> You have come to the right place!
                  </p>
                </Fade>
                <div className='choose-us__feature-box'>
                  <Fade up>
                    <div className='choose-us__feature--fact'>
                      <div className='choose-us__feature--fact-wrap'>
                        <i className='flaticon-checked'></i>
                      </div>
                      <div className='choose-us__feature--fact-box'>
                        <h2 className='choose-us__feature--fact-title'>
                          over 5 years of expertise
                        </h2>
                        <p className='choose-us__feature--fact-paragraph'>
                          Over 5 years of expertise in fields of educational, Travel and investment
                          counselling.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>

                <div className='choose-us__feature-box'>
                  <Fade up>
                    <div className='choose-us__feature--fact'>
                      <div className='choose-us__feature--fact-wrap'>
                        <i className='flaticon-checked'></i>
                      </div>
                      <div className='choose-us__feature--fact-box'>
                        <h2 className='choose-us__feature--fact-title'>experienced consultants</h2>
                        <p className='choose-us__feature--fact-paragraph'>
                          A team of experienced and professional consultants with proven ability and
                          high success rate.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>

                <div className='choose-us__feature-box'>
                  <Fade up>
                    <div className='choose-us__feature--fact'>
                      <div className='choose-us__feature--fact-wrap'>
                        <i className='flaticon-checked'></i>
                      </div>
                      <div className='choose-us__feature--fact-box'>
                        <h2 className='choose-us__feature--fact-title'>largest network</h2>
                        <p className='choose-us__feature--fact-paragraph'>
                          Authorized, experienced and professional partners across the world.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='cta'>
          <div className='cta__area'>
            <div className='cta__text-box'>
              <Fade up>
                <h3 className='cta__main-heading'>Let's get started</h3>
                <h4 className='cta__txt heading-secondary'>
                  Ready to take a big step toward a good future?&nbsp; You are just one tap away
                  from our professional team.
                </h4>
              </Fade>
            </div>
            <div className='cta__btn-box'>
              <Fade up>
                <button className='btn cta__btn'>
                  <Link href='/contact'>Get in touch</Link>
                </button>
              </Fade>
            </div>
          </div>
        </section>
        <Testimonial />
        <section className='achievements'>
          <div className='achievements__stat'>
            <div className='achievements__des'>
              <Fade left>
                <h2 className='achievements__title'>Our Achievements</h2>
              </Fade>
            </div>
            <div className='achievements__fact'>
              <CoolFacts />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
