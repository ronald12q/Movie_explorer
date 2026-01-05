import { useNavigate } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";
import { FaHome, FaRedo } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

export const Errorfile = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="max-w-2xl w-full">
                
                {/* Error Card */}
                <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-8 shadow-2xl border border-neutral-800 hover:border-purple-500/50 transition-all duration-500">
                    
                    {/* Animated Error Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-40 animate-pulse"></div>
                            <BiSolidError className="text-9xl text-purple-500 relative z-10 animate-bounce" />
                        </div>
                    </div>

                    {/* Error Code */}
                    <div className="text-center mb-6">
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent mb-4">
                            404
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-amber-50 text-xl mb-2">
                            <MdMovie className="text-purple-400" />
                            <span>Página No Encontrada</span>
                            <MdMovie className="text-purple-400" />
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="bg-neutral-800/50 rounded-xl p-6 mb-8 border border-purple-900/30">
                        <p className="text-center text-amber-50/80 text-sm leading-relaxed">
                            ¡Oops! Parece que esta película no está en cartelera. 
                            La página que buscas no existe o ha sido movida.
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="flex justify-center gap-2 mb-8">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-150"></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleGoHome}
                            className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                        >
                            <FaHome className="text-xl" />
                            <span>Volver al Inicio</span>
                        </button>

                        <button
                            onClick={handleReload}
                            className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition-all duration-300 shadow-lg hover:shadow-neutral-700/50 transform hover:-translate-y-1 border border-neutral-700"
                        >
                            <FaRedo className="text-xl" />
                            <span>Reintentar</span>
                        </button>
                    </div>

                    {/* Footer Message */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-amber-50/40">
                            Si el problema persiste, contacta al administrador
                        </p>
                    </div>
                </div>

               
                <div className="mt-8 flex justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-purple-600/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                        <MdMovie className="text-2xl text-purple-400" />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center backdrop-blur-sm">
                        <MdMovie className="text-2xl text-indigo-400" />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-pink-600/10 border border-pink-500/30 flex items-center justify-center backdrop-blur-sm">
                        <MdMovie className="text-2xl text-pink-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}