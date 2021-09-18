/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React from 'react';


import ScrollToTop from './ScrollButton';
import useDarkMode from '../hooks/useDarkMode';
//import "./layout.css"
import Header from './Headers/Header'
import {Footer2} from './Footer/Footer.tsx';
import './layout.css'
import Banner from '../images/banner.png'
import CookieConsent from 'react-cookie-consent'
const Layout = ({ children }) => {

useDarkMode()


  const acceptConsent = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
    })
  }

  const declineConsent = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
    })
  }


  return (
    <>
      {/*<Global styles={globalStyles}/>*/}    
      {/* <Navbar  />*/}
       
      <Header/>
        <main className="dark:bg-[#121f3d]">{children}</main>
      <ScrollToTop />
      <Footer2/>
      <CookieConsent
        buttonClasses="m-0 flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-secondary hover:bg-secondary-400"
        buttonText="Ok"
        buttonWrapperClasses="flex space-x-2 items-center"
        containerClasses="bg-white flex items-center space-x-2 p-2 sm:p-3"
                declineButtonClasses="m-0 flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-red-500 hover:bg-red-400"
        declineButtonText="No"
        enableDeclineButton
        expires={365}
        location="bottom"
        onAccept={acceptConsent}
        onDecline={declineConsent}
        sameSite="strict"
        style={{display: 'flex'}}
      >
        <p className="ml-3 text-sm font-medium text-white">
          Este sitio utiliza cookies para brindarle una mejor experiencia de usuario.
          Para obtener más información, consulte nuestra{' '}
          <a
            className="underline"
            href="https://www.privacypolicies.com/live/0468436e-4dd5-4c21-b8a2-0c42b47f695d"
            rel="noopener noreferrer"
            target="_blank"
          >
            Política de cookies
          </a>
        </p>
      </CookieConsent>

   
    </>
  )
}



export default Layout
