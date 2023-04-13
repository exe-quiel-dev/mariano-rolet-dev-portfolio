import { Link } from '@remix-run/react'
import thumbBuscador from '../../public/img/proyecto-buscador-autos.jpg'
import thumbRecetas from '../../public/img/proyecto-buscador-recetas.jpg'
import thumbGastos from '../../public/img/proyecto-gastos-semanales.jpg'
import thumbMail from '../../public/img/proyecto-mail.jpg'
import thumbgrowshop from '../../public/img/growshop-vite-react-router-dom.jpg'
import { FaPlusCircle } from 'react-icons/fa'


function Proyectos() {
  return (
    <div className='grid lg:grid-cols-3 gap-10 my-10 p-10 md:grid-cols-2 sm:grid-cols-2'>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://growshop-frontend-vite.vercel.app/'><img src={thumbgrowshop} alt='miniatura proyecto buscador autos' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
      </div>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://proyecto-buscador-autos-exequiel-dev.netlify.app/'><img src={thumbBuscador} alt='miniatura proyecto buscador autos' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
      </div>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://proyecto-buscador-recetas-exe-dev.netlify.app/'><img src={thumbRecetas} alt='miniatura proyecto buscador recetas' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
      </div>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://proyecto-gastos-semanales-exequieldev.netlify.app/'><img src={thumbGastos} alt='miniatura proyecto gastos semanales' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
      </div>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://proyecto-enviar-email-exequiel-dev.netlify.app/'><img src={thumbMail} alt='miniatura proyecto enviar email' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
      </div>
      <div className='opacity-50 hover:opacity-100 transition-all flex items-center'>
        <Link to='/proyectos'><FaPlusCircle className='w-20 h-20 justify-self-center text-white' /></Link>
      </div>
    </div>
  )
}

export default Proyectos