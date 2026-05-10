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
    <div onClick={closeOut} className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d2021]/88 px-4 py-8 backdrop-blur-xl sm:px-6">
      <div onClick={(e) => e.stopPropagation()} className="glass-panel relative mx-auto flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-[2rem] text-[#ebdbb2] sm:max-w-xl">
        
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#ebdbb2]/15 bg-[#1d2021]/75 text-sm font-bold text-[#fbf1c7] shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-[#fabd2f]/50 hover:bg-[#fabd2f]/15 hover:text-[#fabd2f]"
        >
          ✕
        </button>

        <div className="overflow-y-auto">
          {children}
        </div>
        
      </div>
      
    </div>
    )

}
