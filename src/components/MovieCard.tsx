import { useState } from "react"
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
      className="group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/40 card-hover border border-white/5 hover:border-purple-400/50 backdrop-blur-sm"
    >
    
      <div className="relative overflow-hidden">
        <img
          src={peliculas.show.image?.medium || "/no-image.png"}
          alt={peliculas.show.name}
          className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>

        
        <span className="absolute top-4 left-4 px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-xl backdrop-blur-md uppercase tracking-wide">
          {peliculas.show.status}
        </span>

       
        {deleteFavoritesFun && (
          <button 
            onClick={deleteFavoritesFun}
            className="absolute top-4 right-4 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-2xl hover:shadow-red-500/60 opacity-0 group-hover:opacity-100 z-10"
            title="Eliminar de favoritos"
          >
            <FaTrash className="text-sm" />
          </button>
        )}

        
        {showLike && (
          <button 
            onClick={handleLike}
            className="absolute bottom-4 right-4 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-2xl border-2 border-slate-700/50 hover:border-red-400/80 z-10"
            title={existe ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {existe ? (
              <FaHeart className="text-xl text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            ) : (
              <FaRegHeart className="text-xl text-white group-hover:text-red-300 transition-colors" />
            )}
          </button>
        )}
      </div>

      
      <div className="p-6 flex flex-col gap-4">

       
        <h2 className="text-xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent line-clamp-2 min-h-[60px] group-hover:from-violet-300 group-hover:to-fuchsia-300 transition-all duration-300">
          {peliculas.show.name}
        </h2>

       
        {onClick && <button
        onClick={onClick}
          className="mt-auto w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-xl hover:shadow-purple-500/60 transform hover:scale-105 cursor-pointer uppercase text-sm tracking-wider"
        >
          Ver detalles
        </button>}

      </div>
    </div>
        )
    }
