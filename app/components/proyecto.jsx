

function Proyecto({link, alt, src}) {
  return (
      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all">
        <a href={link} target='_blank' rel="noreferrer"><img className="rounded-lg" src={src} alt={alt}/></a>
      </div>
  )
}

export default Proyecto