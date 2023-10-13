import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import Fade from 'react-reveal/Fade'
import { useSnackbar } from 'react-simple-snackbar'
import axios from 'axios'

import { options } from '../components/SnackbarNotification/settings'

const NewsLetter = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar(options)
  // News letter form handling
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
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
            'https://wpbackend.navisa.af/wp-json/wp/v2/rahrawan-sub-emails',
            {
              title: 'Subscribed Email - Rahrawan Travels',
              status: 'publish',
              fields: {
                email: email,
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
    setEmail('')
  }
  return (
    <div className='newsletter'>
      <div className='newsletter__wrap'>
        <div className='newsletter__info-box'>
          <Fade up>
            <h3 className='heading-primary'>Subscribe to our newsletters!</h3>
            <p className='newsletter__paragraph'>
              Sign up for our mailing list to get latest updates and offers.
            </p>
          </Fade>
          <form onSubmit={handleSubmit}>
            <Fade up>
              <div className='subscribe'>
                <input
                  name='email'
                  type='email'
                  value={email}
                  onChange={handleChange}
                  required
                  className='subscribe__input'
                  placeholder='Enter your email'
                />
                <button type='submit' className='btn subscribe__btn'>
                  {isLoading ? (
                    <Loader type='Oval' color='#fff' height={15} width={15} />
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
            </Fade>
          </form>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter
