interface HeaderProps {
    Titulo: string,
    Nombre: string
}



export const Header = ({Titulo, Nombre}:HeaderProps) => {




    return (
        <header className="w-full h-16 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 border-b border-purple-700 flex items-center px-6 shadow-lg">
  <h1 className="text-xl font-bold text-amber-50 tracking-wide">
    {Titulo}
  </h1>

  <div className="ml-auto"></div>

  <div className="flex items-center gap-2 bg-purple-700/50 px-4 py-2 rounded-full border border-purple-600">
    <span className="text-lg">👤</span>
    <span className="text-sm font-medium text-amber-50">
      {Nombre}
    </span>
  </div>
</header>
    );
}