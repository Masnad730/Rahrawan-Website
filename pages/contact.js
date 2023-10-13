import React, { useState } from 'react'
import Link from 'next/link'
import Loader from 'react-loader-spinner'
import Fade from 'react-reveal/Fade'
import { useSnackbar } from 'react-simple-snackbar'
import axios from 'axios'

import { options } from '../components/SnackbarNotification/settings'
import Layout from '../components/layout/Layout'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'

export default function Contact() {
  const [openSnackbar, closeSnackbar] = useSnackbar(options)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
            'https://wpbackend.navisa.af/wp-json/wp/v2/rahrawan-usr-enquiry',
            {
              title: 'User Enquiry - Rahrawan Travels Free Counseling',
              status: 'publish',
              fields: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
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
      email: '',
      message: '',
    })
  }
  return (
    <Layout
      title='Contact Us - Rahrawan Travels'
      canonical='https://rahrawan.af/contact/'
      descriptionContent='Contact Us.Ansori Street, Shahri Now, District 10, Kabul, Afghanistan . +93 780 87 57 87. info@rahrawan.af'
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
                  "@id": "https://rahrawan.af/#item",
                  "name": "Home",
                  "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible, also help foreign  tourists to have the best travel experience in Afghanistan.",
                  "url": "https://rahrawan.af/"
                }
              },
              {
                "@type": "ListItem",
                "@id": "https://rahrawan.af/contact/#listItem",
                "position": 2,
                "item": {
                  "@id": "https://rahrawan.af/contact/#item",
                  "name": "Contact",
                  "description": "Contact Us.Ansori Street, Shahri Now, District 10, Kabul, Afghanistan . +93 780 87 57 87. info@rahrawan.af",
                  "url": "https://rahrawan.af/contact/"
                }
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://rahrawan.af/contact/#webpage",
            "url": "https://rahrawan.af/contact/",
            "name": "Contact",
            "description": "Contact Us.Ansori Street, Shahri Now, District 10, Kabul, Afghanistan . +93 780 87 57 87. info@rahrawan.af",
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
          <Header active={'contact'} />
          <div className='hero__box'>
            <Fade up>
              <div className='hero__title'>Contact</div>
              <div className='hero__pagination'>
                <span className='hero__pagination-item'>
                  <Link href='/'>home</Link>
                </span>
                <span className='hero__pagination-item'>&#8594;</span>
                <span className='hero__pagination-item'>
                  <Link href='#'>contact</Link>
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <div className='contact'>
          <Fade right>
            <address className='row contact__wrap'>
              <div className='col-1-of-3 contact__info'>
                <div className='contact__info--icon'>
                  <i className='flaticon-phone-call'></i>
                </div>
                <div className='contact__info--phone'>+93 780 87 57 87</div>
              </div>
              <div className='col-1-of-3 contact__info'>
                <div className='contact__info--icon'>
                  <i className='flaticon-mail'></i>
                </div>
                <div className='contact__info--email'>
                  <a href='mailto:contact@business.com'>info@rahrawan.af</a>
                </div>
              </div>
              <div className='col-1-of-3 contact__info'>
                <div className='contact__info--icon'>
                  <i className='flaticon-pin'></i>
                </div>
                <div className='contact__info--add'>
                  Ansori Street, Shahri Now,
                  <br /> Kabul, Afghanistan
                </div>
              </div>
            </address>
          </Fade>
          <div className='contact__box'>
            <h1 className='contact__title'>Get in Touch</h1>
            <div className='row'>
              <div className='col-1-of-2'>
                <Fade left>
                  <form onSubmit={handleSubmit} className='contact__form'>
                    <label htmlFor='name'>Your Name</label>
                    <input
                      name='name'
                      type='text'
                      value={formData.name}
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
                    <label htmlFor='message'>Meassage</label>
                    <textarea
                      name='message'
                      cols='30'
                      rows='10'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    <button type='submit' className='btn contact__form-btn'>
                      {isLoading ? (
                        <Loader type='Oval' color='#fff' height={15} width={15} />
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </Fade>
              </div>
              <div className='col-1-of-2 contact__map'>
                <Fade right>
                  <div className='contact__map-show'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6573.188889417662!2d69.17287680000003!3d34.538501600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1617276306046!5m2!1sen!2s'
                      width='537'
                      height='365'
                      allowFullScreen
                      loading='lazy'
                    ></iframe>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </Layout>
  )
}
