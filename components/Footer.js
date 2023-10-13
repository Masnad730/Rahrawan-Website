import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-1-of-4 footer__logo-col'>
          <div className='footer__logo-box'>
            <img src='/images/Rahrawan-Travels.png' alt='Rahrawan Travels' className='logo' />
          </div>
          <div className='footer__copyright'>
            <div className='capitalize'>
              copyright © rahrawan travels {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className='col-2-of-4'>
          <div className='capitalize heading-secondary'>quick links</div>
          <hr className='separator-line' />
          <div className='footer__quick-links'>
            <nav className='footer__nav'>
              <ul className='footer__nav-list'>
                <li className='footer__nav-item'>
                  <Link href='/'>home</Link>
                  <span className='footer__nav-item--separator'>/</span>
                </li>
                <li className='footer__nav-item'>
                  <Link href='/about'>about us</Link>
                  <span className='footer__nav-item--separator'>/</span>
                </li>
                <li className='footer__nav-item'>
                  <Link href='/education'>education</Link>
                  <span className='footer__nav-item--separator'>/</span>
                </li>
                <li className='footer__nav-item'>
                  <Link href='/travel'>travel</Link>
                  <span className='footer__nav-item--separator'>/</span>
                </li>
                <li className='footer__nav-item'>
                  <Link href='/investment'>investment</Link>
                  <span className='footer__nav-item--separator'>/</span>
                </li>
                <li className='footer__nav-item'>
                  <Link href='/contact'>contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='col-1-of-4 footer__social-col'>
          <div className='capitalize heading-secondary'>follow us</div>
          <hr />
          <Fade up>
            <div className='footer__soc-media'>
              <div className='footer__soc-media--icon'>
                <a href='https://www.facebook.com/Rahrawan-Travels-112684860532741' target='_blank'>
                  <i className='flaticon-facebook-logo'></i>
                </a>
              </div>
              <div className='footer__soc-media--icon'>
                <a href='#'>
                  <i className='flaticon-instagram'></i>
                </a>
              </div>
              <div className='footer__soc-media--icon'>
                <a href='#'>
                  <i className='flaticon-twitter'></i>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </footer>
  )
}
export default Footer
