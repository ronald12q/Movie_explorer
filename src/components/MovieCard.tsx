import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { FaTrash } from "react-icons/fa6"


interface MovieCardProps {
    peliculas: any,
    onClick?: () => void,
    addFavorites?: () => void,
    deleteFavorites?: () => void
}



    export const MovieCard = ({peliculas, onClick, addFavorites, deleteFavorites}: MovieCardProps) =>
      {

        const [toogle, setToogle] = useState<boolean>(false);
         const toogleFunction = () => {setToogle(prev => !prev)}


      
        return (

            <div
      key={peliculas.show.id}
      className="group bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-neutral-800 hover:border-purple-500/50"
    >
    
      <div className="relative overflow-hidden group">
        <img
          src={peliculas.show.image?.medium || "/no-image.png"}
          alt={peliculas.show.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>

        
        <span className="absolute top-3 left-3 px-3 py-1.5 text-xs font-semibold rounded-full bg-purple-600 text-white shadow-lg backdrop-blur-sm">
          {peliculas.show.status}
        </span>
      </div>

      
      <div className="p-5 flex flex-col gap-4 ">

       
        <h2 className="text-lg font-semibold text-center text-white line-clamp-2 min-h-[56px]">
          {peliculas.show.name}
        </h2>

       
        {onClick && <button

        onClick={onClick}
         
          className="mt-auto w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-0.5 cursor-pointer"
        >
          Ver detalles
        </button>}

        {deleteFavorites && <button className="
    opacity-0 group-hover:opacity-100 sticky top-2 left-2
    transition
     text-white p-2 rounded-lg cursor-pointer"  onClick={deleteFavorites}  >{<FaTrash/>}</button>}

        
        {addFavorites && <button className="cursor-pointer" onClick={() => {addFavorites(); toogleFunction();}}>{toogle ? <FaHeart/> : <FaRegHeart/>}</button>}

      </div>
    </div>
        )
    }
