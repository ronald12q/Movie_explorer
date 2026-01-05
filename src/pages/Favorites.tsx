
import { MovieCard } from "../components/MovieCard"

interface peliculaProps {
  
  show: {
    id:number,
  name: string,
  status: string,
  summary: string,
  premiered: string,
  image?: {medium: string};
  }
  
}

export const Favorites = ({favoritos, deleteFavorite}: any) => {

  
    


    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
                
                
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                        Mis Favoritas
                    </h1>
                    <div className="flex items-center gap-3">
                        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                        <p className="text-gray-400 text-sm">
                            {favoritos.length} {favoritos.length === 1 ? 'película' : 'películas'} guardadas
                        </p>
                    </div>
                </div>

                
                {favoritos.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-500">
                        {favoritos.map((pelicula: any) => (
                            <MovieCard key={pelicula.show.id} peliculas={pelicula} deleteFavorites={() => deleteFavorite(pelicula.show.id)} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 space-y-4">
                        <div className="text-8xl opacity-20">💜</div>
                        <p className="text-gray-400 text-xl font-medium">No tienes favoritas aún</p>
                        <p className="text-gray-500 text-sm">Agrega películas a tu lista de favoritas</p>
                    </div>
                )}
            </div>
        </div>
    )
}