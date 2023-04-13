import Proyecto from "~/components/proyecto"
import { SiGithub } from "react-icons/si";
import thumbBuscador from '../../public/img/proyecto-buscador-autos.jpg'
import thumbRecetas from '../../public/img/proyecto-buscador-recetas.jpg'
import thumbGastos from '../../public/img/proyecto-gastos-semanales.jpg'
import thumbMail from '../../public/img/proyecto-mail.jpg'
import thumbControlGastos from '../../public/img/proyecto-control-gastos.jpg'
import thumbPrestamos from '../../public/img/proyecto-calculador-prestamos.jpg'
import thumbPixabay from '../../public/img/proyecto-buscador-imagenes.jpg'
import thumbCursos from '../../public/img/proyecto-cursos.jpg'
import thumbPacientes from '../../public/img/proyecto-citas-veterinaria.jpg'
import PrjCard from "~/components/prjCard"
import thumbViajesNode1 from '../../public/img/agencia-viajes-node-index1.jpg'
import thumbViajesNode2 from '../../public/img/agencia-viajes-node-index2.jpg'
import thumbViajesNode3 from '../../public/img/agencia-viajes-node-index3.jpg'
import thumbgrowshop from '../../public/img/growshop-vite-react-router-dom.jpg'
import thumbViajesNodeTestimoniales from '../../public/img/agencia-viajes-node-testimoniales.jpg'
import thumbViajesNodeViajes from '../../public/img/agencia-viajes-node-viajes.jpg'
import thumbCrmReact from '../../public/img/crm-clientes-react-clientes.jpg'
import thumbCrmReactEditar from '../../public/img/crm-clientes-react-editar.jpg'
import thumbCrmJs from '../../public/img/crm-clientes-js-clientes.jpg'
import thumbCrmJs2 from '../../public/img/crm-clientes-js-editar.jpg'
import thumbCrmJs3 from '../../public/img/crm-clientes-js-nuevo.jpg'
// import thumb from '../../public/img/proyecto-.jpg'
// import thumb from '../../public/img/proyecto-.jpg'
// import thumb from '../../public/img/proyecto-.jpg'
// import thumb from '../../public/img/proyecto-.jpg'
// import thumb from '../../public/img/proyecto-.jpg'

export function meta() {
  return {
    title: 'Mariano Rolet | Proyectos',
    description: 'Todos los proyectos realizados hasta el momento'
  }
}

function Proyectos() {
  return (
    <>
      <h1 className="font-semibold text-4xl uppercase text-violet-500 transition-all my-10 text-center">Mis Proyectos</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center p-10 gap-5">
        <Proyecto alt='imagen proyecto buscador autos' src={thumbgrowshop} link='https://growshop-frontend-vite.vercel.app/' />
        <Proyecto alt='imagen proyecto buscador autos' src={thumbBuscador} link='https://proyecto-buscador-autos-exequiel-dev.netlify.app/' />
        <Proyecto alt='imagen proyecto buscador recetas' src={thumbRecetas} link='https://proyecto-buscador-recetas-exe-dev.netlify.app/' />
        <Proyecto alt='imagen proyecto gastos semanales' src={thumbGastos} link='https://proyecto-gastos-semanales-exequieldev.netlify.app/' />
        <Proyecto alt='imagen proyecto enviar email' src={thumbMail} link='https://proyecto-enviar-email-exequiel-dev.netlify.app/' />
        <Proyecto alt='imagen proyecto control gastos' src={thumbControlGastos} link='https://control-gastos-react-vite-exe-dev.netlify.app/' />
        <Proyecto alt='imagen proyecto buscador autos' src={thumbPrestamos} link='https://calculador-prestamos-react-vite.netlify.app/' />
        <Proyecto alt='imagen proyecto buscador autos' src={thumbPixabay} link='https://proyecto-pixabay-imagenes-exe-dev.netlify.app/' />
        <Proyecto alt='imagen proyecto buscador autos' src={thumbCursos} link='https://proyecto-cursos-exequiel-dev.netlify.app/' />
        <Proyecto alt='imagen proyecto buscador autos' src={thumbPacientes} link='https://proyecto-veterinaria-exequiel-dev.netlify.app/' />
      </div>

      <PrjCard
        imagen1={thumbViajesNode1}
        imagen2={thumbViajesNode2}
        imagen3={thumbViajesNode3}
        imagen4={thumbViajesNodeTestimoniales}
        imagen5={thumbViajesNodeViajes}
        alt='imagen de proyecto agencia de viajes node'
        link='https://github.com/exe-quiel-dev/agencia-viajes-NodeJs'
        desc='Proyecto agencia de viajes hecho con NodeJs, Express, Sequelize, Pug y Bootstrap '
      />

      <div className="p-10">
        <div className='my-10 bg-gray-100 rounded-xl p-2 flex sm:flex-col lg:flex-row'>
          <div className='sm:flex sm:flex-col md:grid md:grid-cols-3 items-center justify-center p-3 bg-gray-300 rounded-xl'>
            <img src={thumbCrmReact} alt='imagen proyecto crm react' className='w-full border-2 shadow-lg' />
            <img src={thumbCrmReactEditar} alt='imagen proyecto crm react' className='w-full border-2 shadow-lg' />
            <div className='p-8 flex items-center justify-center'>
              <SiGithub className='w-16 h-16' />
              <a href='https://github.com/exe-quiel-dev/crm-react-router-dom' target='_blank' rel="noreferrer" className="text-violet-500 underline mx-5">Ir al Repositorio</a>
            </div>
            <p className="text-center col-start-1 col-end-4 text-lg p-3">Proyecto CRM Clientes hecho con React, React Router DOM, Tailwind Css, Json-Server</p>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className='my-10 bg-gray-100 rounded-xl p-2 flex sm:flex-col lg:flex-row'>
          <div className='sm:flex sm:flex-col md:grid md:grid-cols-3 items-center justify-center p-3 bg-gray-300 rounded-xl'>
            <img src={thumbCrmJs} alt='imagen proyecto crm react' className='w-full border-2 shadow-lg' />
            <img src={thumbCrmJs2} alt='imagen proyecto crm react' className='w-full border-2 shadow-lg' />
            <img src={thumbCrmJs3} alt='imagen proyecto crm react' className='w-full border-2 shadow-lg' />
            <div className='p-8 flex items-center justify-center col-start-1 col-end-4'>
              <SiGithub className='w-16 h-16' />
              <a href='https://github.com/exe-quiel-dev/crm-crud-rest' target='_blank' rel="noreferrer" className="text-violet-500 underline mx-5">Ir al Repositorio</a>
            </div>
            <p className="text-center col-start-1 col-end-4 text-lg p-3">Proyecto CRM Crud con REST y Async Await</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Proyectos