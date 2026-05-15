import { getAnuncios, getAnuncioBySlug } from "@/lib/anuncios"
import Link from "next/link"

export async function generateStaticParams() {
  const anuncios = getAnuncios()
  return anuncios.map((anuncio) => ({ slug: anuncio.slug }))
}

export default async function DetallePage({ params }) {
    const {slug} = await params
  const anuncio = getAnuncioBySlug(slug)

  if (!anuncio) {
    return (
      <div className="container-main">
        <p>Anuncio no encontrado.</p>
        <Link className="link-category" href="/">← Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="container-main">
      <div className="container-titulo">
        <h1>EL TABLERO</h1>
      </div>

      <div className={`anuncio-card anuncio-${anuncio.categoria}`}>
        <h2>{anuncio.titulo}</h2>
        <div className="anuncio-meta">
          <span className="anuncio-categoria">{anuncio.categoria}</span>
          <span className="anuncio-fecha">{anuncio.fecha}</span>
          <span className="anuncio-fecha">Por: {anuncio.autor}</span>
        </div>
        <p>{anuncio.resumen}</p>
        <hr />
        <div className="detalle-contenido">
          {anuncio.contenido}
        </div>
      </div>

      <div className="div-link-category">
        <Link className="link-category" href="/">← Volver al inicio</Link>
      </div>
    </div>
  )
}