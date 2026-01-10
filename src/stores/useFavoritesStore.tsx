import {create} from 'zustand';
import {persist} from 'zustand/middleware';
;




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

interface cineApp {
    favoritos : peliculas[],
    addFavorites: (pelicula: peliculas) => void,
    deleteFavorites:(id : number) => void
}





export const useFavoriteStore = create<cineApp>()(
persist(
    (set) => ({
      favoritos: [],
      addFavorites: (pelicula: peliculas) => 
      set((state) => ({favoritos: state.favoritos.some((p) => p.show.id === pelicula.show.id) ? state.favoritos: [...state.favoritos, pelicula],})),
    deleteFavorites: (id: number) => 
    set((state) =>  ({favoritos: state.favoritos.filter((p: any) =>p.show.id !== id)})),
  
  }),
    {name: 'mis-favoritos'}
)


);