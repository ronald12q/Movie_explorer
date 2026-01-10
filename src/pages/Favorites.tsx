
import { MovieCard } from "../components/MovieCard"
import { Footer } from "../components/Footer"
import { useFavoriteStore } from "../stores/useFavoritesStore"



export const Favorites = () => {

    const {deleteFavorites, favoritos} = useFavoriteStore();
  
    


    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
                
                
                <div className="space-y-4">
                    <div className="relative inline-block">
                        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400 text-shadow-lg">
                            Mis Favoritas ⭐
                        </h1>
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-fuchsia-600 rounded-lg blur-2xl opacity-20 -z-10"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 rounded-full shadow-lg"></div>
                        <p className="text-gray-300 text-base font-semibold">
                            {favoritos.length} {favoritos.length === 1 ? 'película' : 'películas'} guardadas
                        </p>
                    </div>
                </div>

                
                {favoritos.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-500">
                        {favoritos.map((pelicula: any) => (
                            <MovieCard key={pelicula.show.id} peliculas={pelicula} deleteFavoritesFun={() => deleteFavorites(pelicula.show.id)} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 space-y-6">
                        <div className="text-9xl opacity-30 animate-pulse">💜</div>
                        <p className="text-white text-2xl font-bold">No tienes favoritas aún</p>
                        <p className="text-gray-400 text-base">Agrega películas a tu lista de favoritas desde el buscador</p>
                        <div className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white rounded-xl font-semibold shadow-xl">
                            ¡Empieza a explorar! 🎬
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}