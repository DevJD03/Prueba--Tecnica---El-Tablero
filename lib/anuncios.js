import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const anunciosDir = path.join(process.cwd(), 'content/anuncios')

export function getAnuncios() {
  
    console.log("Ruta:", anunciosDir)

    const archivos = fs.readdirSync(anunciosDir).filter(f => f.endsWith('.md'))

    console.log("Archivos encontrados:", archivos) 
    const anuncios = archivos.map((archivo) => {
    const rutaCompleta = path.join(anunciosDir, archivo)
    const contenidoRaw = fs.readFileSync(rutaCompleta, 'utf-8')
    const { data } = matter(contenidoRaw) 

    return {
      titulo: data.titulo,
      slug: data.slug,
      categoria: data.categoria,
      fecha: data.fecha,       
      resumen: data.resumen,
    }
  })

  
  return anuncios.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
}

export function getUltimosAnuncios(n = 6) {
  return getAnuncios().slice(0, n)
}

export function getAnunciosPorCategoria(categoria) {
  return getAnuncios().filter(
    (anuncio) => anuncio.categoria.toLowerCase() === categoria.toLowerCase()
  )
}

export function getAnuncioBySlug(slug) {
  const archivos = fs.readdirSync(anunciosDir).filter(f => f.endsWith('.md'))

  for (const archivo of archivos) {
    const rutaCompleta = path.join(anunciosDir, archivo)
    const contenidoRaw = fs.readFileSync(rutaCompleta, 'utf-8')
    const { data, content } = matter(contenidoRaw)

    if (data.slug === slug) {
      return {
        titulo: data.titulo,
        slug: data.slug,
        categoria: data.categoria,
        fecha: data.fecha,
        autor: data.autor,
        resumen: data.resumen,
        contenido: content, 
      }
    }
  }

  return null
}