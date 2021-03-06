import {StaticImage} from "gatsby-plugin-image"
import React, {useEffect,useState} from "react"
import Link from "../components/link"
import SEO from '../components/Seo'
import DelayedFallback from "../components/Tweet/DelayedFallback"
import Video from '../video/VID-20210915-WA0000.mp4'
import useDarkMode from "../hooks/useDarkMode"
import Example from '../components/Tweet/example'
import toast,{Toaster} from 'react-hot-toast'
import { BellIcon } from '@heroicons/react/solid'
import Search from "../components/Search"
const Articles = React.lazy(() => import("../components/Articles")) 
const Layout = React.lazy(()=> import('../components/layout'))
const Email = React.lazy(()=> import('../components/Email'))
const Tweet = React.lazy(()=> import('../components/Tweet/index'))


//import Testimonials from "../components/Header/Arbol"
//import InfoSection from "../components/InfoSection/InfoSection"
//import Email from '../components/Email'
//import Layout from "../components/layout"
//import SEO from "../components/seo"
//import {InfoData} from "../data/InfoData"
//import VideoSection from "../components/VideoSection"


const IndexPage = () => {


  useEffect(()=> {
 toast.custom((t) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <Search />
        </div>
        <div className="ml-3 flex-1">
          <h6 className="text-md font-bold">   Foro Chat Gratis :</h6>
          <p className="text-sm font-medium text-gray-900">
         
            Facilitadoras:<br/>
            Abog/Coord. Elizth Perdomo <br/>
            Psic. Paola Marcano <br />
            T-Social. Yazmin Aranguibel
   
          </p>
       <Link clasName="text-sm text-red-700" to="tel:04147113515"> Telefono: 0414-711-3515</Link>
          <p className="mt-1 text-sm text-gray-500">
Selecciona la campana para mas informaci??n..

          </p>
          <p></p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Cerrar
      </button>
    </div>
  </div>
))

  })

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
                  <span className="xl:inline block">Instituto Aut??nomo Consejo Nacional</span>{' '}
                  <span className="text-primary-600 dark:text-primary-500 xl:inline block">
                    de Derechos de Ni??os, Ni??as y Adolescentes
                  </span>
                </h1>
                <p className="dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 mt-3 text-base text-gray-500 italic">
                  "Los ni??os y ni??as, representan el futuro del pueblo venezolano, son mi m??s grande inspiraci??n para luchar"
              
                </p>
                <p className="dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 mt-3 text-base text-gray-500"><b>- Comandante Eterno Hugo Rafael Ch??vez Fr??as</b></p>
                <div className="sm:flex sm:justify-center sm:mt-8 lg:justify-start mt-5">
                  <div className="rounded-md shadow">
                    <Link
                      
                      className="flex justify-center items-center py-3 w-full min-w-[160px] text-base font-medium text-red-primary bg-red-100 rounded-md border border-transparent md:text-lg cursor-pointer"
                                           
                    >
                      Twitter
                    </Link>
                  </div>
                  <div className="sm:mt-0 sm:ml-3 mt-3">
                    <Link
                      className="flex justify-center items-center py-3 w-full min-w-[160px] text-base font-medium text-primary-700 bg-[#ec222c] hover:bg-primary-200 rounded-md border border-transparent md:text-lg text-white"
                      to="https://www.instagram.com/idenna_oficial/?hl=es-la"
                      
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
            <video autoPlay loop muted src={Video} className="sm:h-72 md:h-96 lg:w-full lg:h-full object-cover w-full h-56"/>
          </div>

        </div>
      </div>
      
    <Articles />

    <div className="bg-gray-100 py-8">
    <Example />
</div>
    <Email />
<Toaster toastOptions={{duration: 15000}}/>
  </Layout>
 </React.Suspense>

  )}
    </>
)}

export default IndexPage
