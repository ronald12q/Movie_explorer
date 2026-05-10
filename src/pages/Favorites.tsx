
import { MovieCard } from "../components/MovieCard"
import { Footer } from "../components/Footer"
import { useFavoriteStore } from "../stores/useFavoritesStore"



export const Favorites = () => {

    const {deleteFavorites, favoritos} = useFavoriteStore();
  
    


    return(
        <div className="min-h-screen">
            <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
                
                
                <div className="flex flex-col gap-6 rounded-[2rem] border border-[#ebdbb2]/10 bg-[#282828]/60 p-6 shadow-2xl shadow-[#1d2021]/30 backdrop-blur-xl sm:p-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#fabd2f]/20 bg-[#fabd2f]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#fabd2f]">
                            Personal collection
                        </div>
                        <h1 className="text-4xl font-black tracking-[-0.04em] text-[#fbf1c7] sm:text-6xl">
                            My Favorites
                        </h1>
                        <p className="max-w-2xl text-sm leading-7 text-[#a89984] sm:text-base">Your saved list for quickly returning to the movies and series you care about most.</p>
                    </div>
                    <div className="rounded-2xl border border-[#ebdbb2]/10 bg-[#3c3836]/60 px-5 py-4">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#fabd2f]">
                            {favoritos.length} saved {favoritos.length === 1 ? 'title' : 'titles'}
                        </p>
                    </div>
                </div>

                
                {favoritos.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {favoritos.map((pelicula: any) => (
                            <MovieCard key={pelicula.show.id} peliculas={pelicula} deleteFavoritesFun={() => deleteFavorites(pelicula.show.id)} />
                        ))}
                    </div>
                ) : (
                    <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#ebdbb2]/15 bg-[#282828]/45 px-8 py-24 text-center backdrop-blur-xl">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ebdbb2]/10 bg-[#3c3836]/60 text-2xl text-[#fabd2f]">★</div>
                        <p className="text-2xl font-black text-[#fbf1c7]">No favorites yet</p>
                        <p className="mt-3 text-sm leading-6 text-[#a89984]">Add movies to your favorites list from the search page.</p>
                        <div className="mt-8 rounded-2xl border border-[#fabd2f]/25 bg-[#fabd2f] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#1d2021] shadow-xl shadow-[#1d2021]/30">
                            Start exploring
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}
