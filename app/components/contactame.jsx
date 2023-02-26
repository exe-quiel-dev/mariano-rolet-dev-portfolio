import { Link } from "@remix-run/react"

function Contactame() {
  return (
    <div className='p-8 text-white text-center border-y md:border-none'>
      <p className='w-full text-xl mx-3 md:my-5 p-2'>Si estas interesado en hacerme una propuesta de trabajo te invito a que me <Link to='/contacto' className='font-bold transition-all bg-violet-500 hover:bg-violet-700 uppercase p-1 rounded text-base'>Contactes</Link>.</p>
    </div>
  )
}

export default Contactame