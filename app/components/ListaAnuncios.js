'use client'

import { useState } from "react"
import Link from "next/link"  

export default function ListaAnuncios({ todos, ultimos }) {
  const [busqueda, setBusqueda] = useState("")

  const anunciosMostrados = busqueda
    ? todos.filter((anuncio) => anuncio.titulo.toLowerCase().includes(busqueda.toLowerCase()))
    : ultimos

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Buscar por titulo de anuncio....."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="anuncios-homepage">
        {anunciosMostrados.map((anuncio) => (
          <div key={anuncio.slug} className={`anuncio-card anuncio-${anuncio.categoria}`}>
            
            <Link href={`/anuncios/${anuncio.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <h2>{anuncio.titulo}</h2>
            </Link>
            <div className="anuncio-meta">
              <span className="anuncio-categoria">{anuncio.categoria}</span>
              <span className="anuncio-fecha">{anuncio.fecha}</span>
            </div>
            <p>{anuncio.resumen}</p>
          </div>
        ))}
      </div>
    </div>
  )
}