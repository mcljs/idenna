
// Dependencies
import * as React from 'react'
import {
  ClipboardIcon,
  BookOpenIcon,
  HomeIcon,
  IdentificationIcon,
  MailIcon,
  RssIcon,
} from '@heroicons/react/outline'

import clsx from 'clsx'



// Internals

import Navigation from './Navigation'
import MenuToggle from './MenuToggle'
import {StaticImage} from 'gatsby-plugin-image'




const items = [
  {
    icon: HomeIcon,
    label: 'Inicio',
    slug: '/',
  },
  {
    icon: RssIcon,
    label: 'Noticias',
    slug: '/blog',
  },
  {
    icon: IdentificationIcon,
    label: 'Nosotros',
    slug: '/nosotros',
  },
  {
    icon: BookOpenIcon,
    label: 'Biblioteca',
    slug: '/biblioteca',
  },

  {
    icon: ClipboardIcon,
    label: 'Solicitudes',
    slug: '/solicitudes',
  },
]

const MobileHeader = (): JSX.Element => {
  const [isOpen, toggleOpen] = React.useState(false)
  const containerRef = React.useRef(null)



  React.useMemo(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div
      className={clsx(
        'overflow-hidden fixed top-0 right-0 z-[100] w-72 transition-all duration-300 md:hidden',
        isOpen ? 'h-screen' : 'h-20'
      )}
      ref={containerRef}
    >
    
        <div className="fixed top-3 left-6 z-50 py-1 bg-white dark:bg-secondary bg-opacity-70 dark:bg-opacity-60 rounded saturate-[180%] backdrop-filter backdrop-blur-[20px] md:hidden">
          <StaticImage src="../../images/logo.jpeg" alt="logo" className="w-20 h-8"/>
        </div>
    

      <div
        className="absolute top-0 right-0 bottom-0 w-72 bg-white transition-all duration-300"
        style={{
          clipPath: `circle(${isOpen ? 1000 * 1.5 + 200 : 24}px at 248px 32px)`,
        }}
      />

      <Navigation items={items} toggle={toggleOpen} />

     

      <div className="flex absolute top-2 right-20 z-[100] justify-center items-center p-2 w-12 h-12 bg-white dark:bg-primary rounded-full focus:ring-2 focus:ring-primary focus:outline-none">
      
      </div>

      <MenuToggle isOpen={isOpen} toggle={toggleOpen} />
    </div>
  )
}

export default React.memo(MobileHeader)
