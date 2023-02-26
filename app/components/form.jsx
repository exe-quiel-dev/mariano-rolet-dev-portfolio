import { IoMdSend } from "react-icons/io";

function Form() {



  return (
    <div>
      <form action='https://formsubmit.co/e7b5af2a1ecef7417206ae4198c5a369 ' method='POST' id="formulario" className="space-y-3 text-black">
        <div className="flex flex-col space-y-2">
          <label htmlFor="nombre" className="font-regular font-medium">Nombre:</label>
          <input id="nombre" type="text" name="nombre" placeholder="Nombre Remitente" className="border border-gray-300 px-3 py-2 rounded-lg" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-regular font-medium">Email:</label>
          <input id="email" type="email" name="email" placeholder="Email Remitente, ej: mkt@empresa.com" className="border border-gray-300 px-3 py-2 rounded-lg" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="asunto" className="font-regular font-medium">Asunto:</label>
          <input id="asunto" type="text" name="asunto" placeholder="Asunto Email" className="border border-gray-300 px-3 py-2 rounded-lg" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="mensaje" className="font-regular font-medium">Mensaje:</label>
          <textarea id="mensaje" type="text" name="mensaje" placeholder="Mensaje de Email" className="border border-gray-300 px-3 py-2 rounded-lg h-36" ></textarea>
        </div>

        <div id="botones" className="flex gap-5">
          <button
            type="submit"
            className="flex-1 bg-violet-500 hover:bg-violet-700 text-white flex justify-center gap-2 items-center p-3"
          >
            <IoMdSend className='w-8 h-8'/>
            Enviar
          </button>
          <input type='hidden' name='_next' value='https://mariano-rolet-dev-portfolio.vercel.app/'/>
          <input type='hidden' name='_captcha' value='false'/>
        </div>
      </form>
    </div>
  )
}

export default Form