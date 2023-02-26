import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaNpm, FaBootstrap } from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import { SiTailwindcss } from "react-icons/si";

function Habilidades() {
  return (
    <div className='my-10'>
      <h2 className='text-center text-4xl font-bold mt-20 mb-10 uppercase text-violet-500 drop-shadow-xl'>Habilidades</h2>
        <div className='h-full container mx-auto grid grid-cols-3 grid-rows-3 items-center text-white my-10 gap-10'>
          <FaHtml5 className='w-16 h-16 justify-self-center' />
          <FaCss3Alt className='w-16 h-16 justify-self-center' />
          <FaJsSquare className='w-16 h-16 justify-self-center' />
          <FaReact className='w-16 h-16 justify-self-center' />
          <FaNodeJs className='w-16 h-16 justify-self-center' />
          <FaNpm className='w-16 h-16 justify-self-center' />
          <DiMongodb className='w-16 h-16 justify-self-center' />
          <FaBootstrap className='w-16 h-16 justify-self-center' />
          <SiTailwindcss className='w-16 h-16 justify-self-center' />
        </div>
    </div>
  )
}

export default Habilidades