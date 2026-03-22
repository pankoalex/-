import React, { useState } from 'react';

const Calculator = () => {
  const [area, setArea] = useState(100);
  const [material, setMaterial] = useState('газобетон');
  const [height, setHeight] = useState(2.8);

  // A mockup calculation for visual feedback
  const calculatePower = () => {
    let base = (area * height) / 30;
    if (material === 'бревно') base *= 1.2;
    if (material === 'кирпич') base *= 1.1;
    return Math.ceil(base);
  };

  return (
    <section className="py-24 bg-anthracite relative id='calculator'">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMyZDJkMmQiPjwvcmVjdD48cGF0aCBkPSJNMCAwTDAgOEw4IDhMOCAwWk0xIDFMNyAxTDcgN0wxIDdaIiBmaWxsPSIjMmEyYTJhIj48L3BhdGg+PC9zdmc+')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Хватит гадать с мощностью — получите расчет по СНиП за <span className="text-brand-green-light">60 секунд</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Наш алгоритм учитывает не только площадь, но и материал стен (газобетон/бревно/кирпич), высоту потолков и площадь остекления.
            </p>
            
            <div className="bg-brand-green/10 border border-brand-green/30 p-6 rounded-2xl flex items-start gap-4">
              <span className="text-3xl">🛡️</span>
              <div>
                <h4 className="text-white font-bold mb-1">Финансовая ответственность</h4>
                <p className="text-brand-green-light text-sm">
                  Если выбранный по нашему расчету котел не прогреет дом — заменим на более мощный за наш счет.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-anthracite-light rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-8 relative z-10">Параметры дома</h3>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <label className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Площадь дома (м²)</span>
                    <span className="text-white font-bold">{area} м²</span>
                  </label>
                  <input 
                    type="range" 
                    min="50" max="400" step="10"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-green-light"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Основной материал стен</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['газобетон', 'бревно', 'кирпич'].map(m => (
                      <button 
                        key={m}
                        onClick={() => setMaterial(m)}
                        className={`py-3 px-2 rounded-xl text-sm transition-all ${material === m ? 'bg-brand-green text-white font-medium border-brand-green' : 'bg-anthracite border-white/10 text-gray-400 hover:text-white border'}`}
                      >
                        {m.charAt(0).toUpperCase() + m.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Высота потолков (м)</span>
                    <span className="text-white font-bold">{height.toFixed(1)} м</span>
                  </label>
                  <input 
                    type="range" 
                    min="2.2" max="4.0" step="0.1"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-green-light"
                  />
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Рекомендуемая мощность</p>
                    <p className="text-3xl font-serif font-bold text-brand-green-light">{calculatePower()} кВт</p>
                  </div>
                  <button className="px-6 py-3 bg-white text-anthracite font-bold rounded-xl hover:bg-gray-200 transition-colors">
                    Получить смету
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
