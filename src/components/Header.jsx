import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-8 pb-4 px-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex items-center gap-4">
        {/* Логотип: Картинка пользователя */}
        <img 
          src="/images/logo.png" 
          alt="Siberia Force" 
          className="h-16 md:h-24 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] object-contain" 
        />
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
