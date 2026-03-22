import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Александр',
      location: 'г. Красноярск, дом 180 м²',
      text: 'Перешел с обычного твердотопливного. Разница колоссальная. Загружаю бункер раз в 7-8 дней, дома стабильно +24. Пыли в котельной больше нет. Первый сезон отработал как часы, даже когда вырубили свет на сутки, ИБП спокойно потянул.',
      rating: 5
    },
    {
      name: 'Игорь В.',
      location: 'г. Новосибирск, дом 220 м²',
      text: 'Очень понравилось отношение команды. Сделали расчет, оказалось, мне нужен котел меньше, чем я планировал. Сэкономил около 30 тысяч. Монтажники оценили чек-лист, сказали, что впервые видят такую подробную инструкцию. Советую!',
      rating: 5
    },
    {
      name: 'Дмитрий',
      location: 'Иркутская обл., дом 150 м²',
      text: 'Уголь попался с камнями, думал срежет шнек. Но автоматика отработала реверсом, камень выплюнуло, и котел продолжил работу. За зиму ни разу не вставал. Жене нравится, что дома чисто и нет запаха дыма, как раньше.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-anthracite relative id='testimonials'">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Реальные отзывы людей, <br className="hidden md:block" /> которые уже выбрали свободу
            </h2>
            <p className="text-gray-400 text-lg">
              Опыт владельцев систем из самых холодных регионов страны.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center bg-anthracite-light px-4 py-2 rounded-xl border border-white/10">
              <span className="text-yellow-400 font-bold mr-2">4.9/5</span>
              <div className="flex text-yellow-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <span className="text-gray-500 text-sm ml-2">На Яндексе</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-anthracite-light p-8 rounded-3xl border border-white/5 relative">
              <div className="text-brand-green/20 text-6xl font-serif absolute top-4 right-4 pointer-events-none">"</div>
              
              <div className="flex text-yellow-500 text-sm mb-6">
                {'★'.repeat(rev.rating)}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8 min-h-[100px] relative z-10 italic">
                {rev.text}
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-anthracite-dark border border-white/10 flex items-center justify-center font-bold text-gray-500">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <p className="text-gray-500 text-xs">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
