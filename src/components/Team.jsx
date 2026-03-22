import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'Евгений Болотов',
      role: 'Главный инженер-теплотехник',
      exp: 'Опыт: 15 лет',
      desc: 'Отвечает за расчеты теплопотерь сложных объектов и обучение монтажных бригад. Спроектировал более 400 систем отопления.',
      photo: '/images/engineer.png'
    },
    {
      name: 'Славка',
      role: 'Руководитель сервисной службы',
      exp: 'Опыт: 12 лет',
      desc: 'На связи 24/7. Знает устройство котла до последнего винтика. Лично контролирует качество сварных швов на производстве.',
      photo: '/images/manager.png'
    },
    {
      name: 'Алексей Панько',
      role: 'Технический консультант',
      exp: 'Опыт: 8 лет',
      desc: 'Проводит аудит проектов и помогает клиентам подобрать оптимальную мощность оборудования без переплат.',
      photo: '/images/consultant_male.png'
    }
  ];

  return (
    <section className="py-24 bg-anthracite-dark relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Наша команда</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Люди, которые решат вашу <br className="hidden md:block" />Проблему энергозависимости
          </h3>
          <p className="text-gray-400 text-lg">
            Мы не просто продаем железо. За каждым котлом стоят инженеры, которые отвечают за тепло в вашем доме.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-anthracite-light/50 border border-white/5 rounded-3xl p-8 hover:bg-anthracite-light transition-colors relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-[40px] group-hover:bg-brand-green/20 transition-all duration-500"></div>

              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-20 h-20 rounded-full border-2 border-brand-green/30 overflow-hidden shrink-0 shadow-lg">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold font-serif mb-1">{member.name}</h4>
                  <p className="text-brand-green-light font-medium text-sm">{member.role}</p>
                </div>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-gray-300 mb-4 border border-white/10">
                  {member.exp}
                </span>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
