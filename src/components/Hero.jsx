import React from 'react';

const Hero = () => {
  return (
    <section className="relative px-6 py-32 md:py-48 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
      >
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite-dark via-anthracite-dark/80 to-anthracite-dark/40"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-brand-green-light bg-brand-green/10 border border-brand-green/30 rounded-full tracking-wide">
          СИСТЕМА АВТОНОМНОГО ОТОПЛЕНИЯ
        </div>
        
        <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight text-white mb-8 tracking-tight">
          Надоело жить в котельной? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-light to-emerald-300">
            Автономное тепло до 10 дней
          </span>
          <br className="hidden md:block" /> на одной загрузке.
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Пока классические котлы требуют внимания каждые 6 часов, автоматика <strong className="font-medium text-white shadow-sm">SIBERIA FORCE</strong> поддерживает стабильные +24°C в доме без вашего участия.
        </p>
        
        <button className="group relative px-8 py-4 bg-brand-green hover:bg-brand-green-light text-white font-medium text-lg rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(4,120,87,0.4)] hover:shadow-[0_0_40px_rgba(5,150,105,0.6)] hover:-translate-y-1 overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            Рассчитать мощность по СНиП и получить смету
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 block bg-gradient-to-r from-brand-green-light via-emerald-400 to-brand-green-light opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
