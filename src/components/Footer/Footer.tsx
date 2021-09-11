// Dependencies


// Internals
import  Link  from '../link'
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'

const navigation = {
  main: [
    {
      name: 'Inicio',
      href: '/',
    },
    {
      name:  'Noticias',
      href: '/blog',
    },
    {
      name:  'Nosotros',
      href: '/nosotros',
    },
    {
      name: 'Biblioteca',
      href: '/biblioteca',
    },
  {
      name: 'Galería',
      href: '/gallery',
    },
    {
      name: 'Solicitudes',
      href: '/solicitudes',
    },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/idennadistrito?lang=es',
      icon: function Icon(props: React.ComponentProps<'svg'>) {
        return (
          <FaTwitter {...props}/>
         
        )
      },
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Idenna-408129605919546/',
      icon: function Icon(props: React.ComponentProps<'svg'>) {
        return (
          <FaFacebook 
            {...props}
          />
        )
      },
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/idenna_oficial/?hl=es-la',
      icon: function Icon(props: React.ComponentProps<'svg'>) {
        return (
          <FaInstagram  {...props}/> 
        )
      },
    },
  ],
}

export const Footer2 = (): JSX.Element => {
 

  return (
    <footer className="bg-white dark:bg-secondary-600">
      <div className="overflow-hidden py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center -my-2 -mx-5"
        >
          {navigation.main.map((item, i) => (
            <div className="py-2 px-5" key={i}>
              <Link
                className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400"
                to={item.href}
                
              >
                {/* @ts-ignore: you can filter with string */}
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {navigation.social.map((item) => (
            <Link
              className="text-gray-400 hover:text-gray-500"
              to={item.href}
              key={item.name}
              target={"_blank"}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {new Date().getFullYear()} Instituto Autónomo Consejo Nacional de Derechos de Niños, Niñas y Adolescentes.{' '} Todos los derechos reservados.
         
        </p>
      </div>
    </footer>
  )
}

export default Footer2
