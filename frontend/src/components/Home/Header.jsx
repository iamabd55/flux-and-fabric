import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-md">
      <div className="mx-auto max-w-360 px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a className="flex items-center gap-3 group" href="#">
            <div className="size-8 text-white drop-shadow-sm">
             {/* logo */}
            </div>
            <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">Flux & Fabric</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">Men</a>
            <a className="text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">Women</a>
            <a className="text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">Accessories</a>
            <a className="text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">Sale</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex relative group/search w-64 lg:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/70">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="block w-full pl-10 pr-3 py-2 border-none bg-white/20 backdrop-blur-sm rounded-none text-sm text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/40 focus:bg-white/30 transition-all" 
              placeholder="Search collections..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <button aria-label="Account" className="p-2 text-white hover:text-white/80 transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            <button aria-label="Cart" className="relative p-2 text-white hover:text-white/80 transition-colors group">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="absolute top-1 right-1 flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </button>
            <button className="lg:hidden p-2 text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;