import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import SnackbarProvider from 'react-simple-snackbar'
import Router from 'next/router'
import NProgress from 'nprogress'

import ScrollToTop from '../components/ScrollToTop'
import '../styles/nprogress.css'
import '../styles/main.scss'

const options = {
  position: 'top-right',
  style: {
    backgroundColor: '#212529',
    color: '#fff',
    fontSize: '14px',
    textAlign: 'center',
  },
  closeStyle: {
    color: '#fff',
    fontSize: '16px',
  },
}

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <ScrollToTop showBelow={300} />
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
