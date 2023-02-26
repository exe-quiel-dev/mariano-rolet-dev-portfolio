import { SiLinkedin } from "react-icons/si";
import Form from "~/components/form";

export function meta() {
  return {
    title: 'Mariano Rolet | Contacto',
    description: 'Pagina de Contacto'
  }
}


function Contacto() {
  return (
    <div className="p-5">
      <div className='container mx-auto my-10 bg-gray-100 rounded-xl p-2 flex sm:flex-col lg:flex-row'>
        <div className='md:grid md:grid-cols-1 w-full items-center justify-center p-3 bg-gray-300 rounded-xl'>
          <div className="text-white">
            <div className="mb-10 flex items-center justify-center p-5 bg-white rounded-xl shadow-sm">
            <SiLinkedin className="w-6 h-6 mx-5 text-violet-500" />
            <a href='https://www.linkedin.com/in/mariano-rolet-69a65b259/' target='_blank' rel="noreferrer" className="text-violet-500 font-bold hover:text-violet-700 uppercase">Ir al Perfil</a>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto