// import { Link } from '@remix-run/react'
import imagen from '../../public/img/aboutme.png'

function About() {
  return (
    <section className='my-10 min-h-screen flex flex-col justify-center p-5'>
      <h2 className='text-center text-4xl font-bold mt-20 mb-10 uppercase text-violet-500 drop-shadow-xl'>Sobre mi</h2>

      <div className='container mx-auto my-10 bg-gray-100 rounded-xl p-2 flex sm:flex-col lg:flex-row'>
        <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 items-center justify-center p-3 bg-gray-300 rounded-xl'>
          <img src={imagen} alt='foto desarrollador' className='w-full border-2 shadow-lg' />
          <div className='p-8'>
            <p className='w-full text-xl mx-3 md:my-5 sm:border-y md:border-none p-2'>Hola! Me llamo Mariano, soy <span className='font-bold text-violet-500'>desarrollador web</span> FrontEnd, vivo en Buenos Aires, Argentina. Busco una oportunidad para aplicar mis conocimientos aprendidos en mi formacion academica con el fin de beneficiar a una empresa y desarrollarme de forma profesional y personal. Tengo como objetivo volverme un experto en el area.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About