import React, { useState, useRef, useEffect } from 'react';
import Loaded from "../Loaded"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import DelayedFallback from './DelayedFallback';
import {TwitterTimeNico} from './TwitterTimeNico'
const Tweet = (  ) => {
   
const isSSR = typeof window === "undefined"
 const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
    return(
  

      <>
        {
          !isSSR &&(
 <React.Suspense fallback={ <DelayedFallback /> }>
 <section className="pb-8 bg-[#1d9bf0]">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-500 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="leading-tight text-3xl md:text-4xl text-white dark:text-white">Mantente activo en nuestras redes sociales</h1>
 
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
             
              {/* Tabs buttons */}
              <div className="mb-0 md:mb-0">
               
                <div className="relative inline-flex flex-col bg-gray-100 shadow-xl">
                      <TwitterTimelineEmbed  source Type="Idennadistrito"
  screenName="Idennadistrito" options={{height: 462,width: 500}}  style={{ top: '30%' }}/>
                  </div>
                            </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
              
                  <div className="relative inline-flex flex-col">
                      <TwitterTimelineEmbed  source Type="NicolasMaduro"
  screenName="NicolasMaduro" options={{height: 462,width: 500}}  style={{ top: '30%' }}/>
                  </div>
              
                {/* Item 2 */}
              
                
                
                {/* Item 3 */}
             
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
   </React.Suspense>
  )
        }

      </>

  )}
export default Tweet
