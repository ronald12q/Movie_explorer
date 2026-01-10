import { useState } from "react";
import { Link } from "react-router-dom";






export const Sidebar = () => {

    const [open, setOpen] = useState<boolean>(false);


    


    return (
        <>
            
            {open && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out"
                    onClick={() => setOpen(false)}
                />
            )}
            
            {/* Sidebar */}
            <div className={`${open ? 'w-72 shadow-2xl z-50' : 'w-20'} bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-6 flex flex-col gap-8 border-r border-white/5 transition-all duration-300 ease-in-out relative backdrop-blur-xl`}>
                <div className={`flex ${open ? 'flex-row items-center justify-between' : 'flex-col items-center gap-4'} mb-4`}>
                <button 
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 transition-all duration-200 flex-shrink-0 ${!open && 'order-first'} shadow-lg hover:shadow-purple-500/50 hover:scale-105`}
                    onClick={() => setOpen(prev => !prev)}
                    title={open ? 'Cerrar menú' : 'Abrir menú'}
                >
                    <span className="text-white font-bold text-lg">{open ? '‹' : '›'}</span>
                </button>
                
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🎬</span>
                    </div>
                    {open && <h1 className="text-2xl font-bold text-white tracking-tight whitespace-nowrap bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Movie App</h1>}
                </div>
            </div>

            <nav className="flex flex-col gap-2">
                <Link to='/' className={`${open ? 'px-5' : 'px-0 justify-center'} py-3.5 text-white hover:text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 rounded-xl transition-all duration-300 font-semibold flex items-center gap-4 group hover:shadow-lg hover:scale-105`}>
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">🏠</span>
                    {open && <span className="whitespace-nowrap">Inicio</span>}
                </Link>
                <Link to='/Favorites' className={`${open ? 'px-5' : 'px-0 justify-center'} py-3.5 text-white hover:text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-fuchsia-600 rounded-xl transition-all duration-300 font-semibold flex items-center gap-4 group hover:shadow-lg hover:scale-105`}>
                    <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">⭐</span>
                    {open && <span className="whitespace-nowrap">Favoritos</span>}
                </Link>
            </nav>
        </div>
        </>
    )
}