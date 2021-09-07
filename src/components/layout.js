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

const Layout = ({ children }) => {

useDarkMode()





  return (
    <>
      {/*<Global styles={globalStyles}/>*/}    
      {/* <Navbar  />*/}
      <Header/>
        <main className="dark:bg-[#121f3d]">{children}</main>
      <ScrollToTop />
      <Footer2/>
     

   
    </>
  )
}



export default Layout
