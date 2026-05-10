import {  useState } from 'react'
import { Header } from '../components/Header'
import { Modal } from '../components/Modal';
import { Searchform } from '../components/Searchform';
import { MovieCard } from '../components/MovieCard';
import { Footer } from '../components/Footer';
import { useMovie } from '../Hooks/Usemovie';




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



export const Home = () => {
  const[open, setOpen] = useState<boolean>(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState<peliculas | null>(null);
  const {movies ,loading, error, apiRequest} = useMovie();
  
  


  const fondo = movies.length > 0 ? 'h-auto' : 'h-screen';
  if(error) return <p>{error}</p> 
  
  

  return(

    
    <div className={`relative min-h-screen w-full ${fondo}`}>
 
  <Header Titulo="Movieapp" Nombre="Username" />

 
  <main className="mx-auto max-w-7xl space-y-12 px-4 pb-10 pt-14 sm:px-6 lg:px-8">
    
    <div className="mx-auto max-w-4xl space-y-7 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#fabd2f]/20 bg-[#fabd2f]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#fabd2f] shadow-lg shadow-[#1d2021]/20">
        <span className="h-2 w-2 rounded-full bg-[#b8bb26]"></span>
        Explore TVMaze
      </div>
      <div className="space-y-5">
        <h1 className="text-4xl font-black tracking-[-0.05em] text-[#fbf1c7] sm:text-6xl lg:text-7xl">
          Find your next favorite story
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-8 text-[#a89984] sm:text-lg">Search movies and series, review their details, and save your favorites in a cleaner, faster, more professional experience.</p>
      </div>
    </div>

    <div className="flex justify-center">
      <Searchform
      onSearch={apiRequest}
      />
    </div>
    
    <section className="mt-8 text-[#fbf1c7]">
      {loading ? (
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#ebdbb2]/10 bg-[#282828]/60 p-8 text-center shadow-2xl shadow-[#1d2021]/30 backdrop-blur-xl">
  <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-2 border-[#504945] border-t-[#fabd2f]"></div>
  <div className="space-y-3">
    <div className="mx-auto h-4 w-3/4 animate-pulse rounded-full bg-[#ebdbb2]/10"></div>
    <div className="mx-auto h-4 w-1/2 animate-pulse rounded-full bg-[#ebdbb2]/10"></div>
  </div>
  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#fabd2f]">Searching titles...</div>
</div>

      ) : movies.length > 0 ? (
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {movies.map((pelicula)=> <MovieCard peliculas={pelicula} onClick={() => {setOpen(true); setPeliculaSeleccionada(pelicula); }  } showLike={() => true}></MovieCard> )}
  
</div>

      ) : (
        <div className="mx-auto max-w-xl rounded-[2rem] border border-dashed border-[#ebdbb2]/15 bg-[#282828]/45 px-8 py-16 text-center backdrop-blur-xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ebdbb2]/10 bg-[#3c3836]/60 text-2xl text-[#fabd2f]">⌕</div>
          <p className="text-xl font-bold text-[#fbf1c7]">
            Search to get started
          </p>
          <p className="mt-3 text-sm leading-6 text-[#a89984]">Type the name of a movie or series and the results will appear here.</p>
        </div>
      )}
    </section>

    
<Modal isOpen={open} closeOut={() => setOpen(false)} onClose={() => setOpen(false)}>
  <div className="relative flex-shrink-0 overflow-hidden">
    <img
      src={peliculaSeleccionada?.show.image?.medium}
      alt={peliculaSeleccionada?.show.name}
      className="h-72 w-full object-cover sm:h-80"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1d2021] via-[#1d2021]/20 to-transparent"></div>

    <span className="absolute left-4 top-4 rounded-full border border-[#ebdbb2]/15 bg-[#1d2021]/75 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#fabd2f] shadow-lg backdrop-blur-sm">
      {peliculaSeleccionada?.show.status}
    </span>
  </div>

  <div className="space-y-5 p-5 sm:p-7">
    <h2 className="pr-8 text-3xl font-black tracking-tight text-[#fbf1c7] sm:text-4xl">
      {peliculaSeleccionada?.show.name}
    </h2>

    <div className="flex w-fit items-center gap-2 rounded-full border border-[#ebdbb2]/10 bg-[#3c3836]/60 px-4 py-2 text-sm text-[#d5c4a1]">
      <span className="text-[#fabd2f]">Premiere</span>
      <span>Premiered: {peliculaSeleccionada?.show.premiered}</span>
    </div>

    <div className="space-y-2">
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#fabd2f]">Description</h3>
      <div
        className="rounded-2xl border border-[#ebdbb2]/10 bg-[#1d2021]/45 p-4 text-sm leading-7 text-[#d5c4a1] [&_p]:m-0"
        dangerouslySetInnerHTML={{
          __html: peliculaSeleccionada?.show.summary ?? ""
        }}
      />
    </div>

    <div className="flex justify-end gap-3 pb-2 pt-3">
      <button
        onClick={() => setOpen(false)}
        className="rounded-2xl bg-[#fabd2f] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#1d2021] shadow-lg shadow-[#1d2021]/30 transition-all duration-200 hover:bg-[#fe8019]"
      >
        Close
      </button>
    </div>
  </div>
</Modal>


  </main>

  <Footer />
</div>



  )

 
  

  
}
