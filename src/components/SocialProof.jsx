import React from 'react';
import irkutskVideo from '../assets/Man_shows_boiler_202603222116.mp4';

const SocialProof = () => {
  const videos = [
    { city: 'Иркутск', temp: '-45°C', fuel: 'Уголь (Балахта)', src: irkutskVideo },
    { city: 'Красноярск', temp: '-42°C', fuel: 'Пеллеты', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    { city: 'Сургут', temp: '-47°C', fuel: 'Уголь (Орех)', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
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
            <div key={i} className="block group relative rounded-2xl overflow-hidden bg-anthracite-light border border-white/5 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <div className="aspect-[9/16] bg-black relative flex items-center justify-center overflow-hidden">
                <video 
                  src={vid.src} 
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
                
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none"></div>
                
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-none pr-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur border border-white/10 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                    📍 {vid.city}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur border border-blue-500/30 text-blue-300 rounded-full text-xs font-bold flex items-center gap-1.5">
                    ❄️ {vid.temp}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <p className="text-sm text-gray-300 font-medium mb-1 drop-shadow-md">Тип топлива</p>
                  <p className="text-lg text-white font-serif drop-shadow-md">{vid.fuel}</p>
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
