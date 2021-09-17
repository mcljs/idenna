
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
const actions = [
  {
    title: '',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
    twitter:  <TwitterTimelineEmbed  source Type="NicolasMaduro"
  screenName="NicolasMaduro" options={{height: 462,width: 500}}  style={{ top: '30%' }}/>

  },
  {
    title: '',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
    twitter: <TwitterTimelineEmbed  source Type="Idennadistrito"
  screenName="Idennadistrito" options={{height: 462,width: 500}}  style={{ top: '30%' }}/>

  },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2 mb-4">Mantente activo en nuestras redes sociales</h1>
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            'flex group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none" target="_blank">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-8 text-sm text-gray-500 z-30">
              {action.twitter}
            </p>
          </div>
          <span
            className="pointer-events-none top-6 right-6 text-gray-300 group-hover:text-[#1d9bf0]"
            aria-hidden="true"
          >
           
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>

          </span>
        </div>
      ))}
    </div>
  </div>
      )
}
