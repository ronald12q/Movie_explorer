import { useState } from "react";
import { Link } from "react-router-dom";






export const Sidebar = () => {

    const [open, setOpen] = useState<boolean>(false);


    


    return (
        <>
            
            {open && (
                <div 
                    className="fixed inset-0 z-40 bg-[#1d2021]/75 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
            
            {/* Sidebar */}
            <div className={`${open ? 'fixed inset-y-0 left-0 z-50 w-72 shadow-2xl lg:relative' : 'w-20'} flex flex-col gap-8 border-r border-[#ebdbb2]/10 bg-[#1d2021]/90 p-5 text-[#ebdbb2] backdrop-blur-2xl transition-all duration-300 ease-in-out`}>
                <div className={`flex ${open ? 'flex-row items-center justify-between' : 'flex-col items-center gap-4'} mb-2`}>
                <button 
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-[#ebdbb2]/10 bg-[#3c3836]/70 text-[#ebdbb2] shadow-lg shadow-[#1d2021]/40 transition-all duration-200 hover:border-[#fabd2f]/40 hover:bg-[#fabd2f]/10 hover:text-[#fabd2f] ${!open && 'order-first'}`}
                    onClick={() => setOpen(prev => !prev)}
                    title={open ? 'Close menu' : 'Open menu'}
                >
                    <span className="text-lg font-semibold">{open ? '‹' : '›'}</span>
                </button>
                
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#fabd2f]/30 bg-[#fabd2f]/10 shadow-xl shadow-[#1d2021]/40 transition-transform duration-300 hover:scale-105">
                        <span className="text-xl">M</span>
                    </div>
                    {open && <h1 className="whitespace-nowrap text-xl font-black tracking-tight text-[#fbf1c7]">Movie Explorer</h1>}
                </div>
            </div>

            <nav className="flex flex-col gap-2">
                <Link to='/' className={`${open ? 'px-4' : 'px-0 justify-center'} group flex items-center gap-4 rounded-2xl py-3.5 text-sm font-semibold text-[#d5c4a1] transition-all duration-300 hover:bg-[#3c3836]/75 hover:text-[#fbf1c7]`}>
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#3c3836]/60 text-base transition-colors group-hover:bg-[#fabd2f]/15 group-hover:text-[#fabd2f]">⌂</span>
                    {open && <span className="whitespace-nowrap">Home</span>}
                </Link>
                <Link to='/Favorites' className={`${open ? 'px-4' : 'px-0 justify-center'} group flex items-center gap-4 rounded-2xl py-3.5 text-sm font-semibold text-[#d5c4a1] transition-all duration-300 hover:bg-[#3c3836]/75 hover:text-[#fbf1c7]`}>
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#3c3836]/60 text-base transition-colors group-hover:bg-[#fabd2f]/15 group-hover:text-[#fabd2f]">★</span>
                    {open && <span className="whitespace-nowrap">Favorites</span>}
                </Link>
            </nav>
        </div>
        </>
    )
}
