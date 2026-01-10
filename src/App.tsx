import {  Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {Home} from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import {  useEffect, useState } from "react";
import { Errorfile } from "./pages/Errorfile";






function App(){


  return (
    <Routes>
      <Route path="/"   element={<Layout/>}>
      <Route index element={<Home  />}/>
      <Route path="Favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Errorfile/>} />
    </Routes>
  )
}

export default App