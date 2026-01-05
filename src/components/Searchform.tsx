
interface searchprops{
    onSearch: () => void,
    value: string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown: () => void; 

}


export const Searchform = ({onSearch, value, onChange, onKeyDown}:searchprops) => {


    return (

<div className="flex items-center justify-center mt-25">
  <input
    value={value}
    onChange={onChange}
    type="text"
    
    placeholder="Buscar una pelicula..."
    className="w-72 px-5 py-3 text-amber-50 bg-neutral-900 border-2 border-neutral-700 border-r-0 rounded-l-xl 
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 transition-all duration-200 shadow-lg"
  />

  <button
    onClick={onSearch}
    onKeyDown={onKeyDown}
    disabled={value.trim() === ''}
    tabIndex={0}
    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-r-xl border-2 border-purple-600 
               hover:from-purple-500 hover:to-indigo-500 hover:border-purple-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50"
  
  >

    
     <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-5 h-5"
      >
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  </button>
</div>


        
    )
}