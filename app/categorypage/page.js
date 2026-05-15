import { getAnunciosPorCategoria } from "@/lib/anuncios"
import Link from "next/link"

export default function CategoryPage() {
  const empleos   = getAnunciosPorCategoria("empleos")
  const servicios = getAnunciosPorCategoria("servicios")
  const vendo     = getAnunciosPorCategoria("vendo")

  return (
    <div className="container-main">
      
      <div className="container-titulo" >
            <h1>
                EL TABLERO
            </h1>
            </div>
            <h2 className="subtitle-detail-container">
                Categorias
            </h2>

      <div className="categorias-wrapper">
        <BloqueCategoria titulo="Empleos"   anuncios={empleos}   estilo="bloque-empleos" />
        <BloqueCategoria titulo="Servicios" anuncios={servicios} estilo="bloque-servicios" />
        <BloqueCategoria titulo="Vendo"     anuncios={vendo}     estilo="bloque-vendo" />
      </div>

      <div className="div-link-category">
        <Link className="link-category" href="/">Volver al inicio</Link>
      </div>
    </div>
  )
}

function BloqueCategoria({ titulo, anuncios, estilo }) {
  return (
    <section className={`bloque-categoria ${estilo}`}>
      <h2>{titulo}</h2>
      {anuncios.length === 0 ? (
        <p>No hay anuncios.</p>
      ) : (
        anuncios.map((anuncio) => (
          <Link key={anuncio.slug} href={`/anuncios/${anuncio.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="categoria-anuncio-card">
              <strong>{anuncio.titulo}</strong>
              <span>{anuncio.fecha}</span>
              <p>{anuncio.resumen}</p>
            </div>
          </Link>
        ))
      )}
    </section>
  )
}