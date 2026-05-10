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

<div className="flex w-full items-center justify-center">
  <div className="relative w-full max-w-2xl">
    
    <div className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[#fabd2f]/80">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
    <input
      value={termino}
      onChange={(e) => setTermino(e.target.value)}
      type="text"
      placeholder="Search movies or series..."
      className="w-full rounded-2xl border border-[#ebdbb2]/12 bg-[#282828]/80 py-5 pl-14 pr-6 text-base font-medium text-[#fbf1c7] shadow-2xl shadow-[#1d2021]/30 backdrop-blur-xl transition-all duration-300 placeholder:text-[#928374] hover:border-[#fabd2f]/35 focus:border-[#fabd2f]/65 focus:outline-none focus:ring-4 focus:ring-[#fabd2f]/10"
    />
    
  </div>
</div>
    )
}
