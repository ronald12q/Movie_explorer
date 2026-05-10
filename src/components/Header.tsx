interface HeaderProps {
    Titulo: string,
    Nombre: string
}



export const Header = ({Titulo, Nombre}:HeaderProps) => {




    return (
        <header className="sticky top-0 z-30 flex h-20 w-full items-center border-b border-[#ebdbb2]/10 bg-[#1d2021]/70 px-4 shadow-2xl shadow-[#1d2021]/20 backdrop-blur-2xl sm:px-8">
  <div className="flex items-center gap-3">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#fabd2f]/30 bg-[#fabd2f]/10 shadow-lg shadow-[#1d2021]/40">
      <span className="text-sm font-black tracking-widest text-[#fabd2f]">ME</span>
    </div>
    <h1 className="text-xl font-black tracking-tight text-[#fbf1c7] sm:text-2xl">
      {Titulo}
    </h1>
  </div>

  <div className="ml-auto"></div>

  <div className="flex items-center gap-3 rounded-full border border-[#ebdbb2]/10 bg-[#3c3836]/70 px-3 py-2 shadow-lg shadow-[#1d2021]/20 transition-all duration-300 hover:bg-[#504945]/70 sm:px-5">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#282828] ring-1 ring-[#ebdbb2]/10">
      <span className="text-xs font-bold text-[#fabd2f]">U</span>
    </div>
    <span className="hidden text-sm font-semibold text-[#d5c4a1] sm:block">
      {Nombre}
    </span>
  </div>
</header>
    );
}
