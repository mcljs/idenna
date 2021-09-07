import {StaticImage} from "gatsby-plugin-image"
import React from "react"
import {Image} from "../components/Gallery/Images"
import Link from "../components/link"
import SEO from '../components/Seo'
import DelayedFallback from "../components/Tweet/DelayedFallback"
import Vertices from "../components/Vertices"
import useDarkMode from "../hooks/useDarkMode"
import image1 from '../images/bg_bicentenario_carabobo.jpg'

const Articles = React.lazy(() => import("../components/Articles")) 
const Banner = React.lazy(() => import('../components/Banner'))
const Layout = React.lazy(()=> import('../components/layout'))
const Testimonials = React.lazy(()=> import('../components/Header/Arbol'))
const InfoSection =  React.lazy(()=> import('../components/InfoSection/InfoSection'))
const Email = React.lazy(()=> import('../components/Email'))
const {InfoData} = React.lazy(()=> import('../data/InfoData'))
const VideoSection = React.lazy(()=> import('../components/VideoSection'))
const Tweet = React.lazy(()=> import('../components/Tweet/index'))
const BannerCenso = React.lazy(()=> import('../components/Banner/CensoNacional'))

//import Testimonials from "../components/Header/Arbol"
//import InfoSection from "../components/InfoSection/InfoSection"
//import Email from '../components/Email'
//import Layout from "../components/layout"
//import SEO from "../components/seo"
//import {InfoData} from "../data/InfoData"
//import VideoSection from "../components/VideoSection"


const IndexPage = () => {


useDarkMode()
const isSSR = typeof window === "undefined"

  return (
    <>
 
 <SEO title="Inicio" />
    {!isSSR &&(
<React.Suspense fallback={ <DelayedFallback/> }>
  <Layout>
  
    <div className="dark:bg-secondary-500 relative overflow-hidden ">
        <div className="max-w-screen-xl mx-auto" >
          <div className="dark:bg-secondary-500 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32 relative z-10 pb-8 bg-white">
            <svg
              aria-hidden="true"
              className="dark:text-secondary-500 lg:block absolute inset-y-0 right-0 hidden w-32 h-full text-white transform translate-x-1/2"
              fill="currentColor"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 xl:pt-28 max-w-screen-xl px-4 pt-24 mx-auto">
              <div className="sm:text-center lg:text-left">
                <h1 className="dark:text-gray-200 sm:text-5xl md:text-6xl text-4xl font-extrabold tracking-tight text-gray-900">
                  <span className="xl:inline block">Instituto Autonómo Consejo Nacional</span>{' '}
                  <span className="text-primary-600 dark:text-primary-500 xl:inline block">
                    de Derechos de Niños, Niñas y Adolescentes
                  </span>
                </h1>
                <p className="dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 mt-3 text-base text-gray-500">
                  Los niños y niñas, representan el futuro del pueblo venezolano, son mi más grande inspiración para luchar
              
                </p>
                <p className="dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 mt-3 text-base text-gray-500"><b>- Comandante Eterno Hugo Rafael Chávez Fria</b></p>
                <div className="sm:flex sm:justify-center sm:mt-8 lg:justify-start mt-5">
                  <div className="rounded-md shadow">
                    <Link
                      className="flex justify-center items-center py-3 w-full min-w-[160px] text-base font-medium text-white bg-[#1e5fab] hover:bg-primary-700 rounded-md border border-transparent md:text-lg"
                      href="/blog"
                      
                    >
                      Twitter
                    </Link>
                  </div>
                  <div className="sm:mt-0 sm:ml-3 mt-3">
                    <Link
                      className="flex justify-center items-center py-3 w-full min-w-[160px] text-base font-medium text-primary-700 bg-[#ec222c] hover:bg-primary-200 rounded-md border border-transparent md:text-lg text-white"
                      to="/contacto"
                      
                    >
                     Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div
                        className="sm:h-72 md:h-96 lg:w-full lg:h-full object-cover w-full h-56"
          >
            <StaticImage src="../images/idenaheader.jpg" className="sm:h-72 md:h-96 lg:w-full lg:h-full object-cover w-full h-56"/>
          </div>
        </div>
      </div>
      
    <Articles />

 <Tweet />
    <Email />  
  </Layout>
 </React.Suspense>

  )}
    </>
)}

export default IndexPage
