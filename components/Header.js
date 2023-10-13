import React, { useState } from 'react'
import Link from 'next/link'

const Header = ({ active }) => {
  const [collapseMenu, setCollapseMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='header'>
      <Link href='/'>
        <div className='header__logo-box'>
          <img
            className='logo'
            src='/images/Rahrawan-Travels.png'
            alt='Rahrawan Travels'
            width='501'
            height='69'
          />
        </div>
      </Link>
      <button
        className={collapseMenu ? 'nav-toggler toggler-open' : 'nav-toggler'}
        onClick={() => setCollapseMenu(!collapseMenu)}
      >
        <span></span>
      </button>
      <nav className={collapseMenu ? 'header__nav header__nav-mob' : 'header__nav'}>
        <ul className='header__nav-list'>
          <li className={active === 'home' ? 'header__nav-item active' : 'header__nav-item'}>
            <Link href='/'>home</Link>
          </li>
          <li className={active === 'about' ? 'header__nav-item active' : 'header__nav-item'}>
            <Link href='/about'>about us</Link>
          </li>
          <li
            className={
              active === 'services'
                ? 'header__nav-item active header__nav-item--hasSub'
                : 'header__nav-item header__nav-item--hasSub'
            }
          >
            <Link href='#'>
              <div style={{ display: 'flex' }} onClick={() => setShowMenu(!showMenu)}>
                <span>our services</span>
                <span className={showMenu ? 'dropdown-icon icon-clicked' : 'dropdown-icon'}>
                  <svg style={{ width: '2rem' }} viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                  </svg>
                </span>
              </div>
            </Link>
            <div className={showMenu ? 'submenu submenu-mob' : 'submenu'}>
              <div className='font-bold submenu__title'>Service</div>
              <ul className='submenu__list'>
                <li className='submenu__item'>
                  <Link href='/education'>education</Link>
                </li>
                <li className='submenu__item'>
                  <Link href='/travel'>travel</Link>
                </li>
                <li className='submenu__item'>
                  <Link href='/investment'>investment</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={active === 'contact' ? 'header__nav-item active' : 'header__nav-item'}>
            <Link href='/contact'>contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
