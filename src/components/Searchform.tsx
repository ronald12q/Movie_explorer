import { useEffect, useState } from "react"

interface searchprops{
    onSearch: (nombre: string) => void,
    

}


export const Searchform = ({onSearch}:searchprops) => {


  

 const [termino, setTermino] = useState<string>('');

 useEffect (() => {
  const timer = setTimeout (() => {
    console.log(`buscando la api: ${termino}`)
    onSearch(termino)

  },500);

  return () => {clearTimeout(timer)};

 },[termino])

    return (

<div className="flex items-center justify-center mt-25">
  <div className="relative w-full max-w-xl">
    
    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none z-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
    <input
      value={termino}
      onChange={(e) => setTermino(e.target.value)}
      type="text"
      placeholder="Busca películas o series..."
      className="w-full pl-14 pr-6 py-4 text-white bg-slate-900/90 backdrop-blur-xl border-2 border-white/10 rounded-2xl 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 placeholder-gray-400 
                 transition-all duration-300 shadow-2xl text-base font-medium hover:border-purple-500/30"
    />
    
  </div>
</div>
    )
}