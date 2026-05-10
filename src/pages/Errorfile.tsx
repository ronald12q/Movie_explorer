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
        <div className="cinema-shell flex min-h-screen items-center justify-center p-6">
            <div className="w-full max-w-2xl">
                
                {/* Error Card */}
                <div className="glass-panel rounded-[2rem] p-8 text-center transition-all duration-500 sm:p-10">
                    
                    {/* Animated Error Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 animate-pulse rounded-full bg-[#fabd2f]/20 blur-3xl"></div>
                            <BiSolidError className="relative z-10 text-8xl text-[#fabd2f]" />
                        </div>
                    </div>

                    {/* Error Code */}
                    <div className="mb-6 text-center">
                        <h1 className="mb-4 text-7xl font-black tracking-[-0.06em] text-[#fbf1c7]">
                            404
                        </h1>
                        <div className="mb-2 flex items-center justify-center gap-2 text-xl font-bold text-[#ebdbb2]">
                            <MdMovie className="text-[#fabd2f]" />
                            <span>Page Not Found</span>
                            <MdMovie className="text-[#fabd2f]" />
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-8 rounded-2xl border border-[#ebdbb2]/10 bg-[#3c3836]/60 p-6">
                        <p className="text-center text-sm leading-7 text-[#d5c4a1]">
                            Oops! It looks like this movie is not playing here.
                            The page you are looking for does not exist or has been moved.
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="mb-8 flex justify-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#fabd2f]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#b8bb26]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#83a598]"></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            onClick={handleGoHome}
                            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#fabd2f] px-6 py-4 font-black uppercase tracking-[0.14em] text-[#1d2021] shadow-lg shadow-[#1d2021]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fe8019]"
                        >
                            <FaHome className="text-xl" />
                            <span>Back to Home</span>
                        </button>

                        <button
                            onClick={handleReload}
                            className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-[#ebdbb2]/10 bg-[#3c3836]/60 px-6 py-4 font-bold text-[#fbf1c7] shadow-lg shadow-[#1d2021]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#504945]/70"
                        >
                            <FaRedo className="text-xl" />
                            <span>Retry</span>
                        </button>
                    </div>

                    {/* Footer Message */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-[#928374]">
                            If the problem persists, contact the administrator
                        </p>
                    </div>
                </div>

               
                <div className="mt-8 flex justify-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ebdbb2]/10 bg-[#3c3836]/60 backdrop-blur-sm">
                        <MdMovie className="text-2xl text-[#fabd2f]" />
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ebdbb2]/10 bg-[#3c3836]/60 backdrop-blur-sm">
                        <MdMovie className="text-2xl text-[#b8bb26]" />
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ebdbb2]/10 bg-[#3c3836]/60 backdrop-blur-sm">
                        <MdMovie className="text-2xl text-[#83a598]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
