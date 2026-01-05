import {  useState } from 'react'
import { Header } from '../components/Header'
import { Modal } from '../components/Modal';
import { Searchform } from '../components/Searchform';
import { MovieCard } from '../components/MovieCard';



interface peliculas {
  
  show: {
    id:number,
  name: string,
  status: string,
  summary: string,
  premiered: string,
  image?: {medium: string};
  }
  
}



export const Home = ({onFavorites}: any) => {
  const[open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [nombre, SetNombre] = useState<string>('');
  const [peliculas, setPeliculas] = useState<peliculas[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState<peliculas | null>(null);
  
  

  



  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetNombre(e.target.value);
    

  }


  const onKeyDown = (e: any) => {

    if(e.key === 'enter'){
      getData();
    }
    
  };


 



 

  const getData = async () => {
    setLoading(true);
    setPeliculas([]);

    try {

      const request = await fetch(`https://api.tvmaze.com/search/shows?q=${nombre}`)
    
    if(!request.ok) throw new Error('La peticion a fallado');
    const data = await request.json();
    setPeliculas(data);
      
    } catch (error) {
      setError('Ocurrio un error')
      console.error(error);
      
    }finally{
      setLoading(false)
      SetNombre('');

    }
    
  }

  const fondo = peliculas.length > 0 ? 'h-auto w-auto' : 'h-screen w-screen';
  if(error) return <p>{error}</p> 
  
  return(

    

    
    <div
  className={`relative min-h-screen ${fondo}`}
>
 
  <Header Titulo="Movieapp" Nombre="Ronald Martinez" />

 
  <main className="max-w-7xl mx-auto px-4 pt-20 pb-10 space-y-10">
    
    <div className="text-center space-y-4">
      <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
        Buscador de Películas
      </h1>
      <p className="text-gray-400 text-sm">Descubre tus series y películas favoritas</p>
    </div>

    <div className="flex justify-center">
      <Searchform
        onSearch={getData}
        onChange={handleOnChange}
        value={nombre}
        onKeyDown={() => onKeyDown}
      />
    </div>
   
    <section className="text-amber-50 mt-8">
      {loading ? (
        <div className="space-y-4 max-w-md mx-auto">
  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg w-3/4 mx-auto animate-pulse"></div>
  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg w-1/2 mx-auto animate-pulse"></div>
  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg w-2/3 mx-auto animate-pulse"></div>
  <div className="text-center text-purple-400 mt-6">Buscando películas...</div>
</div>

      ) : peliculas.length > 0 ? (
       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {peliculas.map((pelicula)=> <MovieCard peliculas={pelicula} onClick={() => {setOpen(true); setPeliculaSeleccionada(pelicula)}} addFavorites={() => onFavorites(pelicula)}></MovieCard> )}
  
</div>

      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎬</div>
          <p className="text-gray-400 text-lg">
            No hay resultados
          </p>
          <p className="text-gray-500 text-sm mt-2">Intenta buscar otra película</p>
        </div>
      )}
    </section>

    
<Modal isOpen={open} closeOut={() => setOpen(false)} onClose={() => setOpen(false)}>
  <div className="relative overflow-hidden flex-shrink-0">
    <img
      src={peliculaSeleccionada?.show.image?.medium}
      alt={peliculaSeleccionada?.show.name}
      className="w-full h-64 sm:h-72 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>

    <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-purple-600 rounded-full shadow-lg backdrop-blur-sm">
      {peliculaSeleccionada?.show.status}
    </span>
  </div>

  <div className="p-5 sm:p-6 space-y-4">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 pr-8">
      {peliculaSeleccionada?.show.name}
    </h2>

    <div className="flex items-center gap-2 text-sm text-gray-400 bg-neutral-800/50 px-3 py-2 rounded-lg w-fit">
      <span className="text-base">📅</span>
      <span>Estreno: {peliculaSeleccionada?.show.premiered}</span>
    </div>

    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-purple-400">Descripción</h3>
      <div
        className="text-gray-300 text-sm leading-relaxed bg-neutral-800/30 p-4 rounded-lg border border-neutral-700/50"
        dangerouslySetInnerHTML={{
          __html: peliculaSeleccionada?.show.summary ?? ""
        }}
      />
    </div>

    <div className="pt-3 pb-2 flex justify-end gap-3">
      <button
        onClick={() => setOpen(false)}
        className="px-6 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
      >
        Cerrar
      </button>
    </div>
  </div>
</Modal>


  </main>

</div>



  )

 
  

  
}

