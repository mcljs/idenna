// Dependencies
import * as React from 'react'
import clsx from 'clsx'
import { useWindowScroll, usePrevious } from 'react-use'

// Internals
import Link from '../link'
import MobileHeader from './MobileHeader'
//import MobileHeader from './MobileHeader'
//import DarkModeToggle from './DarkModeToggle'
//import type { MyLocale } from 'i18n'

export const Header = (): JSX.Element => {

  const { y } = useWindowScroll()
  const prevY = usePrevious(y)

  return (
    <header
      className={clsx(
        'flex sticky top-0 z-50 items-center w-full h-16 bg-gray-100 dark:bg-secondary-500 shadow dark:shadow-none transition-transform duration-150 transform md:h-auto',
        prevY
          ? y < 76 || prevY > y
            ? 'translate-y-0'
            : '-translate-y-full'
          : 'translate-y-0'
      )}
      id="sticky-nav"
    >
      <div className="hidden relative md:flex md:flex-1 md:px-8">
        <nav className="container flex relative flex-wrap justify-end items-center">
          <div className="relative flex-1 flex-shrink-0">
            <Link
              className="inline-flex"
              to="/"
              title='header.menu.home'
            >
              <svg
                className="w-8 h-8 text-primary-600 dark:text-primary"
                viewBox="0 0 1080 1080"
              >
                <path
                  d="M1061.237 540.246c-.105 288.558-237.61 520.991-526.204 520.991H207.654A188.891 188.891 0 0118.763 872.346V705.883a23.728 23.728 0 0123.71-23.727h24.166a46.911 46.911 0 0146.894 46.929V872.24a94.209 94.209 0 0094.226 94.226h327.608c235.697 0 430.275-189.278 431.1-424.975C967.292 305.25 776.013 113.533 540 113.533H207.76a94.226 94.226 0 00-94.227 94.191v143.227a46.911 46.911 0 01-46.894 46.893H42.473a23.71 23.71 0 01-23.71-23.692V207.654A188.927 188.927 0 01207.654 18.763H540c287.944 0 521.36 233.416 521.237 521.483z"
                  fill="currentColor"
                  id="prefix__path3982"
                  strokeWidth={1.755}
                />
                <path
                  d="M871.696 542.527c-1.368 182.907-152.984 329.17-335.855 329.17H255.232a46.929 46.929 0 01-46.928-46.894V706.04a23.886 23.886 0 0123.868-23.885h46.77a24.114 24.114 0 0124.132 24.149v58.582a12.04 12.04 0 0012.04 12.039h221.885c130.625 0 238.927-104.458 239.927-235.066A236.926 236.926 0 00540 303.074H315.113a12.04 12.04 0 00-12.039 12.04v58.599a24.131 24.131 0 01-24.131 24.131h-46.771a23.903 23.903 0 01-23.868-23.85V255.232a46.946 46.946 0 0146.928-46.928H540c184.065 0 333.1 149.877 331.696 334.223z"
                  fill="currentColor"
                  id="prefix__path3984"
                  strokeWidth={1.755}
                />
                <path
                  d="M587.385 542.352c-1.228 25.482-23.201 45.033-48.701 45.033H42.332a23.552 23.552 0 01-23.57-23.534v-47.649a23.552 23.552 0 0123.57-23.587h497.651a47.385 47.385 0 0147.402 49.737z"
                  fill="currentColor"
                  id="prefix__path3986"
                  strokeWidth={1.755}
                />
              </svg>
            </Link>
          </div>

          <div className="flex items-center mr-6 ml-10 bg-transparent">
            <div className="flex justify-center items-center">
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/"
                title="Inicio"
              >
                Inicio
              </Link>
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/"
                title="Noticias"
              >
                Noticias
              </Link>
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/"
                title="Nosotros"
              >
                Nosotros
              </Link>
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/blog"
                title="Biblioteca"
              >
                Biblioteca
              </Link>
   <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/blog"
                title="Solicitudes"
              >
                Solicitudes
              </Link>
                          </div>

            <div className="flex ml-3 space-x-6">
      
            </div>
          </div>

          
        </nav>
      </div>

      <MobileHeader /> 
    </header>
  )
}

export default React.memo(Header)
