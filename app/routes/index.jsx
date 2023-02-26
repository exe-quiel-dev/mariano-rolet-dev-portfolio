// import { Link } from "@remix-run/react"
import About from "~/components/about"
import Proyectos from "~/components/proyectosIndex"
import Prestaciones from "~/components/prestaciones"
import Habilidades from "~/components/habilidades"
import Arrow from "~/components/arrow"
import Contactame from "../components/contactame"

function Index() {
  return (
    <>
      <About />
      <Arrow />
      <section>
        <Prestaciones />
        <Arrow />
      </section>
      <section>
        <Habilidades />
        <Arrow />
      </section>
      <section>
        <div className="container mx-auto sm:max-h-screen flex items-center flex-col">
          <h2 className='text-center text-4xl font-bold mt-20 mb-10 uppercase text-violet-500 drop-shadow-sm'>Algunos de mis <span className='text-white'>proyectos</span></h2>
          <Proyectos />
        </div>
      </section>
      <Contactame />
    </>
  )
}

export default Index