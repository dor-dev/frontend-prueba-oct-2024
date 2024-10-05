import { Link } from "react-router-dom";

function PodcastCard() {
  return (
    <div className="flex-none shadow-md p-4 basis-52 sticky top-6">
      <div className="flex">
        <Link to={"/podcast/10"} className="mx-auto">
          <img 
            height={100}
            width={100}
            className="rounded" 
            src="https://picsum.photos/100" 
            alt="Placeholder from lorem picsum" />
        </Link>
      </div>
      <div className="border-b-2 border-gray-100 my-3 mt-4"></div>
      <Link to={"/podcast/10"}>
        <p className="font-bold">Title placeholder</p>
      </Link>
      <Link to={"/podcast/10"}>
        <small className="italic ">by Author Placeholder</small>
      </Link>
      <div className="border-b-2 border-gray-100 my-3"></div>
      <p className="font-bold text-sm">Description:</p>
      <p className="itallic text-sm">
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
      </p>
    </div>
  );
}

export default PodcastCard;