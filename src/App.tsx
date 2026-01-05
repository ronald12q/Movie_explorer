import { data, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {Home} from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import {  useEffect, useState } from "react";
import { Errorfile } from "./pages/Errorfile";



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


function App(){
const [favorites, setFavorites] = useState<peliculas[]>(() => {
   const data : any = localStorage.getItem('movies');

    return data ? JSON.parse(data) : [];
});


const handleFavorites = (pelicula : peliculas) => {
  setFavorites(prev => prev.some(f => f.show.id === pelicula.show.id) ? 
  prev.filter(f => f.show.id !== pelicula.show.id) : [...prev, pelicula]

)
}

useEffect(() => { localStorage.setItem('movies', JSON.stringify(favorites))}, [favorites])

const deleteFavorite = (id : number) => {
    setFavorites(prev => prev.filter(item => item.show.id !== id))
  

  }

  return (
    <Routes>
      <Route path="/"   element={<Layout/>}>
      <Route index element={<Home  onFavorites={handleFavorites} />}/>
      <Route path="Favorites" element={<Favorites favoritos={favorites} deleteFavorite={deleteFavorite} />} />
      </Route>
      <Route path="*" element={<Errorfile/>} />
    </Routes>
  )
}

export default App