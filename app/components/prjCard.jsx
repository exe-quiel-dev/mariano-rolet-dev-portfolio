import { SiGithub } from "react-icons/si";

function PrjCard({ imagen1, imagen2, imagen3, imagen4, imagen5, alt, link, desc }) {
  return (
    <div className="p-10">
      <div className='my-10 bg-gray-100 rounded-xl p-2 flex sm:flex-col lg:flex-row'>
        <div className='sm:flex sm:flex-col md:grid md:grid-cols-3 items-center justify-center p-3 bg-gray-300 rounded-xl'>
          <img src={imagen1} alt={alt} className='w-full border-2 shadow-lg' />
          <img src={imagen2} alt={alt} className='w-full border-2 shadow-lg' />
          <img src={imagen3 || null} alt={alt || ''} className='w-full border-2 shadow-lg' />
          <img src={imagen4 || null} alt={alt || ''} className='w-full border-2 shadow-lg' />
          <img src={imagen5 || null} alt={alt || ''} className='w-full border-2 shadow-lg' />
          <div className='p-8 flex items-center justify-center'>
            <SiGithub className='w-16 h-16' />
            <a href={link} target='_blank' rel="noreferrer" className="text-violet-500 underline mx-5">Ir al Repositorio</a>
          </div>
          <p className="text-center col-start-1 col-end-4 text-lg p-3">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default PrjCard