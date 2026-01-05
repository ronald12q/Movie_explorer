import { useState } from "react";
import { Link } from "react-router-dom";






export const Sidebar = () => {

    const [open, setOpen] = useState<boolean>(true);


    


    return (
        <>
            
            {open && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out"
                    onClick={() => setOpen(false)}
                />
            )}
            
            {/* Sidebar */}
            <div className={`${open ? 'w-64 shadow-2xl z-50' : 'w-20'} bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-amber-50 p-6 flex flex-col gap-8 border-r border-gray-800 transition-all duration-300 ease-in-out relative`}>
                <div className={`flex ${open ? 'flex-row items-center justify-between' : 'flex-col items-center gap-4'} mb-4`}>
                <button 
                    className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors duration-200 flex-shrink-0 ${!open && 'order-first'}`}
                    onClick={() => setOpen(prev => !prev)}
                    title={open ? 'Cerrar menú' : 'Abrir menú'}
                >
                    <span className="text-amber-50">{open ? '‹' : '›'}</span>
                </button>
                
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-2xl">🎬</span>
                    </div>
                    {open && <h1 className="text-2xl font-bold text-amber-50 tracking-tight whitespace-nowrap">Movie App</h1>}
                </div>
            </div>

            <nav className="flex flex-col gap-3">
                <Link to='/' className={`${open ? 'px-4' : 'px-0 justify-center'} py-3 text-amber-50 hover:text-purple-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium flex items-center gap-3 group`}>
                    <span className="text-xl flex-shrink-0">🏠</span>
                    {open && <span className="whitespace-nowrap">Home</span>}
                </Link>
                <Link to='/Favorites' className={`${open ? 'px-4' : 'px-0 justify-center'} py-3 text-amber-50 hover:text-purple-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium flex items-center gap-3 group`}>
                    <span className="text-xl flex-shrink-0">⭐</span>
                    {open && <span className="whitespace-nowrap">Favorites</span>}
                </Link>
            </nav>
        </div>
        </>
    )
}