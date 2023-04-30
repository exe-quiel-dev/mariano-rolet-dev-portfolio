import { Link } from '@remix-run/react'
import thumbGastos from '../../public/img/proyecto-gastos-semanales.jpg'
import thumbMail from '../../public/img/proyecto-mail.jpg'
import thumbArtistGallery from '../../public/img/artist-gallery-thumb.jpg'
import thumbgrowshop from '../../public/img/growshop-vite-react-router-dom.jpg'
import thumbGomeria from '../../public/img/thumb-gomeria.jpg'
import { FaPlusCircle } from 'react-icons/fa'


function Proyectos() {
  return (
    <div className='grid lg:grid-cols-3 gap-10 my-10 p-10 md:grid-cols-2 sm:grid-cols-2'>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://growshop-frontend-vite.vercel.app/'><img src={thumbgrowshop} alt='miniatura proyecto growshop' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
      </div>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://artist-portfolio-one.vercel.app/'><img src={thumbArtistGallery} alt='miniatura proyecto portfolio fotografo' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
      </div>
      <div className='opacity-50 hover:opacity-100 transition-all'>
        <a href='https://gomeria-react-vite.vercel.app/'><img src={thumbGomeria} alt='miniatura proyecto gomeria' className="rounded shadow-sm sm:w-40 md:w-72" /></a>
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