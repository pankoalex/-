import React from 'react';

const SocialProof = () => {
  const videos = [
    { city: 'Иркутск', temp: '-45°C', fuel: 'Уголь (Балахта)' },
    { city: 'Красноярск', temp: '-42°C', fuel: 'Пеллеты' },
    { city: 'Сургут', temp: '-47°C', fuel: 'Уголь (Орех)' },
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Как это работает в <span className="text-blue-400">-45°C</span>? <br className="hidden md:block"/>
            Видео-отчеты из Сибири
          </h2>
          <p className="text-gray-400 text-lg">
            Никаких анонимных текстов. Только видео от владельцев с демонстрацией температуры в доме и расхода топлива за месяц. Посмотрите, как ведут себя шнеки при попадании крупного угля и камней.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-anthracite-light border border-white/5 cursor-pointer">
              <div 
                className="aspect-[9/16] bg-anthracite-dark relative flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/social.png')" }}
              >
                {/* Mockup video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                
                <div className="w-16 h-16 rounded-full bg-brand-green/90 text-white flex items-center justify-center z-20 group-hover:scale-110 group-hover:bg-brand-green-light transition-all shadow-[0_0_30px_rgba(4,120,87,0.5)]">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur border border-white/10 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                    📍 {vid.city}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur border border-blue-500/30 text-blue-300 rounded-full text-xs font-bold flex items-center gap-1.5">
                    ❄️ {vid.temp}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-sm text-gray-300 font-medium mb-1">Тип топлива</p>
                  <p className="text-lg text-white font-serif">{vid.fuel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
