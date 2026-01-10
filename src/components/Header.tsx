interface HeaderProps {
    Titulo: string,
    Nombre: string
}



export const Header = ({Titulo, Nombre}:HeaderProps) => {




    return (
        <header className="w-full h-20 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 border-b border-white/10 flex items-center px-8 shadow-2xl backdrop-blur-sm">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
      <span className="text-2xl">🎬</span>
    </div>
    <h1 className="text-2xl font-bold text-white tracking-tight text-shadow">
      {Titulo}
    </h1>
  </div>

  <div className="ml-auto"></div>

  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
      <span className="text-sm">👤</span>
    </div>
    <span className="text-sm font-semibold text-white">
      {Nombre}
    </span>
  </div>
</header>
    );
}