import { FaHeart, FaRegHeart } from "react-icons/fa"
import { FaTrash } from "react-icons/fa6"
import { useFavoriteStore } from "../stores/useFavoritesStore"



interface MovieCardProps {
    peliculas: any,
    onClick?: () => void,
    deleteFavoritesFun?: () => void
    showLike?: () => void
    
}



    export const MovieCard = ({peliculas, onClick, deleteFavoritesFun,showLike }: MovieCardProps) =>
      {

       const {favoritos, addFavorites, deleteFavorites} = useFavoriteStore();

       const existe = favoritos.some((p) => p.show.id === peliculas.show.id);
       const handleLike = () => { 
        existe ? deleteFavorites(peliculas.show.id) : addFavorites(peliculas);



       }


      
        return (

            <div
      key={peliculas.show.id}
      className="card-hover group overflow-hidden rounded-[1.75rem] border border-[#ebdbb2]/10 bg-[#282828]/78 shadow-2xl shadow-[#1d2021]/35 backdrop-blur-xl transition-all duration-300 hover:border-[#fabd2f]/35 hover:bg-[#3c3836]/85"
    >
    
      <div className="relative overflow-hidden">
        <img
          src={peliculas.show.image?.medium || "/no-image.png"}
          alt={peliculas.show.name}
          className="h-80 w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2021] via-[#1d2021]/45 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-65"></div>

        
        <span className="absolute left-4 top-4 rounded-full border border-[#ebdbb2]/15 bg-[#1d2021]/75 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#fabd2f] shadow-xl backdrop-blur-md">
          {peliculas.show.status}
        </span>

       
        {deleteFavoritesFun && (
          <button 
            onClick={deleteFavoritesFun}
            className="absolute right-4 top-4 z-10 rounded-full border border-[#fb4934]/35 bg-[#cc241d]/90 p-2.5 text-[#fbf1c7] opacity-100 shadow-2xl shadow-[#1d2021]/30 transition-all duration-300 hover:scale-105 hover:bg-[#fb4934] sm:opacity-0 sm:group-hover:opacity-100"
            title="Eliminar de favoritos"
          >
            <FaTrash className="text-sm" />
          </button>
        )}

        
        {showLike && (
          <button 
            onClick={handleLike}
            className="absolute bottom-4 right-4 z-10 rounded-full border border-[#ebdbb2]/15 bg-[#1d2021]/80 p-3 shadow-2xl shadow-[#1d2021]/35 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#fb4934]/60 hover:bg-[#282828]"
            title={existe ? "Remove from favorites" : "Add to favorites"}
          >
            {existe ? (
              <FaHeart className="text-xl text-[#fb4934] drop-shadow-[0_0_8px_rgba(251,73,52,0.45)]" />
            ) : (
              <FaRegHeart className="text-xl text-[#ebdbb2] transition-colors group-hover:text-[#fb4934]" />
            )}
          </button>
        )}
      </div>

      
      <div className="flex flex-col gap-5 p-5">

       
        <h2 className="line-clamp-2 min-h-[56px] text-center text-lg font-extrabold leading-tight text-[#fbf1c7] transition-colors duration-300 group-hover:text-[#fabd2f]">
          {peliculas.show.name}
        </h2>

       
        {onClick && <button
        onClick={onClick}
          className="mt-auto w-full cursor-pointer rounded-2xl border border-[#fabd2f]/30 bg-[#fabd2f] px-5 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#1d2021] shadow-xl shadow-[#1d2021]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fe8019]"
        >
          View details
        </button>}

      </div>
    </div>
        )
    }
