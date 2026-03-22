import React from 'react';

const ServiceCard = ({ number, title, pain, result }) => (
  <div className="group bg-anthracite-light/50 border border-white/5 hover:border-brand-green/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,120,87,0.15)] hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
    {/* Subtle gradient hover effect */}
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-brand-green/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="text-5xl font-serif text-brand-green/20 mb-6 font-bold absolute top-6 right-6 select-none pointer-events-none">
      {number}
    </div>
    
    <h3 className="text-2xl font-serif font-bold text-white mb-8 border-b border-white/10 pb-4 relative z-10">
      {title}
    </h3>
    
    <div className="mb-6 flex-grow relative z-10">
      <div className="flex items-start gap-3 mb-2">
        <span className="shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
          <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        <h4 className="text-red-400 font-medium uppercase text-xs tracking-wider">Боль</h4>
      </div>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-9">
        {pain}
      </p>
    </div>
    
    <div className="relative z-10 mt-auto bg-brand-green/5 rounded-xl p-5 border border-brand-green/10">
      <div className="flex items-start gap-3 mb-2">
        <span className="shrink-0 w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center mt-0.5">
          <svg className="w-4 h-4 text-brand-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h4 className="text-brand-green-light font-medium uppercase text-xs tracking-wider">Результат</h4>
      </div>
      <p className="text-gray-200 text-sm md:text-base leading-relaxed pl-9 font-medium">
        {result}
      </p>
    </div>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      title: "Переход на «Автомат»",
      pain: "Постоянные спуски в подвал, сажа на руках и страх, что дом остынет к утру.",
      result: "Заходите в котельную раз в неделю на 15 минут, чтобы досыпать топливо. Система сама дозирует подачу с точностью до грамма."
    },
    {
      title: "Проектирование обвязки и монтаж",
      pain: "Страх, что из трубы потечет деготь (конденсат) или система закипит при отключении света.",
      result: "Монтаж по чек-листу из 12 пунктов с установкой системы аварийного сброса тепла. Котел работает стабильно и сухо даже при -45°C."
    },
    {
      title: "Экономический аудит отопления",
      pain: "Непонимание, во сколько реально обойдется тепло (стоимость «железа» vs стоимость владения).",
      result: "Расчет окупаемости системы на 5 лет вперед с учетом вашего типа топлива. Вы видите реальную экономию бюджета до покупки."
    }
  ];

  return (
    <section className="py-24 bg-anthracite relative id='services'">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Наши Услуги</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Решаем ваши проблемы <br className="hidden md:block" /> с отоплением навсегда
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              number={`0${index + 1}`}
              title={service.title}
              pain={service.pain}
              result={service.result}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
