import type { ReactNode } from "react";


interface Modalprops {
    isOpen: boolean,
    onClose:()  => void,
    children: ReactNode,
    closeOut: () => void
}


export const Modal = ( {isOpen, onClose, children, closeOut}: Modalprops) => {


    if(isOpen === false) return null;

    return (
    <div onClick={closeOut} className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center px-4 sm:px-6 py-8 z-50 animate-in fade-in duration-300">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md sm:max-w-lg mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl shadow-2xl border border-white/10 max-h-[90vh] flex flex-col backdrop-blur-xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110 hover:rotate-90 z-20 shadow-xl font-bold text-lg"
        >
          ✕
        </button>

        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-slate-800">
          {children}
        </div>
        
      </div>
      
    </div>
    )

}