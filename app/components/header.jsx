import { Link, useLocation } from '@remix-run/react'


function Header() {
  const location = useLocation();


  return (
    <header className="bg-gray-800 py-4 px-10">
      <div className='flex items-center md:justify-between sm:items-center flex-col'>
        <div>
          <Link to='/'>
            <h1 className="font-semibold text-2xl uppercase text-white hover:text-violet-500 transition-all mb-4 hover:underline">Mariano Rolet <span className="capitalize text-violet-500 hover:text-white transition-all">| Dev</span> </h1>
          </Link>
        </div>
        <nav>
          <Link
            to='/proyectos'
            className={location.pathname === '/proyectos' ? 'text-violet-500 p-2 mx-3 hover:text-violet-300 transition-all' : 'text-gray-200 p-2 mx-3 hover:text-violet-300 transition-all'}
          >Proyectos</Link>
          <Link
            to='/contacto'
            className={location.pathname === '/contacto' ? 'text-violet-500 p-2 mx-3 hover:text-violet-300 transition-all' : 'text-gray-200 p-2 mx-3 hover:text-violet-300 transition-all'}
          >Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header