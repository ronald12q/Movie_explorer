

export const Footer = () => {



    return (
        <footer className="mt-20 w-full border-t border-[#ebdbb2]/10 bg-[#1d2021]/35 py-8 text-[#ebdbb2] backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
    <div className="flex items-center gap-2 text-sm font-medium text-[#a89984]">
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span className="mx-1 text-[#fabd2f]">•</span>
      <span>All rights reserved.</span>
    </div>
    <div className="flex items-center gap-2 text-sm font-medium text-[#a89984]">
      <span>Built with</span>
      <span className="text-[#fabd2f]">React</span>
      <span>y</span>
      <span className="font-bold text-[#fbf1c7]">Tailwind</span>
    </div>
  </div>
</footer>
    )

}
