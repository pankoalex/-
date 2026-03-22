import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-8 pb-4 px-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex items-center gap-4">
        {/* Логотип: Медвежья лапа с огнем */}
        <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-full h-full text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <ellipse cx="6" cy="9" rx="2" ry="3" fill="currentColor" transform="rotate(-30 6 9)" />
            <ellipse cx="18" cy="9" rx="2" ry="3" fill="currentColor" transform="rotate(30 18 9)" />
            <ellipse cx="12" cy="6" rx="2.5" ry="3.5" fill="currentColor" />
            <path fill="currentColor" d="M12,12 C6.5,12 4.5,15 5,19 C5.5,22.5 9,21.5 12,21.5 C15,21.5 18.5,22.5 19,19 C19.5,15 17.5,12 12,12 Z" />
          </svg>
          
          <svg viewBox="0 0 24 24" className="absolute top-[68%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 drop-shadow-[0_0_12px_rgba(249,115,22,0.9)]">
            <defs>
              <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fcd34d" />
              </linearGradient>
            </defs>
            <path fill="url(#fireGrad)" d="M12,22 C8,22 5,19 5,15 C5,12 8,8 12,4 C12,4 11,7 13,9 C15,11 18,12 19,15 C19,19 16,22 12,22 Z" />
            <path fill="#fde68a" d="M12,22 C9.5,22 8,20.5 8,18.5 C8,17 9.5,14.5 11,13 C11,13 10,14.5 11.5,16 C12.5,17 14,17.5 14,18.5 C14,20.5 13,22 12,22 Z" />
          </svg>
        </div>
        
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-black tracking-widest text-white leading-none font-serif" style={{textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>
            SIBERIA<br/>FORCE
          </span>
          <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest text-gray-300 mt-1 drop-shadow-md">
            Tested by winter, trusted by world
          </span>
        </div>
      </div>
      
      <nav className="hidden lg:flex gap-8 text-sm font-bold tracking-wide text-gray-200">
        <a href="#features" className="hover:text-brand-green-light hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] transition-all">ПРЕИМУЩЕСТВА</a>
        <a href="#calculator" className="hover:text-brand-green-light hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] transition-all">КАЛЬКУЛЯТОР</a>
        <a href="#team" className="hover:text-brand-green-light hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] transition-all">КОМАНДА</a>
      </nav>
      
      <button className="lg:hidden text-white drop-shadow-md">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </header>
  );
};

export default Header;
