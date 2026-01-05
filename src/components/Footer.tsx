

export const Footer = () => {



    return (
        <footer className="w-full text-gray-300 py-8 mt-16 border-t border-gray-800 bg-gradient-to-t from-gray-900 to-transparent">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-xs text-gray-500 flex items-center gap-2">
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span className="text-purple-400">•</span>
      <span>Todos los derechos reservados.</span>
    </div>
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span>Made with</span>
      <span className="text-red-500 animate-pulse">❤️</span>
    </div>
  </div>
</footer>
    )

}