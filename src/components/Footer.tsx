

export const Footer = () => {



    return (
        <footer className="w-full text-white py-10 mt-20 border-t border-white/5 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent backdrop-blur-xl">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-sm text-gray-300 flex items-center gap-2 font-medium">
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span className="text-purple-400 mx-1">•</span>
      <span>Todos los derechos reservados.</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
      <span>Hecho con</span>
      <span className="text-red-500 animate-pulse text-base">❤️</span>
      <span>y</span>
      <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-bold">React</span>
    </div>
  </div>
</footer>
    )

}