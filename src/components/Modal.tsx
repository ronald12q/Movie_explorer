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
    <div onClick={closeOut} className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center px-4 sm:px-6 py-8 z-50">
      <div className="relative w-full max-w-md sm:max-w-lg mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 text-white rounded-2xl shadow-2xl border border-purple-500/30 max-h-[90vh] flex flex-col">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-110 z-20 shadow-lg"
        >
          ✕
        </button>

        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-neutral-800">
          {children}
        </div>
        
      </div>
      
    </div>
    )

}