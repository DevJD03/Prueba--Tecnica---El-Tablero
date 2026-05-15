import { getAnuncios, getUltimosAnuncios } from "@/lib/anuncios"
import Link from "next/link";
import ListaAnuncios from "./components/ListaAnuncios"

export default function Home() {
  
  const todosLosAnuncios = getAnuncios();
  const ultimosAnuncios = getUltimosAnuncios(6);

 

  return (
    <div className="container-main">
      <div className="container-titulo">
        <h1>EL TABLERO</h1>
      </div>
      <div>
        <p>
          "El Tablero es el lugar de anuncios del municipio. Aquí los vecinos publican empleos, ofrecen servicios y venden de todo. Sin complicaciones; solo encuentra lo que necesitas o haz que te encuentren a ti."
        </p>

        <div></div>


        <ListaAnuncios todos={todosLosAnuncios} ultimos={ultimosAnuncios} />

        <div className="div-link-category">
          <Link className="link-category" href="/categorypage">
            Ver por categoria
          </Link>
        </div>
      </div>
    </div>
  );
}
