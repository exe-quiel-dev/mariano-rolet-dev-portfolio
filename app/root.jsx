import {
  Meta,
  Links,
  LiveReload,
  Scripts,
  Outlet
} from '@remix-run/react'
import style from '~/styles/index.css'
import Header from '~/components/header'
import icon from '../public/img/favicon.ico'

export function meta() {
  return (
    {
      charset: 'utf-8',
      title: 'Mariano Rolet - Portfolio | Inicio',
      viewport: 'width=device-width,initial-scale=1'
    }
  )
}

export function links() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: style
    },
    {
      rel:'icon',
      href: icon
    }
  ]
}

export default function App() {

  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='es'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='bg-gray-900'>
        <Header />
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}